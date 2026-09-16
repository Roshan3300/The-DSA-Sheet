import { useState } from 'react';
import { X } from 'lucide-react';

type Resource = {
  id?: string;
  company_name: string;
  title: string;
  description: string;
  resource_type: string;
  difficulty: string;
  resource_url: string;
  content: string;
  display_order?: number;
};

const sections = ['Question Types', 'Asked Questions', 'Videos', 'Resources', 'Important Key Points'];

interface CompanyResourceFormProps {
  resource: Resource;
  companies: string[];
  onClose: () => void;
  onSave: (resource: Resource) => Promise<void>;
}

export const CompanyResourceForm = ({ resource, companies, onClose, onSave }: CompanyResourceFormProps) => {
  const [form, setForm] = useState(resource);
  const [saving, setSaving] = useState(false);
  const isVideo = form.resource_type === 'Videos';
  const isAskedQuestion = form.resource_type === 'Asked Questions';
  const isKeyPoint = form.resource_type === 'Important Key Points';
  const isLinkResource = form.resource_type === 'Resources';

  const update = (field: keyof Resource, value: string) => setForm((current) => ({ ...current, [field]: value }));
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
    await onSave(form);
    setSaving(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <form onSubmit={submit} className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div><p className="text-sm text-blue-600">Company resource</p><h2 className="text-xl font-bold text-gray-800">{resource.id ? 'Edit Resource' : `Add ${form.resource_type}`}</h2></div>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"><X className="h-5 w-5" /></button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-gray-700">Company
            <select value={form.company_name} onChange={(event) => update('company_name', event.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal">{companies.map((company) => <option key={company}>{company}</option>)}</select>
          </label>
          <label className="text-sm font-medium text-gray-700">Resource section
            <select value={form.resource_type} onChange={(event) => update('resource_type', event.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal">{sections.map((section) => <option key={section}>{section}</option>)}</select>
          </label>
        </div>

        <label className="mt-4 block text-sm font-medium text-gray-700">{isVideo ? 'Video title' : isAskedQuestion ? 'Question title' : isKeyPoint ? 'Key point title' : 'Resource title'}
          <input required value={form.title} onChange={(event) => update('title', event.target.value)} placeholder={isVideo ? 'Example: Amazon interview experience' : isAskedQuestion ? 'Example: Reverse a linked list' : 'Enter a clear title'} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" />
        </label>

        <label className="mt-4 block text-sm font-medium text-gray-700">{isAskedQuestion ? 'Problem statement' : isKeyPoint ? 'Key point details' : 'Description'}
          <textarea required={!isVideo} value={form.description} onChange={(event) => update('description', event.target.value)} rows={isKeyPoint ? 5 : 3} placeholder={isAskedQuestion ? 'Write the complete interview question...' : isKeyPoint ? 'Write the important points, patterns, or preparation notes...' : 'Explain what this resource contains...'} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" />
        </label>

        {isAskedQuestion && <label className="mt-4 block text-sm font-medium text-gray-700">Solution / answer
          <textarea required value={form.content} onChange={(event) => update('content', event.target.value)} rows={9} placeholder="Add the solution, approach, or answer..." className="mt-1 w-full rounded-lg border px-3 py-2 font-mono text-sm font-normal" />
        </label>}

        {(isVideo || isLinkResource) && <label className="mt-4 block text-sm font-medium text-gray-700">{isVideo ? 'Video link' : 'Resource link'}
          <input required type="url" value={form.resource_url} onChange={(event) => update('resource_url', event.target.value)} placeholder={isVideo ? 'https://youtube.com/...' : 'https://prepinsta.com/...'} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" />
        </label>}

        {!isAskedQuestion && !isKeyPoint && <label className="mt-4 block text-sm font-medium text-gray-700">Additional notes or content
          <textarea value={form.content} onChange={(event) => update('content', event.target.value)} rows={6} placeholder="Add notes, syllabus, examples, or useful details..." className="mt-1 w-full rounded-lg border px-3 py-2 font-normal" />
        </label>}

        {(isAskedQuestion || form.resource_type === 'Question Types') && <label className="mt-4 block text-sm font-medium text-gray-700">Difficulty
          <select value={form.difficulty} onChange={(event) => update('difficulty', event.target.value)} className="mt-1 w-full rounded-lg border px-3 py-2 font-normal"><option>All</option><option>Easy</option><option>Medium</option><option>Hard</option></select>
        </label>}

        <button disabled={saving} className="mt-6 rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white hover:bg-blue-600 disabled:opacity-60">{saving ? 'Saving...' : 'Save Resource'}</button>
      </form>
    </div>
  );
};
