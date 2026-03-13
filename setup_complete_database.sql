-- Complete SQL Setup for DSA Tracker with SQL Questions
-- Run this entire script in your Supabase SQL Editor

-- First, create the database schema (if not already exists)

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

-- Now add some initial DSA questions (if not already exists)
INSERT INTO questions (title, difficulty, category, platform, problem_url, solution, tags) VALUES
('Two Sum', 'Easy', 'Array', 'LeetCode', 'https://leetcode.com/problems/two-sum/', 'Use a hashmap to store indices and find complement.', ARRAY['array', 'hash-table', 'two-pointers']),
('Reverse String', 'Easy', 'String', 'LeetCode', 'https://leetcode.com/problems/reverse-string/', 'Use two pointers to swap characters from start and end.', ARRAY['string', 'two-pointers']),
('Palindrome Number', 'Easy', 'Math', 'LeetCode', 'https://leetcode.com/problems/palindrome-number/', 'Convert to string and check if it equals its reverse.', ARRAY['math', 'string']),
('Merge Two Sorted Lists', 'Easy', 'Linked List', 'LeetCode', 'https://leetcode.com/problems/merge-two-sorted-lists/', 'Use two pointers to merge the lists in sorted order.', ARRAY['linked-list', 'recursion']),
('Valid Parentheses', 'Easy', 'Stack', 'LeetCode', 'https://leetcode.com/problems/valid-parentheses/', 'Use a stack to track opening brackets.', ARRAY['stack', 'string']),
('Maximum Subarray', 'Easy', 'Array', 'LeetCode', 'https://leetcode.com/problems/maximum-subarray/', 'Use Kadane''s algorithm to find maximum subarray sum.', ARRAY['array', 'dynamic-programming']),
('Climbing Stairs', 'Easy', 'Dynamic Programming', 'LeetCode', 'https://leetcode.com/problems/climbing-stairs/', 'Use Fibonacci sequence: dp[n] = dp[n-1] + dp[n-2].', ARRAY['dynamic-programming', 'math']),
('Best Time to Buy and Sell Stock', 'Easy', 'Array', 'LeetCode', 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', 'Track minimum price and maximum profit.', ARRAY['array', 'dynamic-programming']),
('Binary Tree Inorder Traversal', 'Easy', 'Tree', 'LeetCode', 'https://leetcode.com/problems/binary-tree-inorder-traversal/', 'Use recursion or stack for inorder traversal.', ARRAY['tree', 'stack', 'recursion']),
('Symmetric Tree', 'Easy', 'Tree', 'LeetCode', 'https://leetcode.com/problems/symmetric-tree/', 'Check if left and right subtrees are mirrors.', ARRAY['tree', 'recursion']),
('Copy List with Random Pointer', 'Medium', 'Linked-List', 'LeetCode', 'https://leetcode.com/problems/copy-list-with-random-pointer/', 'Use HashMap to map original nodes to cloned nodes. First pass: create nodes and store mapping. Second pass: set next and random pointers using the mapping.', ARRAY['linked-list', 'hash-map', 'cloning'])
ON CONFLICT DO NOTHING;

-- Now add the comprehensive SQL questions

-- SECTION 1 — BASIC SQL (1–50)

INSERT INTO questions (title, difficulty, category, platform, problem_url, solution, tags) VALUES
('Display all records from employees table', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/select-all', 'SELECT * FROM employees;', ARRAY['sql', 'select', 'basic']),
('Display only employee names', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/select-column', 'SELECT name FROM employees;', ARRAY['sql', 'select', 'columns']),
('Display employee name and salary', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/select-multiple-columns', 'SELECT name, salary FROM employees;', ARRAY['sql', 'select', 'columns']),
('Find employees with salary greater than 50000', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/where-greater-than', 'SELECT * FROM employees WHERE salary > 50000;', ARRAY['sql', 'where', 'comparison']),
('Find employees with salary less than 60000', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/where-less-than', 'SELECT * FROM employees WHERE salary < 60000;', ARRAY['sql', 'where', 'comparison']),
('Find employees who live in Delhi', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/where-equals', 'SELECT * FROM employees WHERE city = ''Delhi'';', ARRAY['sql', 'where', 'string-comparison']),
('Find employees older than 30', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/where-greater-than', 'SELECT * FROM employees WHERE age > 30;', ARRAY['sql', 'where', 'comparison']),
('Find employees whose name starts with A', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/like-starts-with', 'SELECT * FROM employees WHERE name LIKE ''A%'';', ARRAY['sql', 'like', 'pattern-matching']),
('Find employees whose name ends with n', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/like-ends-with', 'SELECT * FROM employees WHERE name LIKE ''%n'';', ARRAY['sql', 'like', 'pattern-matching']),
('Find employees whose name contains ra', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/like-contains', 'SELECT * FROM employees WHERE name LIKE ''%ra%'';', ARRAY['sql', 'like', 'pattern-matching']),
('Display distinct cities of employees', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/distinct', 'SELECT DISTINCT city FROM employees;', ARRAY['sql', 'distinct', 'unique-values']),
('Count total employees', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/count', 'SELECT COUNT(*) FROM employees;', ARRAY['sql', 'count', 'aggregation']),
('Find maximum salary', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/max', 'SELECT MAX(salary) FROM employees;', ARRAY['sql', 'max', 'aggregation']),
('Find minimum salary', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/min', 'SELECT MIN(salary) FROM employees;', ARRAY['sql', 'min', 'aggregation']),
('Find average salary', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/avg', 'SELECT AVG(salary) FROM employees;', ARRAY['sql', 'avg', 'aggregation']),
('Find total salary expenditure', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/sum', 'SELECT SUM(salary) FROM employees;', ARRAY['sql', 'sum', 'aggregation']),
('Sort employees by salary ascending', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/order-by-asc', 'SELECT * FROM employees ORDER BY salary ASC;', ARRAY['sql', 'order-by', 'sorting']),
('Sort employees by salary descending', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/order-by-desc', 'SELECT * FROM employees ORDER BY salary DESC;', ARRAY['sql', 'order-by', 'sorting']),
('Sort employees by name', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/order-by-name', 'SELECT * FROM employees ORDER BY name;', ARRAY['sql', 'order-by', 'sorting']),
('Display first 5 employees', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/limit', 'SELECT * FROM employees LIMIT 5;', ARRAY['sql', 'limit', 'pagination']),
('Display employees with salary between 50000 and 80000', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/between', 'SELECT * FROM employees WHERE salary BETWEEN 50000 AND 80000;', ARRAY['sql', 'between', 'range']),
('Find employees from Mumbai with salary above 60000', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/and-condition', 'SELECT * FROM employees WHERE city = ''Mumbai'' AND salary > 60000;', ARRAY['sql', 'and', 'multiple-conditions']),
('Find employees not from Delhi', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/not-equals', 'SELECT * FROM employees WHERE city != ''Delhi'';', ARRAY['sql', 'not-equals', 'negation']),
('Count employees per city', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/group-by-count', 'SELECT city, COUNT(*) FROM employees GROUP BY city;', ARRAY['sql', 'group-by', 'count']),
('Find highest salary employee', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/max-with-details', 'SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees);', ARRAY['sql', 'max', 'subquery']),
('Find lowest salary employee', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/min-with-details', 'SELECT * FROM employees WHERE salary = (SELECT MIN(salary) FROM employees);', ARRAY['sql', 'min', 'subquery']),
('Find employees older than 25 and salary above 60000', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/and-multiple', 'SELECT * FROM employees WHERE age > 25 AND salary > 60000;', ARRAY['sql', 'and', 'multiple-conditions']),
('Find employees younger than 30', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/less-than', 'SELECT * FROM employees WHERE age < 30;', ARRAY['sql', 'where', 'comparison']),
('Display employees in department 2', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/equals-number', 'SELECT * FROM employees WHERE department_id = 2;', ARRAY['sql', 'where', 'foreign-key']),
('Display employees not in department 3', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/not-equals-number', 'SELECT * FROM employees WHERE department_id != 3;', ARRAY['sql', 'not-equals', 'foreign-key']),
('Find employees whose salary equals 70000', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/equals-number', 'SELECT * FROM employees WHERE salary = 70000;', ARRAY['sql', 'where', 'exact-match']),
('Find employees whose salary not equals 70000', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/not-equals-number', 'SELECT * FROM employees WHERE salary != 70000;', ARRAY['sql', 'not-equals', 'negation']),
('Find employees with NULL city', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/is-null', 'SELECT * FROM employees WHERE city IS NULL;', ARRAY['sql', 'null', 'is-null']),
('Find employees with NOT NULL city', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/is-not-null', 'SELECT * FROM employees WHERE city IS NOT NULL;', ARRAY['sql', 'null', 'is-not-null']),
('Find employees whose name length > 5', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/length-function', 'SELECT * FROM employees WHERE LENGTH(name) > 5;', ARRAY['sql', 'length', 'string-functions']),
('Find employees whose name length < 4', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/length-function', 'SELECT * FROM employees WHERE LENGTH(name) < 4;', ARRAY['sql', 'length', 'string-functions']),
('Count employees in each department', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/group-by-department', 'SELECT department_id, COUNT(*) FROM employees GROUP BY department_id;', ARRAY['sql', 'group-by', 'count']),
('Find number of employees per city', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/group-by-city', 'SELECT city, COUNT(*) FROM employees GROUP BY city;', ARRAY['sql', 'group-by', 'count']),
('Display employee names in uppercase', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/upper-function', 'SELECT UPPER(name) FROM employees;', ARRAY['sql', 'upper', 'string-functions']),
('Display employee names in lowercase', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/lower-function', 'SELECT LOWER(name) FROM employees;', ARRAY['sql', 'lower', 'string-functions']),
('Find employees whose name contains a', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/like-contains', 'SELECT * FROM employees WHERE LOWER(name) LIKE ''%a%'';', ARRAY['sql', 'like', 'case-insensitive']),
('Display employees sorted by age', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/order-by-age', 'SELECT * FROM employees ORDER BY age;', ARRAY['sql', 'order-by', 'sorting']),
('Find employees with duplicate salaries', 'Medium', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/duplicate-salaries', 'SELECT salary, COUNT(*) FROM employees GROUP BY salary HAVING COUNT(*) > 1;', ARRAY['sql', 'group-by', 'having', 'duplicates']),
('Count employees with salary > 60000', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/count-with-condition', 'SELECT COUNT(*) FROM employees WHERE salary > 60000;', ARRAY['sql', 'count', 'where']),
('Find employees hired recently', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/recent-hires', 'SELECT * FROM employees ORDER BY hire_date DESC LIMIT 5;', ARRAY['sql', 'order-by', 'limit', 'date']),
('Find employees older than average age', 'Medium', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/above-average', 'SELECT * FROM employees WHERE age > (SELECT AVG(age) FROM employees);', ARRAY['sql', 'subquery', 'avg', 'comparison']),
('Display employees with even emp_id', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/even-odd', 'SELECT * FROM employees WHERE emp_id % 2 = 0;', ARRAY['sql', 'modulo', 'even']),
('Display employees with odd emp_id', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/even-odd', 'SELECT * FROM employees WHERE emp_id % 2 = 1;', ARRAY['sql', 'modulo', 'odd']),
('Find employees whose salary is multiple of 5000', 'Easy', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/multiples', 'SELECT * FROM employees WHERE salary % 5000 = 0;', ARRAY['sql', 'modulo', 'multiples']),
('Display employees whose name contains two a', 'Medium', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/multiple-patterns', 'SELECT * FROM employees WHERE name LIKE ''%a%a%'';', ARRAY['sql', 'like', 'pattern-matching'])
ON CONFLICT DO NOTHING;

-- Add a few more sample questions to verify everything works
INSERT INTO questions (title, difficulty, category, platform, problem_url, solution, tags) VALUES
('Find Second Highest Salary', 'Easy', 'Basic SQL', 'SQL', 'https://leetcode.com/problems/second-highest-salary/', 'SELECT MAX(salary) AS SecondHighestSalary FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);', ARRAY['sql', 'aggregation', 'subquery']),
('Employees Earning More Than Their Managers', 'Easy', 'Joins', 'SQL', 'https://leetcode.com/problems/employees-earning-more-than-their-managers/', 'SELECT e.name AS Employee FROM Employee e JOIN Employee m ON e.managerId = m.id WHERE e.salary > m.salary;', ARRAY['sql', 'joins', 'comparison'])
ON CONFLICT DO NOTHING;

-- Verify the setup
SELECT 'Setup Complete! Questions added:' as status, COUNT(*) as total_questions FROM questions;