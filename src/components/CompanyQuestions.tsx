import { useEffect, useMemo, useState } from 'react';
import { Building2, ExternalLink, FileText, Pencil, Plus, Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { CompanyResourceForm } from './CompanyResourceForm';

type CompanyResource = { id: string; company_name: string; title: string; description: string; resource_type: string; difficulty: string; resource_url: string; content: string; display_order: number };
const companies = ['Amazon', 'Google', 'Microsoft', 'NVIDIA', 'Oracle', 'PayPal', 'TCS-Ninja', 'TCS-CodeVita', 'Accenture', 'Tech-Mahindra'];
const resourceSections = ['All', 'Question Types', 'Asked Questions', 'Videos', 'Resources', 'Important Key Points'];
const legacyPlatformSections = ['PrepInsta', 'LeetCode', 'GeeksForGeeks'];

const getResourceSection = (resourceType: string) => legacyPlatformSections.includes(resourceType) ? 'Resources' : resourceType;

export const CompanyQuestions = () => {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [selectedSection, setSelectedSection] = useState('All');
  const [resources, setResources] = useState<CompanyResource[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editing, setEditing] = useState<CompanyResource | null>(null);
  const [showResourceForm, setShowResourceForm] = useState(false);
  const [form, setForm] = useState({ company_name: companies[0], title: '', description: '', resource_type: 'Question Types', difficulty: 'Medium', resource_url: '', content: '' });

  const load = async () => {
    const [{ data: auth }, { data: rows }] = await Promise.all([supabase.auth.getUser(), supabase.from('company_resources').select('*').order('company_name').order('display_order')]);
    if (auth.user) {
      const { data: profile } = await supabase.from('users').select('is_admin').eq('id', auth.user.id).single();
      setIsAdmin(profile?.is_admin === true);
    }
    setResources(rows ?? []);
  };
  useEffect(() => { load(); }, []);

  const selectedResources = useMemo(() => resources.filter((resource) => resource.company_name === selectedCompany && (selectedSection === 'All' || getResourceSection(resource.resource_type) === selectedSection)), [resources, selectedCompany, selectedSection]);
  const openAdd = () => { const section = selectedSection === 'All' ? 'Question Types' : selectedSection; setEditing(null); setForm({ company_name: selectedCompany, title: '', description: '', resource_type: section, difficulty: 'Medium', resource_url: '', content: '' }); setShowResourceForm(true); };
  const openSectionAdd = (section: string) => { setSelectedSection(section); setEditing(null); setForm({ company_name: selectedCompany, title: '', description: '', resource_type: section, difficulty: 'Medium', resource_url: '', content: '' }); setShowResourceForm(true); };
  const openEdit = (resource: CompanyResource) => { setEditing(resource); setForm(resource); setShowResourceForm(true); };
  const remove = async (resource: CompanyResource) => { if (window.confirm('Delete this resource?')) { await supabase.from('company_resources').delete().eq('id', resource.id); load(); } };
  const saveResourceForm = async (resource: Omit<CompanyResource, 'id' | 'display_order'> & { id?: string }) => {
    const payload = { ...resource, display_order: editing?.display_order ?? selectedResources.length, updated_at: new Date().toISOString() };
    const result = editing ? await supabase.from('company_resources').update(payload).eq('id', editing.id) : await supabase.from('company_resources').insert(payload);
    if (!result.error) { setShowResourceForm(false); setEditing(null); await load(); }
  };

  return <div className="space-y-6">
    {isAdmin && <div className="flex flex-wrap gap-2 rounded-xl bg-white p-4 shadow-lg"><span className="self-center text-sm font-semibold text-gray-600">Quick add:</span>{resourceSections.slice(1).map((section) => <button key={section} type="button" onClick={() => openSectionAdd(section)} className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700 hover:bg-blue-100"><Plus className="h-3.5 w-3.5" /> {section}</button>)}</div>}
    <div className="rounded-xl bg-white p-6 shadow-lg"><div className="flex flex-wrap items-center justify-between gap-4"><div><div className="flex items-center gap-2"><Building2 className="h-6 w-6 text-blue-600" /><h2 className="text-2xl font-bold text-gray-800">Company Interview Hub</h2></div><p className="mt-1 text-sm text-gray-500">Store company questions, solutions, notes, tips, and useful links in one place.</p></div>{isAdmin && <button type="button" onClick={openAdd} className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600"><Plus className="h-4 w-4" /> Add {selectedSection === 'All' ? 'Resource' : selectedSection}</button>}</div></div>
    <div className="grid min-h-[560px] grid-cols-1 overflow-hidden rounded-xl bg-white shadow-lg lg:grid-cols-[280px_1fr]"><aside className="border-b border-gray-200 bg-gray-50 p-4 lg:border-b-0 lg:border-r"><h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Company Sections</h3>{companies.map((company) => <button key={company} type="button" onClick={() => { setSelectedCompany(company); setSelectedSection('All'); }} className={`mb-1 flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium ${selectedCompany === company ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-white'}`}><span>{company}</span><span className="rounded-full bg-white/30 px-2 py-0.5 text-xs">{resources.filter((resource) => resource.company_name === company).length}</span></button>)}</aside><main className="p-5 sm:p-7"><div className="mb-5 flex items-start justify-between gap-3 border-b border-gray-100 pb-5"><div><p className="text-sm text-gray-500">Company resources</p><h3 className="text-2xl font-bold text-gray-800">{selectedCompany}</h3><p className="mt-1 text-sm text-gray-500">{selectedResources.length} resources in {selectedSection}</p></div>{isAdmin && <button type="button" onClick={openAdd} className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"><Plus className="h-4 w-4" /> Add here</button>}</div><div className="mb-6 flex gap-2 overflow-x-auto border-b border-gray-100 pb-3">{resourceSections.map((section) => <button key={section} type="button" onClick={() => setSelectedSection(section)} className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium ${selectedSection === section ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700'}`}>{section}</button>)}</div>{selectedResources.length === 0 ? <div className="rounded-xl border border-dashed border-blue-200 bg-blue-50/50 p-10 text-center"><FileText className="mx-auto mb-3 h-10 w-10 text-blue-400" /><h4 className="font-semibold text-gray-800">No resources in {selectedSection}</h4><p className="mt-1 text-sm text-gray-500">Add questions, videos, notes, tips, links, or platform resources for this company.</p></div> : <div className="space-y-4">{selectedResources.map((resource) => <article key={resource.id} className="rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md"><div className="flex items-start justify-between gap-3"><div><div className="mb-2 flex gap-2"><span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">{resource.resource_type}</span><span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">{resource.difficulty}</span></div><h4 className="text-lg font-semibold text-gray-800">{resource.title}</h4></div>{isAdmin && <div className="flex gap-1"><button type="button" onClick={() => openEdit(resource)} aria-label="Edit resource" className="rounded p-2 text-gray-400 hover:text-blue-600"><Pencil className="h-4 w-4" /></button><button type="button" onClick={() => remove(resource)} aria-label="Delete resource" className="rounded p-2 text-gray-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button></div>}</div><p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-gray-600">{resource.description}</p>{resource.content && <pre className="mt-4 max-h-72 overflow-auto whitespace-pre-wrap rounded-lg bg-blue-50 p-4 text-sm text-gray-800">{resource.content}</pre>}{resource.resource_url && <a href={resource.resource_url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600">Open resource <ExternalLink className="h-4 w-4" /></a>}</article>)}</div>}</main></div>
    {isAdmin && showResourceForm && <CompanyResourceForm resource={{ ...form, ...(editing ?? {}) }} companies={companies} onClose={() => { setShowResourceForm(false); setEditing(null); }} onSave={saveResourceForm} />}
  </div>;
};