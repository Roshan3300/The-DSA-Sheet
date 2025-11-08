-- Run this script in your Supabase SQL Editor to add company questions and algorithms

-- First, add company-specific questions
\i supabase/migrations/add_company_questions.sql

-- Then, add algorithm questions  
\i supabase/migrations/add_algorithm_questions.sql

-- Verify the data was inserted
SELECT category, COUNT(*) as question_count 
FROM questions 
GROUP BY category 
ORDER BY category;