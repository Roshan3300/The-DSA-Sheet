-- Add SQL Practice Questions to Existing Database
-- Run this script in your Supabase SQL Editor
-- This assumes your tables (users, questions, user_progress) already exist

-- Add comprehensive SQL questions

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
SELECT 'SQL Questions Added Successfully!' as status, COUNT(*) as total_sql_questions FROM questions WHERE platform = 'SQL';