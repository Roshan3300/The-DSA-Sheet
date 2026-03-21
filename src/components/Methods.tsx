import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, Method } from '../lib/supabase';
import { Plus, Code2, X, FileText, Search, Star, Edit3, Trash2 } from 'lucide-react';

interface MethodModalProps {
  method: Method;
  onClose: () => void;
  isOwner: boolean;
  onEdit: () => void;
}

const MethodModal = ({ method, onClose, isOwner, onEdit }: MethodModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">{method.title}</h2>
              <div className="flex flex-wrap gap-2 text-sm">
                {method.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isOwner && (
                <button
                  type="button"
                  onClick={onEdit}
                  className="px-3 py-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition"
                >
                  <Edit3 className="w-5 h-5" />
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 hover:bg-white/20 rounded-lg transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {method.description && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-700 whitespace-pre-line">{method.description}</p>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Code</h3>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed">
                {method.code || 'No code provided.'}
              </pre>
            </div>
          </div>

          <div className="text-sm text-gray-500">Added on: {new Date(method.created_at).toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export const Methods = () => {
  const { user } = useAuth();
  const [methods, setMethods] = useState<Method[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<Method | null>(null);
  const [editingMethod, setEditingMethod] = useState<Method | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      setMethods([]);
      setLoading(false);
      return;
    }

    fetchMethods();
  }, [user?.id]);

  const fetchMethods = async () => {
    if (!user?.id) {
      setMethods([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');

    const { data, error } = await supabase
      .from('methods')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setError(error.message);
    } else if (data) {
      const mapped = data.map((m: any) => ({ ...m, tags: m.tags ?? [] }));
      setMethods(mapped);
    }

    setLoading(false);
  };

  const toggleFavorite = async (method: Method) => {
    setError('');

    const { error } = await supabase
      .from('methods')
      .update({ is_favorite: !method.is_favorite })
      .eq('id', method.id);

    if (error) {
      setError(error.message);
      return;
    }

    setMethods((prev) =>
      prev.map((m) => (m.id === method.id ? { ...m, is_favorite: !m.is_favorite } : m))
    );
  };

  const handleSaveMethod = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    setSubmitting(true);

    const tagsArray = tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (editingMethod) {
      const { error } = await supabase
        .from('methods')
        .update({
          title: title.trim(),
          description: description.trim(),
          code: code.trim(),
          tags: tagsArray,
        })
        .eq('id', editingMethod.id);

      if (error) {
        setError(error.message);
      } else {
        setEditingMethod(null);
        setTitle('');
        setDescription('');
        setCode('');
        setTags('');
        setShowAdd(false);
        fetchMethods();
      }
    } else {
      const { error } = await supabase.from('methods').insert({
        user_id: user?.id,
        title: title.trim(),
        description: description.trim(),
        code: code.trim(),
        tags: tagsArray,
        is_favorite: false,
      });

      if (error) {
        setError(error.message);
      } else {
        setTitle('');
        setDescription('');
        setCode('');
        setTags('');
        setShowAdd(false);
        fetchMethods();
      }
    }

    setSubmitting(false);
  };

  const handleEditMethod = (method: Method) => {
    setEditingMethod(method);
    setTitle(method.title);
    setDescription(method.description);
    setCode(method.code);
    setTags(method.tags.join(', '));
    setShowAdd(true);
  };

  const handleDeleteMethod = async (method: Method) => {
    const confirmed = window.confirm('Delete this method? This cannot be undone.');
    if (!confirmed) return;

    const { error } = await supabase.from('methods').delete().eq('id', method.id);
    if (error) {
      setError(error.message);
    } else {
      fetchMethods();
      if (selectedMethod?.id === method.id) setSelectedMethod(null);
    }
  };

  const filteredMethods = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return methods;

    return methods.filter((m) => {
      const inTitle = m.title.toLowerCase().includes(term);
      const inDesc = m.description.toLowerCase().includes(term);
      const inTags = m.tags.some((tag) => tag.toLowerCase().includes(term));
      return inTitle || inDesc || inTags;
    });
  }, [methods, searchTerm]);

  const tagCount = useMemo(() => {
    const unique = new Set(methods.flatMap((m) => m.tags));
    return unique.size;
  }, [methods]);

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
            <Code2 className="w-6 h-6 text-blue-600" />
            C++ Methods
          </h2>
          <p className="text-sm text-gray-600">
            Store and revisit your favorite algorithm implementations (palindrome, prime check, sorting, etc.).
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAdd(true)}
          className="inline-flex items-center gap-2 px-5 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          <Plus className="w-4 h-4" />
          Add Method
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search methods..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>
        <div className="text-sm text-gray-500">
          {filteredMethods.length} method{filteredMethods.length === 1 ? '' : 's'} found
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Summary</h3>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Total methods</span>
              <span className="font-medium">{methods.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Total tags</span>
              <span className="font-medium">{tagCount}</span>
            </div>
            <div className="flex justify-between">
              <span>Last updated</span>
              <span className="font-medium">
                {methods[0] ? new Date(methods[0].created_at).toLocaleDateString() : '—'}
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Methods</h3>
          {filteredMethods.length === 0 ? (
            <div className="text-gray-500">No methods found. Try adjusting your search or add a new method.</div>
          ) : (
            <div className="space-y-4">
              {filteredMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method)}
                  className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-4 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h4 className="text-lg font-semibold text-gray-800">{method.title}</h4>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={async (e) => {
                              e.stopPropagation();
                              await toggleFavorite(method);
                            }}
                            className={
                              method.is_favorite
                                ? 'text-yellow-500 hover:text-yellow-600'
                                : 'text-gray-400 hover:text-yellow-500'
                            }
                            aria-label={method.is_favorite ? 'Unmark favorite' : 'Mark as favorite'}
                          >
                            <Star className="w-5 h-5" />
                          </button>

                          {method.user_id === user?.id && (
                            <>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditMethod(method);
                                }}
                                className="text-gray-500 hover:text-blue-600"
                                aria-label="Edit method"
                              >
                                <Edit3 className="w-5 h-5" />
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteMethod(method);
                                }}
                                className="text-gray-500 hover:text-red-600"
                                aria-label="Delete method"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {method.description || 'No description provided.'}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-xs font-medium text-gray-500">{new Date(method.created_at).toLocaleDateString()}</span>
                      <FileText className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {method.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {method.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showAdd && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Add Method</h3>
              <button
                type="button"
                onClick={() => setShowAdd(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSaveMethod} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Check Prime Number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Describe what the method does..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Code (C++)</label>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                  rows={8}
                  placeholder={"e.g. \nint isPrime(int n) { ... }"}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
                <input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="prime, math, loops"
                />
              </div>

              {error && (
                <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
                  {error}
                </div>
              )}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAdd(false)}
                  className="px-5 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-60"
                >
                  {submitting ? 'Saving…' : 'Save Method'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedMethod && (
        <MethodModal
          method={selectedMethod}
          onClose={() => setSelectedMethod(null)}
          isOwner={selectedMethod.user_id === user?.id}
          onEdit={() => selectedMethod && handleEditMethod(selectedMethod)}
        />
      )}
    </div>
  );
};
