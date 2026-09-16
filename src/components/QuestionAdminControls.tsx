import { useEffect, useState } from 'react';
import { Question, supabase } from '../lib/supabase';
import { Edit3, Plus, Trash2, X } from 'lucide-react';

type QuestionTable = 'questions' | 'sql_questions';

interface QuestionAdminControlsProps {
  question?: Question;
  isAdmin: boolean;
  table: QuestionTable;
  nextOrder: number;
  onSaved: () => void;
  onDeleted: () => void;
}

export const QuestionAdminControls = ({ question, isAdmin, table, nextOrder, onSaved, onDeleted }: QuestionAdminControlsProps) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(question?.title ?? '');
  const [category, setCategory] = useState(question?.category ?? '');
  const [difficulty, setDifficulty] = useState<Question['difficulty']>(question?.difficulty ?? 'Easy');
  const [problemUrl, setProblemUrl] = useState(question?.problem_url ?? '');
  const [solution, setSolution] = useState(question?.solution ?? '');
  const [tags, setTags] = useState(question?.tags.join(', ') ?? '');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setTitle(question?.title ?? '');
    setCategory(question?.category ?? '');
    setDifficulty(question?.difficulty ?? 'Easy');
    setProblemUrl(question?.problem_url ?? '');
    setSolution(question?.solution ?? '');
    setTags(question?.tags.join(', ') ?? '');
  }, [question]);

  if (!isAdmin) return null;

  const save = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
    const payload = {
      title: title.trim(),
      category: category.trim(),
      difficulty,
      problem_url: problemUrl.trim() || '#',
      solution: solution.trim(),
      tags: tags.split(',').map((tag) => tag.trim()).filter(Boolean),
      display_order: question?.display_order ?? nextOrder,
    };
    const questionPayload = table === 'sql_questions' ? payload : { ...payload, platform: 'LeetCode' };
    const result = question
      ? await supabase.from(table).update(questionPayload).eq('id', question.id)
      : await supabase.from(table).insert(questionPayload);
    setSaving(false);
    if (!result.error) {
      setOpen(false);
      onSaved();
    }
  };

  const remove = async () => {
    if (!question || !window.confirm('Delete this question?')) return;
    const result = await supabase.from(table).delete().eq('id', question.id);
    if (!result.error) onDeleted();
  };

  return (
    <>
      {question ? (
        <div className="flex items-center gap-1">
          <button type="button" onClick={() => setOpen(true)} aria-label="Edit question" className="rounded p-1 text-gray-400 hover:bg-blue-50 hover:text-blue-600"><Edit3 className="h-4 w-4" /></button>
          <button type="button" onClick={remove} aria-label="Delete question" className="rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
        </div>
      ) : (
        <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"><Plus className="h-4 w-4" /> Add Question</button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <form onSubmit={save} className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-bold text-gray-800">{question ? 'Edit Question' : 'Add Question'}</h2><button type="button" onClick={() => setOpen(false)} aria-label="Close"><X className="h-5 w-5" /></button></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium text-gray-700">Title<input required value={title} onChange={(event) => setTitle(event.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" /></label>
              <label className="text-sm font-medium text-gray-700">Category<input required value={category} onChange={(event) => setCategory(event.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" /></label>
              <label className="text-sm font-medium text-gray-700">Difficulty<select value={difficulty} onChange={(event) => setDifficulty(event.target.value as Question['difficulty'])} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal"><option>Easy</option><option>Medium</option><option>Hard</option></select></label>
              <label className="text-sm font-medium text-gray-700">Problem URL<input value={problemUrl} onChange={(event) => setProblemUrl(event.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" /></label>
            </div>
            <label className="mt-4 block text-sm font-medium text-gray-700">Solution / Code<textarea required value={solution} onChange={(event) => setSolution(event.target.value)} rows={12} className="mt-1 w-full rounded-lg border px-3 py-2 font-mono text-sm font-normal" /></label>
            <label className="mt-4 block text-sm font-medium text-gray-700">Tags<input value={tags} onChange={(event) => setTags(event.target.value)} placeholder="array, string" className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" /></label>
            <button disabled={saving} className="mt-5 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 disabled:opacity-60">{saving ? 'Saving...' : 'Save Question'}</button>
          </form>
        </div>
      )}
    </>
  );
};
