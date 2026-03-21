import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, UserQuestion } from '../lib/supabase';
import { Plus, BookOpen, X, Search, Edit3, Trash2 } from 'lucide-react';

export const MyQuestions = () => {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<UserQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<UserQuestion | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [title, setTitle] = useState('');
  const [prompt, setPrompt] = useState('');
  const [solution, setSolution] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  // 🔑 Updated fetchQuestions: left join to get all questions
  const fetchQuestions = async () => {
    setLoading(true);
    setError('');
    const { data, error } = await supabase
      .from('user_questions')
      .select(`*, users!left(full_name)`) // ← LEFT JOIN fixes RLS issue
      .order('created_at', { ascending: false });

    if (error) {
      setError(error.message);
    } else if (data) {
      const mapped = data.map((q: UserQuestion & { users?: { full_name: string } }) => ({
        ...q,
        tags: q.tags ?? [],
      }));
      setQuestions(mapped);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!title.trim() || !prompt.trim() || !solution.trim()) {
      setError('Title, prompt, and solution are required.');
      return;
    }

    const tagsArray = tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    setSubmitting(true);

    if (!user?.id) {
      setError('You must be signed in.');
      setSubmitting(false);
      return;
    }

    if (editingQuestion) {
      const { error } = await supabase
        .from('user_questions')
        .update({
          title: title.trim(),
          prompt: prompt.trim(),
          solution: solution.trim(),
          tags: tagsArray,
        })
        .eq('id', editingQuestion.id);

      if (error) {
        setError(error.message);
      } else {
        setEditingQuestion(null);
        setTitle('');
        setPrompt('');
        setSolution('');
        setTags('');
        setShowForm(false);
        fetchQuestions();
      }
    } else {
      const { error } = await supabase.from('user_questions').insert({
        user_id: user.id,
        title: title.trim(),
        prompt: prompt.trim(),
        solution: solution.trim(),
        tags: tagsArray,
      });

      if (error) {
        setError(error.message);
      } else {
        setTitle('');
        setPrompt('');
        setSolution('');
        setTags('');
        setShowForm(false);
        fetchQuestions();
      }
    }

    setSubmitting(false);
  };

  const handleEdit = (question: UserQuestion) => {
    setEditingQuestion(question);
    setTitle(question.title);
    setPrompt(question.prompt);
    setSolution(question.solution);
    setTags(question.tags.join(', '));
    setShowForm(true);
  };

  const handleDelete = async (question: UserQuestion) => {
    if (!window.confirm('Delete this question? This cannot be undone.')) return;
    const { error } = await supabase.from('user_questions').delete().eq('id', question.id);
    if (error) {
      setError(error.message);
    } else {
      fetchQuestions();
    }
  };

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return questions;

    return questions.filter((q) => {
      return (
        q.title.toLowerCase().includes(term) ||
        q.prompt.toLowerCase().includes(term) ||
        q.solution.toLowerCase().includes(term) ||
        q.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    });
  }, [questions, searchTerm]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4">
          <strong className="font-semibold">Error:</strong> {error}
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            Community Questions & Solutions
          </h2>
          <p className="text-sm text-gray-600">
            Browse questions and solutions shared by the community. Add your own questions with code solutions - only you can edit your entries.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setEditingQuestion(null);
            setTitle('');
            setPrompt('');
            setSolution('');
            setTags('');
            setShowForm(true);
          }}
          className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-500 text-white rounded-xl shadow-lg hover:bg-indigo-600 transition-all duration-300"
        >
          <Plus className="w-4 h-4" />
          Add Question
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search community questions..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          />
        </div>
        <div className="text-sm text-gray-500">
          {filtered.length} question{filtered.length === 1 ? '' : 's'} found
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((q) => (
          <div key={q.id} className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
            <div className="flex justify-between items-start gap-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{q.title}</h3>
                <p className="text-sm text-gray-600 mt-2 whitespace-pre-wrap line-clamp-4">{q.prompt}</p>
                <div className="mt-3 text-xs text-gray-500 flex items-center gap-2">
                  <span>By: {q.users?.full_name || 'Unknown'}</span>
                  <span>•</span>
                  <span>Created: {new Date(q.created_at).toLocaleString()}</span>
                </div>
                {q.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {q.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {q.user_id === user?.id && (
                <div className="flex flex-col items-end gap-2">
                  <button
                    type="button"
                    onClick={() => handleEdit(q)}
                    className="text-gray-500 hover:text-indigo-600"
                  >
                    <Edit3 className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(q)}
                    className="text-gray-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
            <div className="mt-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <h4 className="text-sm font-semibold text-gray-700 mb-1">Solution / Code</h4>
              <pre className="whitespace-pre-wrap text-xs text-gray-800 font-mono max-h-36 overflow-y-auto">{q.solution}</pre>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-gray-500">No community questions yet. Be the first to add one above!</div>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{editingQuestion ? 'Edit Question' : 'Add Question'}</h3>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter the question title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prompt (question)</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Describe the problem statement"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Solution/Code</label>
                <textarea
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                  rows={8}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-sm"
                  placeholder="Enter solution code and explanation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
                <input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="array, string, dynamic programming"
                />
              </div>

              {error && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">{error}</div>}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-60"
                >
                  {submitting ? 'Saving…' : editingQuestion ? 'Update' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};