import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, SQLQuestion, SQLUserProgress } from '../lib/supabase';
import { Search, Filter, Database } from 'lucide-react';
import { QuestionList } from './QuestionList';
import { SolutionModal } from './SolutionModal';

export const SQLQuestions = () => {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<SQLQuestion[]>([]);
  const [userProgress, setUserProgress] = useState<Map<string, SQLUserProgress>>(new Map());
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showCompleted, setShowCompleted] = useState<'all' | 'completed' | 'pending'>('all');
  const [selectedQuestion, setSelectedQuestion] = useState<SQLQuestion | null>(null);

  useEffect(() => {
    fetchSQLQuestions();
    fetchUserProgress();
  }, []);

  const fetchSQLQuestions = async () => {
    const { data, error } = await supabase
      .from('sql_questions')
      .select('*')
      .order('category', { ascending: true });

    if (!error && data) {
      setQuestions(data);
    }
    setLoading(false);
  };

  const fetchUserProgress = async () => {
    const { data, error } = await supabase
      .from('sql_user_progress')
      .select('*')
      .eq('user_id', user?.id);

    if (!error && data) {
      const progressMap = new Map(data.map(p => [p.question_id, p]));
      setUserProgress(progressMap);
    }
  };

  const toggleComplete = async (questionId: string) => {
    const existing = userProgress.get(questionId);

    if (existing) {
      const newStatus = !existing.is_completed;
      const { error } = await supabase
        .from('sql_user_progress')
        .update({
          is_completed: newStatus,
          completed_at: newStatus ? new Date().toISOString() : null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existing.id);

      if (!error) {
        fetchUserProgress();
      }
    } else {
      const { error } = await supabase
        .from('sql_user_progress')
        .insert({
          user_id: user?.id,
          question_id: questionId,
          is_completed: true,
          completed_at: new Date().toISOString(),
        });

      if (!error) {
        fetchUserProgress();
      }
    }
  };

  const categories = ['All', ...new Set(questions.map(q => q.category))];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         q.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || q.difficulty === selectedDifficulty;
    const isCompleted = userProgress.get(q.id)?.is_completed || false;
    const matchesStatus = showCompleted === 'all' ||
                         (showCompleted === 'completed' && isCompleted) ||
                         (showCompleted === 'pending' && !isCompleted);

    return matchesSearch && matchesCategory && matchesDifficulty && matchesStatus;
  });

  const stats = {
    total: questions.length,
    completed: Array.from(userProgress.values()).filter(p => p.is_completed && questions.some(q => q.id === p.question_id)).length,
    easy: questions.filter(q => q.difficulty === 'Easy').length,
    medium: questions.filter(q => q.difficulty === 'Medium').length,
    hard: questions.filter(q => q.difficulty === 'Hard').length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="text-gray-600 text-sm font-medium mb-1">Total SQL Questions</div>
          <div className="text-3xl font-bold text-blue-600">{stats.total}</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="text-gray-600 text-sm font-medium mb-1">Completed</div>
          <div className="text-3xl font-bold text-green-600">{stats.completed}</div>
          <div className="text-xs text-gray-500 mt-1">
            {stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0}% Progress
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="text-gray-600 text-sm font-medium mb-1">Easy/Medium/Hard</div>
          <div className="flex space-x-2 mt-2">
            <span className="text-lg font-bold text-green-600">{stats.easy}</span>
            <span className="text-gray-400">/</span>
            <span className="text-lg font-bold text-yellow-600">{stats.medium}</span>
            <span className="text-gray-400">/</span>
            <span className="text-lg font-bold text-red-600">{stats.hard}</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="text-gray-600 text-sm font-medium mb-1">Remaining</div>
          <div className="text-3xl font-bold text-gray-700">{stats.total - stats.completed}</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-800">SQL Filters</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search SQL questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter by category"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              aria-label="Filter by difficulty"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              {difficulties.map(diff => <option key={diff} value={diff}>{diff}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={showCompleted}
              onChange={(e) => setShowCompleted(e.target.value as 'all' | 'completed' | 'pending')}
              aria-label="Filter by completion status"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
      </div>

      <QuestionList
        questions={filteredQuestions}
        userProgress={userProgress}
        onToggleComplete={toggleComplete}
        onViewSolution={setSelectedQuestion}
      />

      {selectedQuestion && (
        <SolutionModal
          question={selectedQuestion}
          onClose={() => setSelectedQuestion(null)}
        />
      )}
    </div>
  );
};