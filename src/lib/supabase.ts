import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Question = {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  platform: string;
  problem_url: string;
  solution: string;
  tags: string[];
  created_at: string;
};

export type SQLQuestion = {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  problem_url: string;
  solution: string;
  tags: string[];
  created_at: string;
};

export type SQLUserProgress = {
  id: string;
  user_id: string;
  question_id: string;
  is_completed: boolean;
  notes: string;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
};

export type UserProgress = {
  id: string;
  user_id: string;
  question_id: string;
  is_completed: boolean;
  notes: string;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
};

export type User = {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
  updated_at: string;
};
