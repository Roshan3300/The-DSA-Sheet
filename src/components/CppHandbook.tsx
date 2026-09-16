import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { cppHandbookData, HandbookQuestion } from '../data/cppHandbookData';
import { BookOpen, Copy, Check, Code2, Clock, Database, ChevronRight, Plus, Edit3, X, Save } from 'lucide-react';

type HandbookRecord = HandbookQuestion & {
  id: string;
  categoryKey: string;
  categoryTitle: string;
};

type HandbookForm = {
  name: string;
  desc: string;
  time: string;
  space: string;
  code: string;
};

type HandbookCategoryRecord = {
  category_key: string;
  title: string;
};

export const CppHandbook = () => {
  const { user } = useAuth();
  const categoryKeys = Object.keys(cppHandbookData);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<HandbookQuestion | null>(null);
  const [copied, setCopied] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [handbookRecords, setHandbookRecords] = useState<HandbookRecord[]>([]);
  const [handbookCategories, setHandbookCategories] = useState<HandbookCategoryRecord[]>([]);
  const [editingQuestion, setEditingQuestion] = useState<HandbookForm | null>(null);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editingCategoryKey, setEditingCategoryKey] = useState<string | null>(null);
  const [editingCategoryTitle, setEditingCategoryTitle] = useState('');
  const [saving, setSaving] = useState(false);
  const [showSectionForm, setShowSectionForm] = useState(false);
  const [sectionTitle, setSectionTitle] = useState('');
  const [savingSection, setSavingSection] = useState(false);

  useEffect(() => {
    const loadHandbook = async () => {
      const [{ data: profile }, { data: records }, { data: categories }] = await Promise.all([
        user?.id ? supabase.from('users').select('is_admin').eq('id', user.id).single() : Promise.resolve({ data: null }),
        supabase.from('cpp_handbook_questions').select('*'),
        supabase.from('cpp_handbook_categories').select('category_key, title').order('created_at'),
      ]);

      setIsAdmin(profile?.is_admin === true);
      setHandbookRecords((records ?? []).map((record) => ({
        id: record.id,
        categoryKey: record.category_key,
        categoryTitle: record.category_title,
        name: record.name,
        desc: record.description,
        time: record.time_complexity,
        space: record.space_complexity,
        code: record.code,
      })));
      setHandbookCategories(categories ?? []);
    };

    loadHandbook();
  }, [user?.id]);

  const allCategoryKeys = [...new Set([
    ...categoryKeys,
    ...handbookCategories.map((category) => category.category_key),
    ...handbookRecords.map((record) => record.categoryKey),
  ])];

  const addSection = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!sectionTitle.trim() || !isAdmin) return;
    setSavingSection(true);
    const categoryKey = sectionTitle.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const { data, error } = await supabase.from('cpp_handbook_categories').insert({
      category_key: categoryKey,
      title: sectionTitle.trim(),
    }).select('category_key, title').single();

    if (!error && data) {
      setHandbookCategories((current) => [...current, data]);
      setSelectedCategory(data.category_key);
      setSelectedQuestion(null);
      setSectionTitle('');
      setShowSectionForm(false);
    }
    setSavingSection(false);
  };

  const questionsForCategory = useMemo(() => {
    if (!selectedCategory) return [];
    const baseQuestions = cppHandbookData[selectedCategory]?.questions ?? [];
    const customQuestions = handbookRecords.filter((record) => record.categoryKey === selectedCategory);
    const customByName = new Map(customQuestions.map((question) => [question.name, question]));
    const merged = baseQuestions.map((question) => customByName.get(question.name) ?? question);
    return [...merged, ...customQuestions.filter((question) => !baseQuestions.some((base) => base.name === question.name))];
  }, [handbookRecords, selectedCategory]);

  const addedQuestionsForCategory = useMemo(() => {
    if (!selectedCategory) return [];
    const baseNames = new Set(cppHandbookData[selectedCategory]?.questions.map((question) => question.name));
    return handbookRecords.filter((record) => record.categoryKey === selectedCategory && !baseNames.has(record.name));
  }, [handbookRecords, selectedCategory]);

  const openEditor = (question?: HandbookQuestion) => {
    setEditingKey(question?.name ?? null);
    setEditingCategoryKey(question ? selectedCategory : null);
    setEditingCategoryTitle(
      selectedCategory && cppHandbookData[selectedCategory]
        ? cppHandbookData[selectedCategory].title
        : handbookRecords.find((record) => record.categoryKey === selectedCategory)?.categoryTitle ?? ''
    );
    setEditingQuestion({
      name: question?.name ?? '',
      desc: question?.desc ?? '',
      time: question?.time ?? '',
      space: question?.space ?? '',
      code: question?.code ?? '',
    });
  };

  const addQuestion = () => {
    const category = selectedCategory ?? categoryKeys[0];
    setSelectedCategory(category);
    setSelectedQuestion(null);
    openEditor();
  };

  const saveQuestion = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!editingQuestion || !isAdmin) return;
    setSaving(true);
    const categoryTitle = editingCategoryTitle.trim();
    const categoryKey = editingCategoryKey ?? categoryTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const questionKey = editingKey ?? editingQuestion.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const { data, error } = await supabase.from('cpp_handbook_questions').upsert({
      category_key: categoryKey,
      category_title: categoryTitle,
      question_key: questionKey,
      name: editingQuestion.name.trim(),
      description: editingQuestion.desc.trim(),
      time_complexity: editingQuestion.time.trim(),
      space_complexity: editingQuestion.space.trim(),
      code: editingQuestion.code,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'category_key,question_key' }).select().single();

    if (!error && data) {
      const saved: HandbookRecord = {
        id: data.id,
        categoryKey: data.category_key,
        categoryTitle: data.category_title,
        name: data.name,
        desc: data.description,
        time: data.time_complexity,
        space: data.space_complexity,
        code: data.code,
      };
      setHandbookRecords((current) => [...current.filter((record) => record.categoryKey !== saved.categoryKey || record.name !== saved.name), saved]);
      setSelectedCategory(categoryKey);
      setSelectedQuestion(saved);
      setEditingQuestion(null);
    }
    setSaving(false);
  };

  const handleCopy = () => {
    if (!selectedQuestion) return;
    navigator.clipboard.writeText(selectedQuestion.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:h-[calc(100vh-8rem)]">
      {/* Column 1: Categories */}
      <div className="bg-white rounded-xl shadow-lg lg:rounded-r-none lg:rounded-l-xl border lg:border-r-0 border-gray-200 lg:w-72 flex flex-col overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              C++ Handbook
            </h2>
            </div>
            {isAdmin && (
              <button type="button" onClick={() => setShowSectionForm(true)} aria-label="Add handbook section" className="rounded-lg bg-blue-50 p-2 text-blue-600 hover:bg-blue-100">
                <Plus className="h-4 w-4" />
              </button>
            )}
          </div>
          <p className="text-xs text-gray-500">Number Algorithms & Bit Manipulation</p>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-1 max-h-64 lg:max-h-none">
          {allCategoryKeys.map((key) => {
            const cat = cppHandbookData[key];
            const categoryTitle = cat?.title ?? handbookCategories.find((category) => category.category_key === key)?.title ?? handbookRecords.find((record) => record.categoryKey === key)?.categoryTitle ?? key;
            const isActive = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedCategory(key);
                  setSelectedQuestion(null);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span className="text-left flex-1 truncate">{categoryTitle}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {(cat?.questions.length ?? 0) + handbookRecords.filter((record) => record.categoryKey === key && !(cat?.questions ?? []).some((question) => question.name === record.name)).length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Column 2: Questions */}
      <div className="bg-white rounded-xl shadow-lg lg:rounded-none border lg:border-r-0 border-gray-200 lg:w-80 flex flex-col overflow-hidden">
        <div className="p-5 border-b border-gray-100">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-gray-800">
            {selectedCategory
              ? cppHandbookData[selectedCategory]?.title ?? handbookRecords.find((record) => record.categoryKey === selectedCategory)?.categoryTitle ?? selectedCategory
              : 'Select a Category'}
                </h3>
                {isAdmin && selectedCategory && (
                  <button type="button" onClick={addQuestion} className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100">
                    <Plus className="h-3.5 w-3.5" /> Add Question
                  </button>
                )}
              </div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5 max-h-64 lg:max-h-none">
          {selectedCategory ? (
            <>
            {questionsForCategory.slice(0, questionsForCategory.length - addedQuestionsForCategory.length).map((q, idx) => {
              const isActive = selectedQuestion?.name === q.name;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedQuestion(q)}
                  className={`w-full flex items-center space-x-2 px-3 py-2.5 rounded-lg text-sm border transition-all duration-200 text-left ${
                    isActive
                      ? 'bg-blue-50 border-blue-500 text-blue-600 font-medium'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-200'
                  }`}
                >
                  <ChevronRight
                    className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-blue-500' : 'text-gray-400'}`}
                  />
                  <span className="flex-1">{q.name}</span>
                  {isAdmin && handbookRecords.some((record) => record.categoryKey === selectedCategory && record.name === q.name) && <Edit3 className="h-3.5 w-3.5 text-blue-400" />}
                </button>
              );
            })
            }
            {addedQuestionsForCategory.length > 0 && (
              <>
                <div className="px-3 pt-4 pb-1 text-xs font-bold uppercase tracking-wide text-blue-600">
                  Added Questions
                </div>
                {addedQuestionsForCategory.map((q, idx) => {
                  const isActive = selectedQuestion?.name === q.name;
                  return (
                    <button
                      key={`added-${idx}`}
                      onClick={() => setSelectedQuestion(q)}
                      className={`w-full flex items-center space-x-2 px-3 py-2.5 rounded-lg text-sm border transition-all duration-200 text-left ${
                        isActive
                          ? 'bg-blue-50 border-blue-500 text-blue-600 font-medium'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-200'
                      }`}
                    >
                      <Plus className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
                      <span className="flex-1">{q.name}</span>
                      {isAdmin && <Edit3 className="h-3.5 w-3.5 text-blue-400" />}
                    </button>
                  );
                })}
              </>
            )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center px-6 py-12">
              <Code2 className="w-12 h-12 text-gray-300 mb-3" />
              <p className="text-sm text-gray-400">
                Choose a category to browse its problems
              </p>
            </div>
          )}
        </div>
      </div>

      {isAdmin && showSectionForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <form onSubmit={addSection} className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Add Handbook Section</h2>
              <button type="button" onClick={() => setShowSectionForm(false)} aria-label="Close section form" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"><X className="h-5 w-5" /></button>
            </div>
            <label className="block text-sm font-medium text-gray-700">
              Section name
              <input required autoFocus value={sectionTitle} onChange={(event) => setSectionTitle(event.target.value)} placeholder="Example: Armstrong Number" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-blue-500 focus:outline-none" />
            </label>
            <button type="submit" disabled={savingSection} className="mt-5 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 disabled:opacity-60">
              {savingSection ? 'Adding...' : 'Add Section'}
            </button>
          </form>
        </div>
      )}

      {isAdmin && editingQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <form onSubmit={saveQuestion} className="w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">{editingKey ? 'Edit C++ Question' : 'Add C++ Question'}</h2>
              <button type="button" onClick={() => setEditingQuestion(null)} aria-label="Close editor" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-4">
              {!editingKey && (
                <label className="block text-sm font-medium text-gray-700">Section / block name
                  <input required value={editingCategoryTitle} onChange={(event) => setEditingCategoryTitle(event.target.value)} placeholder="Example: Palindrome" className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 font-normal focus:border-blue-500 focus:outline-none" />
                  <span className="mt-1 block text-xs font-normal text-gray-500">Use an existing name to add under that block, or enter a new name to create a new block.</span>
                </label>
              )}
              {([
                ['name', 'Question name'],
                ['desc', 'Description'],
                ['time', 'Time complexity'],
                ['space', 'Space complexity'],
              ] as const).map(([field, label]) => (
                <label key={field} className="block text-sm font-medium text-gray-700">
                  {label}
                  {field === 'desc' ? (
                    <textarea required value={editingQuestion[field]} onChange={(event) => setEditingQuestion({ ...editingQuestion, [field]: event.target.value })} rows={3} className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 font-normal focus:border-blue-500 focus:outline-none" />
                  ) : (
                    <input required value={editingQuestion[field]} onChange={(event) => setEditingQuestion({ ...editingQuestion, [field]: event.target.value })} className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 font-normal focus:border-blue-500 focus:outline-none" />
                  )}
                </label>
              ))}
              <label className="block text-sm font-medium text-gray-700">C++ code
                <textarea required value={editingQuestion.code} onChange={(event) => setEditingQuestion({ ...editingQuestion, code: event.target.value })} rows={14} className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 font-mono text-sm font-normal focus:border-blue-500 focus:outline-none" />
              </label>
            </div>
            <button type="submit" disabled={saving} className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 disabled:opacity-60"><Save className="h-4 w-4" />{saving ? 'Saving...' : 'Save question'}</button>
          </form>
        </div>
      )}

      {/* Column 3: Code Viewer */}
      <div className="flex-1 bg-white rounded-xl shadow-lg lg:rounded-l-none border border-gray-200 flex flex-col overflow-hidden min-h-[400px]">
        {selectedQuestion ? (
          <>
            <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{selectedQuestion.name}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{selectedQuestion.desc}</p>
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="flex items-center space-x-1.5 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-xs font-mono text-gray-600">
                    Time: <span className="text-blue-600 font-semibold">{selectedQuestion.time}</span>
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
                  <Database className="w-3.5 h-3.5 text-cyan-600" />
                  <span className="text-xs font-mono text-gray-600">
                    Space: <span className="text-cyan-600 font-semibold">{selectedQuestion.space}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col p-4 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 flex flex-col flex-1 overflow-hidden">
                <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-blue-200 bg-gradient-to-r from-blue-100 to-cyan-100">
                  <span className="text-xs font-mono text-blue-500">C++ (Standard Library)</span>
                  <div className="flex items-center gap-2">
                    {isAdmin && (
                      <button type="button" onClick={() => openEditor(selectedQuestion)} className="flex items-center gap-1.5 rounded-md border border-blue-300 bg-white px-3 py-1 text-xs font-medium text-blue-600 hover:bg-blue-500 hover:text-white">
                        <Edit3 className="h-3.5 w-3.5" /> Edit
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleCopy}
                      className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-medium border transition-all duration-200 ${
                        copied
                          ? 'bg-green-500 text-white border-green-400'
                          : 'bg-white text-blue-600 border-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500'
                      }`}
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
                <pre className="flex-1 overflow-auto p-4 text-sm font-mono text-blue-900 leading-relaxed">
                  <code>{selectedQuestion.code}</code>
                </pre>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center px-8 py-12">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-lg mb-4">
              <Code2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Interactive Code Workspace</h2>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed">
              Select a category and choose any interview problem to review the description,
              time/space complexity, and optimized implementation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
