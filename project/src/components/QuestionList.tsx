import { Question, UserProgress } from '../lib/supabase';
import { ExternalLink, CheckCircle2, Circle, Eye } from 'lucide-react';

interface QuestionListProps {
  questions: Question[];
  userProgress: Map<string, UserProgress>;
  onToggleComplete: (questionId: string) => void;
  onViewSolution: (question: Question) => void;
}

export const QuestionList = ({ questions, userProgress, onToggleComplete, onViewSolution }: QuestionListProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-50 border-green-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Hard': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'LeetCode': return 'bg-orange-100 text-orange-700';
      case 'GeeksForGeeks': return 'bg-green-100 text-green-700';
      case 'CodingNinjas': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (questions.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-12 text-center">
        <div className="text-gray-400 text-lg">No questions found matching your filters</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {questions.map((question) => {
        const isCompleted = userProgress.get(question.id)?.is_completed || false;

        return (
          <div
            key={question.id}
            className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 transform hover:-translate-y-1 ${
              isCompleted ? 'border-green-500 bg-green-50/30' : 'border-blue-500'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start space-x-4 flex-1">
                <button
                  type="button"
                  onClick={() => onToggleComplete(question.id)}
                  aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                  className="mt-1 transform transition-all duration-300 hover:scale-110"
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600 animate-in" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-400 hover:text-blue-600" />
                  )}
                </button>

                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-2 ${isCompleted ? 'line-through text-gray-600' : 'text-gray-800'}`}>
                    {question.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(question.difficulty)}`}>
                      {question.difficulty}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPlatformColor(question.platform)}`}>
                      {question.platform}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
                      {question.category}
                    </span>
                  </div>

                  {question.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {question.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={question.problem_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <span className="text-sm font-medium">Solve</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {question.solution && (
                  <button
                    type="button"
                    onClick={() => onViewSolution(question)}
                    className="flex items-center space-x-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">Solution</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
