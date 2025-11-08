/*
  # DSA Question Tracker Schema

  ## Overview
  This migration creates the complete schema for a DSA (Data Structures & Algorithms) 
  practice tracker application where users can track their progress across coding questions.

  ## New Tables
  
  ### 1. `users`
  Stores user profile information
  - `id` (uuid, primary key) - References auth.users
  - `email` (text, unique) - User's email address
  - `full_name` (text) - User's display name
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last profile update timestamp

  ### 2. `questions`
  Contains all DSA practice questions
  - `id` (uuid, primary key) - Unique question identifier
  - `title` (text) - Question title
  - `difficulty` (text) - Easy, Medium, or Hard
  - `category` (text) - Topic category (Arrays, Strings, Trees, etc.)
  - `platform` (text) - Source platform (LeetCode, GeeksForGeeks, CodingNinjas)
  - `problem_url` (text) - Direct link to the problem
  - `solution` (text) - Solution explanation/code
  - `tags` (text[]) - Array of topic tags
  - `created_at` (timestamptz) - When question was added
  
  ### 3. `user_progress`
  Tracks which questions users have completed
  - `id` (uuid, primary key) - Unique record identifier
  - `user_id` (uuid, foreign key) - References users table
  - `question_id` (uuid, foreign key) - References questions table
  - `is_completed` (boolean) - Whether user marked as complete
  - `notes` (text) - Personal notes about the solution
  - `completed_at` (timestamptz) - When marked as completed
  - `created_at` (timestamptz) - When progress record was created
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  
  ### Row Level Security (RLS)
  All tables have RLS enabled with the following policies:
  
  #### Users Table
  - Users can read their own profile data
  - Users can update their own profile data
  
  #### Questions Table
  - All authenticated users can read all questions
  - Only authenticated users can access questions
  
  #### User Progress Table
  - Users can read only their own progress records
  - Users can insert their own progress records
  - Users can update their own progress records
  - Users can delete their own progress records

  ## Notes
  - All timestamps use timestamptz for timezone awareness
  - Default values are set for boolean and timestamp fields
  - Foreign key constraints ensure data integrity
  - Unique constraint on (user_id, question_id) prevents duplicate progress records
*/

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON users FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create questions table
CREATE TABLE IF NOT EXISTS questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
  category text NOT NULL,
  platform text NOT NULL,
  problem_url text NOT NULL,
  solution text DEFAULT '',
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read questions"
  ON questions FOR SELECT
  TO authenticated
  USING (true);

-- Create user_progress table
CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id uuid NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  is_completed boolean DEFAULT false,
  notes text DEFAULT '',
  completed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, question_id)
);

ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own progress"
  ON user_progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress"
  ON user_progress FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_questions_category ON questions(category);
CREATE INDEX IF NOT EXISTS idx_questions_difficulty ON questions(difficulty);
CREATE INDEX IF NOT EXISTS idx_questions_platform ON questions(platform);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_question_id ON user_progress(question_id);