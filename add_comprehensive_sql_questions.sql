-- Add Comprehensive SQL Practice Questions

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

('Display employees whose name contains two a', 'Medium', 'Basic SQL', 'SQL', 'https://sql-practice.com/basic-sql/multiple-patterns', 'SELECT * FROM employees WHERE name LIKE ''%a%a%'';', ARRAY['sql', 'like', 'pattern-matching']);

-- SECTION 2 — GROUP BY & AGGREGATION (51–100)

INSERT INTO questions (title, difficulty, category, platform, problem_url, solution, tags) VALUES
('Count employees per department', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/count-per-dept', 'SELECT department_id, COUNT(*) FROM employees GROUP BY department_id;', ARRAY['sql', 'group-by', 'count']),

('Find average salary per department', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/avg-per-dept', 'SELECT department_id, AVG(salary) FROM employees GROUP BY department_id;', ARRAY['sql', 'group-by', 'avg']),

('Find maximum salary per department', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/max-per-dept', 'SELECT department_id, MAX(salary) FROM employees GROUP BY department_id;', ARRAY['sql', 'group-by', 'max']),

('Find minimum salary per department', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/min-per-dept', 'SELECT department_id, MIN(salary) FROM employees GROUP BY department_id;', ARRAY['sql', 'group-by', 'min']),

('Find total salary per department', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/sum-per-dept', 'SELECT department_id, SUM(salary) FROM employees GROUP BY department_id;', ARRAY['sql', 'group-by', 'sum']),

('Find departments with more than 3 employees', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/having-count', 'SELECT department_id, COUNT(*) FROM employees GROUP BY department_id HAVING COUNT(*) > 3;', ARRAY['sql', 'group-by', 'having', 'count']),

('Find departments with average salary > 60000', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/having-avg', 'SELECT department_id, AVG(salary) FROM employees GROUP BY department_id HAVING AVG(salary) > 60000;', ARRAY['sql', 'group-by', 'having', 'avg']),

('Count employees per city', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/count-per-city', 'SELECT city, COUNT(*) FROM employees GROUP BY city;', ARRAY['sql', 'group-by', 'count']),

('Find average age per city', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/avg-age-city', 'SELECT city, AVG(age) FROM employees GROUP BY city;', ARRAY['sql', 'group-by', 'avg']),

('Find highest salary in each city', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/max-salary-city', 'SELECT city, MAX(salary) FROM employees GROUP BY city;', ARRAY['sql', 'group-by', 'max']),

('Find lowest salary in each city', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/min-salary-city', 'SELECT city, MIN(salary) FROM employees GROUP BY city;', ARRAY['sql', 'group-by', 'min']),

('Find salary difference per department', 'Medium', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/salary-difference', 'SELECT department_id, MAX(salary) - MIN(salary) as salary_range FROM employees GROUP BY department_id;', ARRAY['sql', 'group-by', 'max', 'min', 'arithmetic']),

('Find departments with highest salary above 80000', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/max-above-threshold', 'SELECT department_id FROM employees GROUP BY department_id HAVING MAX(salary) > 80000;', ARRAY['sql', 'group-by', 'having', 'max']),

('Find cities with more than 2 employees', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/cities-employee-count', 'SELECT city FROM employees GROUP BY city HAVING COUNT(*) > 2;', ARRAY['sql', 'group-by', 'having', 'count']),

('Find departments with salary sum above 200000', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/sum-above-threshold', 'SELECT department_id FROM employees GROUP BY department_id HAVING SUM(salary) > 200000;', ARRAY['sql', 'group-by', 'having', 'sum']),

('Find cities with average salary above 70000', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/avg-salary-city-threshold', 'SELECT city FROM employees GROUP BY city HAVING AVG(salary) > 70000;', ARRAY['sql', 'group-by', 'having', 'avg']),

('Count employees by city and department', 'Medium', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/multiple-group-by', 'SELECT city, department_id, COUNT(*) FROM employees GROUP BY city, department_id;', ARRAY['sql', 'group-by', 'multiple-columns']),

('Find average salary by city and department', 'Medium', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/avg-multiple-group', 'SELECT city, department_id, AVG(salary) FROM employees GROUP BY city, department_id;', ARRAY['sql', 'group-by', 'avg', 'multiple-columns']),

('Find departments where max salary > 90000', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/max-threshold', 'SELECT department_id FROM employees GROUP BY department_id HAVING MAX(salary) > 90000;', ARRAY['sql', 'group-by', 'having', 'max']),

('Find cities with minimum salary < 40000', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/min-threshold', 'SELECT city FROM employees GROUP BY city HAVING MIN(salary) < 40000;', ARRAY['sql', 'group-by', 'having', 'min']),

('Find departments having exactly 3 employees', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/exact-count', 'SELECT department_id FROM employees GROUP BY department_id HAVING COUNT(*) = 3;', ARRAY['sql', 'group-by', 'having', 'count', 'exact-match']),

('Find cities with exactly 2 employees', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/exact-count-city', 'SELECT city FROM employees GROUP BY city HAVING COUNT(*) = 2;', ARRAY['sql', 'group-by', 'having', 'count', 'exact-match']),

('Find departments with total salary < 150000', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/sum-below-threshold', 'SELECT department_id FROM employees GROUP BY department_id HAVING SUM(salary) < 150000;', ARRAY['sql', 'group-by', 'having', 'sum']),

('Find departments with average age above 30', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/avg-age-dept', 'SELECT department_id FROM employees GROUP BY department_id HAVING AVG(age) > 30;', ARRAY['sql', 'group-by', 'having', 'avg']),

('Find employees grouped by age', 'Medium', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/group-by-age', 'SELECT age, COUNT(*), AVG(salary) FROM employees GROUP BY age ORDER BY age;', ARRAY['sql', 'group-by', 'age', 'count', 'avg']),

('Count employees with salary above average per department', 'Hard', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/above-avg-per-dept', 'SELECT department_id, COUNT(*) FROM employees e1 WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e1.department_id = e2.department_id) GROUP BY department_id;', ARRAY['sql', 'group-by', 'subquery', 'avg', 'correlation']),

('Find department with highest average salary', 'Medium', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/highest-avg-dept', 'SELECT department_id FROM employees GROUP BY department_id HAVING AVG(salary) = (SELECT MAX(avg_salary) FROM (SELECT AVG(salary) as avg_salary FROM employees GROUP BY department_id) t);', ARRAY['sql', 'group-by', 'max', 'subquery', 'avg']),

('Find city with highest average salary', 'Medium', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/highest-avg-city', 'SELECT city FROM employees GROUP BY city HAVING AVG(salary) = (SELECT MAX(avg_salary) FROM (SELECT AVG(salary) as avg_salary FROM employees GROUP BY city) t);', ARRAY['sql', 'group-by', 'max', 'subquery', 'avg']),

('Find department with lowest average salary', 'Medium', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/lowest-avg-dept', 'SELECT department_id FROM employees GROUP BY department_id HAVING AVG(salary) = (SELECT MIN(avg_salary) FROM (SELECT AVG(salary) as avg_salary FROM employees GROUP BY department_id) t);', ARRAY['sql', 'group-by', 'min', 'subquery', 'avg']),

('Find city with lowest average salary', 'Medium', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/lowest-avg-city', 'SELECT city FROM employees GROUP BY city HAVING AVG(salary) = (SELECT MIN(avg_salary) FROM (SELECT AVG(salary) as avg_salary FROM employees GROUP BY city) t);', ARRAY['sql', 'group-by', 'min', 'subquery', 'avg']),

('Find department with most employees', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/most-employees-dept', 'SELECT department_id FROM employees GROUP BY department_id HAVING COUNT(*) = (SELECT MAX(emp_count) FROM (SELECT COUNT(*) as emp_count FROM employees GROUP BY department_id) t);', ARRAY['sql', 'group-by', 'max', 'subquery', 'count']),

('Find city with most employees', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/most-employees-city', 'SELECT city FROM employees GROUP BY city HAVING COUNT(*) = (SELECT MAX(emp_count) FROM (SELECT COUNT(*) as emp_count FROM employees GROUP BY city) t);', ARRAY['sql', 'group-by', 'max', 'subquery', 'count']),

('Find department with least employees', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/least-employees-dept', 'SELECT department_id FROM employees GROUP BY department_id HAVING COUNT(*) = (SELECT MIN(emp_count) FROM (SELECT COUNT(*) as emp_count FROM employees GROUP BY department_id) t);', ARRAY['sql', 'group-by', 'min', 'subquery', 'count']),

('Find city with least employees', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/least-employees-city', 'SELECT city FROM employees GROUP BY city HAVING COUNT(*) = (SELECT MIN(emp_count) FROM (SELECT COUNT(*) as emp_count FROM employees GROUP BY city) t);', ARRAY['sql', 'group-by', 'min', 'subquery', 'count']),

('Find departments where average salary between 60000 and 80000', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/avg-between', 'SELECT department_id FROM employees GROUP BY department_id HAVING AVG(salary) BETWEEN 60000 AND 80000;', ARRAY['sql', 'group-by', 'having', 'avg', 'between']),

('Find cities where average salary below 60000', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/avg-below-threshold', 'SELECT city FROM employees GROUP BY city HAVING AVG(salary) < 60000;', ARRAY['sql', 'group-by', 'having', 'avg']),

('Find departments where max salary > average salary', 'Medium', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/max-vs-avg', 'SELECT department_id FROM employees GROUP BY department_id HAVING MAX(salary) > AVG(salary);', ARRAY['sql', 'group-by', 'having', 'max', 'avg']),

('Find cities where max salary equals department max salary', 'Hard', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/complex-comparison', 'SELECT city FROM employees e1 GROUP BY city HAVING MAX(salary) = (SELECT MAX(salary) FROM employees e2 WHERE e2.department_id IN (SELECT department_id FROM employees WHERE city = e1.city));', ARRAY['sql', 'group-by', 'max', 'subquery', 'correlation']),

('Count employees with salary > 70000 per department', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/count-high-salary', 'SELECT department_id, COUNT(*) FROM employees WHERE salary > 70000 GROUP BY department_id;', ARRAY['sql', 'group-by', 'count', 'where']),

('Find departments where total salary equals 200000', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/exact-sum', 'SELECT department_id FROM employees GROUP BY department_id HAVING SUM(salary) = 200000;', ARRAY['sql', 'group-by', 'having', 'sum', 'exact-match']),

('Find cities where total salary > 300000', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/sum-city-threshold', 'SELECT city FROM employees GROUP BY city HAVING SUM(salary) > 300000;', ARRAY['sql', 'group-by', 'having', 'sum']),

('Find departments where average salary equals max salary', 'Medium', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/avg-equals-max', 'SELECT department_id FROM employees GROUP BY department_id HAVING AVG(salary) = MAX(salary);', ARRAY['sql', 'group-by', 'having', 'avg', 'max']),

('Find cities where average salary equals min salary', 'Medium', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/avg-equals-min', 'SELECT city FROM employees GROUP BY city HAVING AVG(salary) = MIN(salary);', ARRAY['sql', 'group-by', 'having', 'avg', 'min']),

('Find department salary range', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/salary-range', 'SELECT department_id, MAX(salary) - MIN(salary) as range FROM employees GROUP BY department_id;', ARRAY['sql', 'group-by', 'max', 'min', 'arithmetic']),

('Find city salary range', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/city-salary-range', 'SELECT city, MAX(salary) - MIN(salary) as range FROM employees GROUP BY city;', ARRAY['sql', 'group-by', 'max', 'min', 'arithmetic']),

('Count employees with duplicate ages', 'Medium', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/duplicate-ages', 'SELECT age, COUNT(*) FROM employees GROUP BY age HAVING COUNT(*) > 1;', ARRAY['sql', 'group-by', 'having', 'count', 'duplicates']),

('Find departments where employees age > 30', 'Medium', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/age-condition', 'SELECT department_id FROM employees WHERE age > 30 GROUP BY department_id;', ARRAY['sql', 'group-by', 'where', 'age']),

('Find cities with average age < 30', 'Easy', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/avg-age-city-threshold', 'SELECT city FROM employees GROUP BY city HAVING AVG(age) < 30;', ARRAY['sql', 'group-by', 'having', 'avg', 'age']),

('Find departments with salary variance > 20000', 'Hard', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/salary-variance', 'SELECT department_id FROM employees GROUP BY department_id HAVING (MAX(salary) - MIN(salary)) > 20000;', ARRAY['sql', 'group-by', 'having', 'max', 'min', 'variance']),

('Find departments with salary variance < 10000', 'Hard', 'Group By & Aggregation', 'SQL', 'https://sql-practice.com/group-by/low-variance', 'SELECT department_id FROM employees GROUP BY department_id HAVING (MAX(salary) - MIN(salary)) < 10000;', ARRAY['sql', 'group-by', 'having', 'max', 'min', 'variance']);

-- SECTION 3 — JOINS (101–150)

INSERT INTO questions (title, difficulty, category, platform, problem_url, solution, tags) VALUES
('Display employee names with department names', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/inner-join-basic', 'SELECT e.name, d.name FROM employees e INNER JOIN departments d ON e.department_id = d.id;', ARRAY['sql', 'joins', 'inner-join']),

('Display employees and their departments using INNER JOIN', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/inner-join', 'SELECT e.*, d.name as department_name FROM employees e INNER JOIN departments d ON e.department_id = d.id;', ARRAY['sql', 'joins', 'inner-join']),

('Display all employees even without departments using LEFT JOIN', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/left-join', 'SELECT e.*, d.name as department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.id;', ARRAY['sql', 'joins', 'left-join']),

('Display all departments even without employees using RIGHT JOIN', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/right-join', 'SELECT e.name as employee_name, d.* FROM employees e RIGHT JOIN departments d ON e.department_id = d.id;', ARRAY['sql', 'joins', 'right-join']),

('Display employees and department manager names', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/self-join-managers', 'SELECT e.name as employee, m.name as manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;', ARRAY['sql', 'joins', 'self-join', 'hierarchy']),

('Count employees per department using JOIN', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-with-aggregation', 'SELECT d.name, COUNT(e.id) FROM departments d LEFT JOIN employees e ON d.id = e.department_id GROUP BY d.id, d.name;', ARRAY['sql', 'joins', 'left-join', 'count', 'group-by']),

('Find employees working in IT department', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-with-condition', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE d.name = ''IT'';', ARRAY['sql', 'joins', 'inner-join', 'where']),

('Find employees not assigned to any department', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/left-join-null', 'SELECT e.* FROM employees e LEFT JOIN departments d ON e.department_id = d.id WHERE d.id IS NULL;', ARRAY['sql', 'joins', 'left-join', 'null']),

('Find departments without employees', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/right-join-null', 'SELECT d.* FROM employees e RIGHT JOIN departments d ON e.department_id = d.id WHERE e.id IS NULL;', ARRAY['sql', 'joins', 'right-join', 'null']),

('Find employees whose department location is Delhi', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-multiple-conditions', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE d.location = ''Delhi'';', ARRAY['sql', 'joins', 'inner-join', 'where']),

('Find employees working in Finance department', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-dept-name', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE d.name = ''Finance'';', ARRAY['sql', 'joins', 'inner-join', 'where']),

('Find employees and department salary budget', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-budget', 'SELECT e.name, d.name, d.budget FROM employees e INNER JOIN departments d ON e.department_id = d.id;', ARRAY['sql', 'joins', 'inner-join', 'multiple-columns']),

('Find employees whose department has more than 3 employees', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-with-subquery', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE d.id IN (SELECT department_id FROM employees GROUP BY department_id HAVING COUNT(*) > 3);', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'group-by']),

('Find departments with highest salary employee', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-max-salary', 'SELECT d.name, e.name, e.salary FROM departments d INNER JOIN employees e ON d.id = e.department_id WHERE (d.id, e.salary) IN (SELECT department_id, MAX(salary) FROM employees GROUP BY department_id);', ARRAY['sql', 'joins', 'inner-join', 'max', 'subquery']),

('Find employees working in departments with average salary > 60000', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-avg-condition', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE d.id IN (SELECT department_id FROM employees GROUP BY department_id HAVING AVG(salary) > 60000);', ARRAY['sql', 'joins', 'inner-join', 'avg', 'subquery']),

('Find employees whose department name starts with F', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-like-condition', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE d.name LIKE ''F%'';', ARRAY['sql', 'joins', 'inner-join', 'like']),

('Find employees whose department name ends with T', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-like-ends', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE d.name LIKE ''%T'';', ARRAY['sql', 'joins', 'inner-join', 'like']),

('Find employees and their department city', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-city', 'SELECT e.name, d.location as dept_city FROM employees e INNER JOIN departments d ON e.department_id = d.id;', ARRAY['sql', 'joins', 'inner-join', 'location']),

('Find departments with no employees', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/right-join-no-employees', 'SELECT d.* FROM employees e RIGHT JOIN departments d ON e.department_id = d.id WHERE e.id IS NULL;', ARRAY['sql', 'joins', 'right-join', 'null']),

('Find employees with department names sorted alphabetically', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-order-by', 'SELECT e.name, d.name FROM employees e INNER JOIN departments d ON e.department_id = d.id ORDER BY d.name;', ARRAY['sql', 'joins', 'inner-join', 'order-by']),

('Count employees per department using JOIN', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-count-group', 'SELECT d.name, COUNT(e.id) FROM departments d LEFT JOIN employees e ON d.id = e.department_id GROUP BY d.id, d.name;', ARRAY['sql', 'joins', 'left-join', 'count', 'group-by']),

('Find employees whose salary > department average salary', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-above-avg', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE e.salary > (SELECT AVG(salary) FROM employees WHERE department_id = d.id);', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'avg', 'correlation']),

('Find departments where employee salary exceeds 80000', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-salary-threshold', 'SELECT DISTINCT d.* FROM departments d INNER JOIN employees e ON d.id = e.department_id WHERE e.salary > 80000;', ARRAY['sql', 'joins', 'inner-join', 'distinct', 'where']),

('Find employees working in same department as Rahul', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-same-dept', 'SELECT e.* FROM employees e INNER JOIN employees rahul ON e.department_id = rahul.department_id WHERE rahul.name = ''Rahul'' AND e.name != ''Rahul'';', ARRAY['sql', 'joins', 'self-join', 'same-department']),

('Find employees working in department with highest salary', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-highest-salary-dept', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE d.id = (SELECT department_id FROM employees GROUP BY department_id HAVING MAX(salary) = (SELECT MAX(salary) FROM employees));', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'max']),

('Find employees working in department with lowest salary', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-lowest-salary-dept', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE d.id = (SELECT department_id FROM employees GROUP BY department_id HAVING MIN(salary) = (SELECT MIN(salary) FROM employees));', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'min']),

('Find departments with employees older than 30', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-age-condition', 'SELECT DISTINCT d.* FROM departments d INNER JOIN employees e ON d.id = e.department_id WHERE e.age > 30;', ARRAY['sql', 'joins', 'inner-join', 'distinct', 'age']),

('Find employees whose department average salary > overall average', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-dept-above-overall-avg', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE (SELECT AVG(salary) FROM employees WHERE department_id = d.id) > (SELECT AVG(salary) FROM employees);', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'avg', 'correlation']),

('Find employees whose department has max salary > 90000', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-max-salary-condition', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE (SELECT MAX(salary) FROM employees WHERE department_id = d.id) > 90000;', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'max']),

('Find departments where minimum salary < 50000', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-min-salary-condition', 'SELECT DISTINCT d.* FROM departments d INNER JOIN employees e ON d.id = e.department_id WHERE (SELECT MIN(salary) FROM employees WHERE department_id = d.id) < 50000;', ARRAY['sql', 'joins', 'inner-join', 'distinct', 'subquery', 'min']),

('Find employees whose department employee count > 3', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-employee-count', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE (SELECT COUNT(*) FROM employees WHERE department_id = d.id) > 3;', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'count']),

('Find employees in departments located in Mumbai', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-location-mumbai', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE d.location = ''Mumbai'';', ARRAY['sql', 'joins', 'inner-join', 'location']),

('Find departments where employees live in multiple cities', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-multiple-cities', 'SELECT d.* FROM departments d WHERE (SELECT COUNT(DISTINCT city) FROM employees WHERE department_id = d.id) > 1;', ARRAY['sql', 'joins', 'subquery', 'distinct', 'count']),

('Find employees working in departments with no managers', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-no-managers', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE NOT EXISTS (SELECT 1 FROM employees WHERE department_id = d.id AND manager_id IS NOT NULL);', ARRAY['sql', 'joins', 'inner-join', 'exists', 'not-exists']),

('Find departments where employees earn same salary', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-same-salary', 'SELECT DISTINCT d.* FROM departments d WHERE EXISTS (SELECT 1 FROM employees e1, employees e2 WHERE e1.department_id = d.id AND e2.department_id = d.id AND e1.id != e2.id AND e1.salary = e2.salary);', ARRAY['sql', 'joins', 'exists', 'self-join', 'salary']),

('Find employees whose department average age > 30', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-avg-age-condition', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE (SELECT AVG(age) FROM employees WHERE department_id = d.id) > 30;', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'avg', 'age']),

('Find employees working in department with max employees', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-max-employees-dept', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE (SELECT COUNT(*) FROM employees WHERE department_id = d.id) = (SELECT MAX(emp_count) FROM (SELECT COUNT(*) as emp_count FROM employees GROUP BY department_id) t);', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'count', 'max']),

('Find employees whose department salary variance > 20000', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-salary-variance', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE (SELECT MAX(salary) - MIN(salary) FROM employees WHERE department_id = d.id) > 20000;', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'max', 'min', 'variance']),

('Find departments where employee salary > company average', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-above-company-avg', 'SELECT DISTINCT d.* FROM departments d INNER JOIN employees e ON d.id = e.department_id WHERE e.salary > (SELECT AVG(salary) FROM employees);', ARRAY['sql', 'joins', 'inner-join', 'distinct', 'subquery', 'avg']),

('Find employees whose department city equals employee city', 'Easy', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-same-city', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE e.city = d.location;', ARRAY['sql', 'joins', 'inner-join', 'comparison']),

('Find employees whose department has salary above 70000', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-dept-salary-condition', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE EXISTS (SELECT 1 FROM employees WHERE department_id = d.id AND salary > 70000);', ARRAY['sql', 'joins', 'inner-join', 'exists', 'salary']),

('Find employees whose department average salary < 60000', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-avg-salary-condition', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE (SELECT AVG(salary) FROM employees WHERE department_id = d.id) < 60000;', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'avg']),

('Find departments with employee salary difference > 30000', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-salary-difference', 'SELECT DISTINCT d.* FROM departments d WHERE (SELECT MAX(salary) - MIN(salary) FROM employees WHERE department_id = d.id) > 30000;', ARRAY['sql', 'joins', 'distinct', 'subquery', 'max', 'min']),

('Find employees working in departments with exactly 2 employees', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-exact-employee-count', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE (SELECT COUNT(*) FROM employees WHERE department_id = d.id) = 2;', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'count', 'exact-match']),

('Find departments with employees in more than 2 cities', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-multiple-cities-count', 'SELECT d.* FROM departments d WHERE (SELECT COUNT(DISTINCT city) FROM employees WHERE department_id = d.id) > 2;', ARRAY['sql', 'joins', 'subquery', 'distinct', 'count']),

('Find employees working in department with youngest employee', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-youngest-employee', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE d.id = (SELECT department_id FROM employees GROUP BY department_id HAVING MIN(age) = (SELECT MIN(age) FROM employees));', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'min', 'age']),

('Find employees working in department with oldest employee', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-oldest-employee', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE d.id = (SELECT department_id FROM employees GROUP BY department_id HAVING MAX(age) = (SELECT MAX(age) FROM employees));', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'max', 'age']),

('Find departments where employees share same city', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-shared-city', 'SELECT DISTINCT d.* FROM departments d WHERE EXISTS (SELECT 1 FROM employees e1, employees e2 WHERE e1.department_id = d.id AND e2.department_id = d.id AND e1.id != e2.id AND e1.city = e2.city);', ARRAY['sql', 'joins', 'exists', 'self-join', 'city']),

('Find employees whose department has salary range > 40000', 'Medium', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-salary-range', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.id WHERE (SELECT MAX(salary) - MIN(salary) FROM employees WHERE department_id = d.id) > 40000;', ARRAY['sql', 'joins', 'inner-join', 'subquery', 'max', 'min', 'range']),

('Find departments where employees salary equals department max salary', 'Hard', 'Joins', 'SQL', 'https://sql-practice.com/joins/join-max-salary-employees', 'SELECT DISTINCT d.* FROM departments d INNER JOIN employees e ON d.id = e.department_id WHERE e.salary = (SELECT MAX(salary) FROM employees WHERE department_id = d.id);', ARRAY['sql', 'joins', 'inner-join', 'distinct', 'subquery', 'max']);

-- SECTION 4 — SUBQUERIES (151–220)

INSERT INTO questions (title, difficulty, category, platform, problem_url, solution, tags) VALUES
('Find employees earning more than average salary', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/above-average', 'SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);', ARRAY['sql', 'subqueries', 'avg', 'comparison']),

('Find employees earning less than average salary', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/below-average', 'SELECT * FROM employees WHERE salary < (SELECT AVG(salary) FROM employees);', ARRAY['sql', 'subqueries', 'avg', 'comparison']),

('Find employees with maximum salary', 'Easy', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/max-salary', 'SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees);', ARRAY['sql', 'subqueries', 'max', 'exact-match']),

('Find employees with second highest salary', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/second-highest', 'SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees));', ARRAY['sql', 'subqueries', 'max', 'nested']),

('Find employees with third highest salary', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/third-highest', 'SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)));', ARRAY['sql', 'subqueries', 'max', 'nested']),

('Find employees working in department with highest salary', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-highest-salary', 'SELECT * FROM employees WHERE department_id = (SELECT department_id FROM employees GROUP BY department_id HAVING MAX(salary) = (SELECT MAX(salary) FROM employees));', ARRAY['sql', 'subqueries', 'group-by', 'max']),

('Find employees whose department has highest average salary', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-highest-avg', 'SELECT * FROM employees WHERE department_id = (SELECT department_id FROM employees GROUP BY department_id HAVING AVG(salary) = (SELECT MAX(avg_salary) FROM (SELECT AVG(salary) as avg_salary FROM employees GROUP BY department_id) t));', ARRAY['sql', 'subqueries', 'group-by', 'avg', 'max']),

('Find employees whose salary equals department maximum salary', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/equals-dept-max', 'SELECT * FROM employees e1 WHERE salary = (SELECT MAX(salary) FROM employees e2 WHERE e2.department_id = e1.department_id);', ARRAY['sql', 'subqueries', 'correlation', 'max']),

('Find employees whose salary equals department minimum salary', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/equals-dept-min', 'SELECT * FROM employees e1 WHERE salary = (SELECT MIN(salary) FROM employees e2 WHERE e2.department_id = e1.department_id);', ARRAY['sql', 'subqueries', 'correlation', 'min']),

('Find employees working in department with most employees', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-most-employees', 'SELECT * FROM employees WHERE department_id = (SELECT department_id FROM employees GROUP BY department_id HAVING COUNT(*) = (SELECT MAX(emp_count) FROM (SELECT COUNT(*) as emp_count FROM employees GROUP BY department_id) t));', ARRAY['sql', 'subqueries', 'group-by', 'count', 'max']),

('Find employees working in department with least employees', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-least-employees', 'SELECT * FROM employees WHERE department_id = (SELECT department_id FROM employees GROUP BY department_id HAVING COUNT(*) = (SELECT MIN(emp_count) FROM (SELECT COUNT(*) as emp_count FROM employees GROUP BY department_id) t));', ARRAY['sql', 'subqueries', 'group-by', 'count', 'min']),

('Find employees whose salary above department average', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/above-dept-avg', 'SELECT * FROM employees e1 WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department_id = e1.department_id);', ARRAY['sql', 'subqueries', 'correlation', 'avg']),

('Find employees whose salary below department average', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/below-dept-avg', 'SELECT * FROM employees e1 WHERE salary < (SELECT AVG(salary) FROM employees e2 WHERE e2.department_id = e1.department_id);', ARRAY['sql', 'subqueries', 'correlation', 'avg']),

('Find departments with employees earning above 90000', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/depts-high-earners', 'SELECT DISTINCT department_id FROM employees WHERE department_id IN (SELECT department_id FROM employees WHERE salary > 90000);', ARRAY['sql', 'subqueries', 'in', 'distinct']),

('Find departments with employees earning below 40000', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/depts-low-earners', 'SELECT DISTINCT department_id FROM employees WHERE department_id IN (SELECT department_id FROM employees WHERE salary < 40000);', ARRAY['sql', 'subqueries', 'in', 'distinct']),

('Find employees older than company average age', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/above-avg-age', 'SELECT * FROM employees WHERE age > (SELECT AVG(age) FROM employees);', ARRAY['sql', 'subqueries', 'avg', 'age']),

('Find employees younger than company average age', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/below-avg-age', 'SELECT * FROM employees WHERE age < (SELECT AVG(age) FROM employees);', ARRAY['sql', 'subqueries', 'avg', 'age']),

('Find employees whose city has highest salary', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/city-highest-salary', 'SELECT * FROM employees WHERE city = (SELECT city FROM employees GROUP BY city HAVING MAX(salary) = (SELECT MAX(salary) FROM employees));', ARRAY['sql', 'subqueries', 'group-by', 'max']),

('Find employees whose city has lowest salary', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/city-lowest-salary', 'SELECT * FROM employees WHERE city = (SELECT city FROM employees GROUP BY city HAVING MIN(salary) = (SELECT MIN(salary) FROM employees));', ARRAY['sql', 'subqueries', 'group-by', 'min']),

('Find employees working in departments with highest salary variance', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-highest-variance', 'SELECT * FROM employees WHERE department_id = (SELECT department_id FROM employees GROUP BY department_id HAVING (MAX(salary) - MIN(salary)) = (SELECT MAX(variance) FROM (SELECT MAX(salary) - MIN(salary) as variance FROM employees GROUP BY department_id) t));', ARRAY['sql', 'subqueries', 'group-by', 'max', 'min', 'variance']),

('Find departments with employees earning exactly company average salary', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/depts-avg-salary-employees', 'SELECT DISTINCT department_id FROM employees WHERE department_id IN (SELECT department_id FROM employees WHERE salary = (SELECT AVG(salary) FROM employees));', ARRAY['sql', 'subqueries', 'in', 'distinct', 'avg']),

('Find employees whose salary equals average salary', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/equals-avg-salary', 'SELECT * FROM employees WHERE salary = (SELECT AVG(salary) FROM employees);', ARRAY['sql', 'subqueries', 'avg', 'exact-match']),

('Find employees whose salary above company median salary', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/above-median', 'SELECT * FROM employees WHERE salary > (SELECT salary FROM employees ORDER BY salary LIMIT 1 OFFSET (SELECT COUNT(*)/2 FROM employees));', ARRAY['sql', 'subqueries', 'order-by', 'limit', 'offset', 'median']),

('Find employees whose salary below company median salary', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/below-median', 'SELECT * FROM employees WHERE salary < (SELECT salary FROM employees ORDER BY salary LIMIT 1 OFFSET (SELECT COUNT(*)/2 FROM employees));', ARRAY['sql', 'subqueries', 'order-by', 'limit', 'offset', 'median']),

('Find departments whose average salary equals company average', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-avg-equals-company-avg', 'SELECT department_id FROM employees GROUP BY department_id HAVING AVG(salary) = (SELECT AVG(salary) FROM employees);', ARRAY['sql', 'subqueries', 'group-by', 'having', 'avg']),

('Find employees whose department average equals company average', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/employees-dept-avg-company-avg', 'SELECT * FROM employees e1 WHERE (SELECT AVG(salary) FROM employees e2 WHERE e2.department_id = e1.department_id) = (SELECT AVG(salary) FROM employees);', ARRAY['sql', 'subqueries', 'correlation', 'avg']),

('Find employees working in department with oldest employee', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-oldest-employee', 'SELECT * FROM employees WHERE department_id = (SELECT department_id FROM employees GROUP BY department_id HAVING MAX(age) = (SELECT MAX(age) FROM employees));', ARRAY['sql', 'subqueries', 'group-by', 'max', 'age']),

('Find employees working in department with youngest employee', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-youngest-employee', 'SELECT * FROM employees WHERE department_id = (SELECT department_id FROM employees GROUP BY department_id HAVING MIN(age) = (SELECT MIN(age) FROM employees));', ARRAY['sql', 'subqueries', 'group-by', 'min', 'age']),

('Find employees whose department has salary above company max', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-above-company-max', 'SELECT * FROM employees WHERE department_id IN (SELECT department_id FROM employees GROUP BY department_id HAVING MAX(salary) > (SELECT MAX(salary) FROM employees));', ARRAY['sql', 'subqueries', 'in', 'group-by', 'max']),

('Find employees whose department has salary below company min', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-below-company-min', 'SELECT * FROM employees WHERE department_id IN (SELECT department_id FROM employees GROUP BY department_id HAVING MIN(salary) < (SELECT MIN(salary) FROM employees));', ARRAY['sql', 'subqueries', 'in', 'group-by', 'min']),

('Find departments whose employees salary equals company max', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/depts-company-max-salary', 'SELECT DISTINCT department_id FROM employees WHERE department_id IN (SELECT department_id FROM employees WHERE salary = (SELECT MAX(salary) FROM employees));', ARRAY['sql', 'subqueries', 'in', 'distinct', 'max']),

('Find departments whose employees salary equals company min', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/depts-company-min-salary', 'SELECT DISTINCT department_id FROM employees WHERE department_id IN (SELECT department_id FROM employees WHERE salary = (SELECT MIN(salary) FROM employees));', ARRAY['sql', 'subqueries', 'in', 'distinct', 'min']),

('Find employees whose department average age > company average age', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-avg-age-above-company', 'SELECT * FROM employees e1 WHERE (SELECT AVG(age) FROM employees e2 WHERE e2.department_id = e1.department_id) > (SELECT AVG(age) FROM employees);', ARRAY['sql', 'subqueries', 'correlation', 'avg', 'age']),

('Find employees whose department average age < company average age', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-avg-age-below-company', 'SELECT * FROM employees e1 WHERE (SELECT AVG(age) FROM employees e2 WHERE e2.department_id = e1.department_id) < (SELECT AVG(age) FROM employees);', ARRAY['sql', 'subqueries', 'correlation', 'avg', 'age']),

('Find employees working in departments with salary range > 30000', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-salary-range-above', 'SELECT * FROM employees WHERE department_id IN (SELECT department_id FROM employees GROUP BY department_id HAVING (MAX(salary) - MIN(salary)) > 30000);', ARRAY['sql', 'subqueries', 'in', 'group-by', 'max', 'min', 'range']),

('Find employees working in departments with salary range < 10000', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-salary-range-below', 'SELECT * FROM employees WHERE department_id IN (SELECT department_id FROM employees GROUP BY department_id HAVING (MAX(salary) - MIN(salary)) < 10000);', ARRAY['sql', 'subqueries', 'in', 'group-by', 'max', 'min', 'range']),

('Find employees whose department employee count equals city employee count', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-count-equals-city-count', 'SELECT * FROM employees e1 WHERE (SELECT COUNT(*) FROM employees e2 WHERE e2.department_id = e1.department_id) = (SELECT COUNT(*) FROM employees e3 WHERE e3.city = e1.city);', ARRAY['sql', 'subqueries', 'correlation', 'count']),

('Find employees whose department average salary equals city average salary', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-avg-equals-city-avg', 'SELECT * FROM employees e1 WHERE (SELECT AVG(salary) FROM employees e2 WHERE e2.department_id = e1.department_id) = (SELECT AVG(salary) FROM employees e3 WHERE e3.city = e1.city);', ARRAY['sql', 'subqueries', 'correlation', 'avg']),

('Find employees working in departments with more employees than average department size', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-above-avg-size', 'SELECT * FROM employees WHERE department_id IN (SELECT department_id FROM employees GROUP BY department_id HAVING COUNT(*) > (SELECT AVG(dept_size) FROM (SELECT COUNT(*) as dept_size FROM employees GROUP BY department_id) t));', ARRAY['sql', 'subqueries', 'in', 'group-by', 'count', 'avg']),

('Find departments with salary above overall salary average', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/depts-above-overall-avg', 'SELECT department_id FROM employees GROUP BY department_id HAVING AVG(salary) > (SELECT AVG(salary) FROM employees);', ARRAY['sql', 'subqueries', 'group-by', 'having', 'avg']),

('Find departments with salary below overall salary average', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/depts-below-overall-avg', 'SELECT department_id FROM employees GROUP BY department_id HAVING AVG(salary) < (SELECT AVG(salary) FROM employees);', ARRAY['sql', 'subqueries', 'group-by', 'having', 'avg']),

('Find employees working in departments with salary above 80000', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/employees-dept-salary-above', 'SELECT * FROM employees WHERE department_id IN (SELECT department_id FROM employees WHERE salary > 80000);', ARRAY['sql', 'subqueries', 'in', 'salary']),

('Find employees working in departments with salary below 50000', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/employees-dept-salary-below', 'SELECT * FROM employees WHERE department_id IN (SELECT department_id FROM employees WHERE salary < 50000);', ARRAY['sql', 'subqueries', 'in', 'salary']),

('Find employees whose salary equals second highest salary', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/equals-second-highest', 'SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees));', ARRAY['sql', 'subqueries', 'max', 'nested']),

('Find employees whose salary equals third highest salary', 'Medium', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/equals-third-highest', 'SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)));', ARRAY['sql', 'subqueries', 'max', 'nested']),

('Find departments with second highest salary', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/depts-second-highest', 'SELECT department_id FROM employees GROUP BY department_id HAVING MAX(salary) = (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees));', ARRAY['sql', 'subqueries', 'group-by', 'having', 'max']),

('Find employees in department with second highest average salary', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/employees-second-highest-avg-dept', 'SELECT * FROM employees WHERE department_id = (SELECT department_id FROM employees GROUP BY department_id HAVING AVG(salary) = (SELECT MAX(avg_salary) FROM (SELECT AVG(salary) as avg_salary FROM employees GROUP BY department_id WHERE avg_salary < (SELECT MAX(avg_salary) FROM (SELECT AVG(salary) as avg_salary FROM employees GROUP BY department_id) t1)) t2));', ARRAY['sql', 'subqueries', 'group-by', 'avg', 'max', 'nested']),

('Find employees in department with third highest average salary', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/employees-third-highest-avg-dept', 'SELECT * FROM employees WHERE department_id = (SELECT department_id FROM employees GROUP BY department_id HAVING AVG(salary) = (SELECT MAX(avg_salary) FROM (SELECT AVG(salary) as avg_salary FROM employees GROUP BY department_id WHERE avg_salary < (SELECT MAX(avg_salary) FROM (SELECT AVG(salary) as avg_salary FROM employees GROUP BY department_id WHERE avg_salary < (SELECT MAX(avg_salary) FROM (SELECT AVG(salary) as avg_salary FROM employees GROUP BY department_id) t1)) t2)) t3));', ARRAY['sql', 'subqueries', 'group-by', 'avg', 'max', 'nested']),

('Find employees whose department salary equals city salary', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/dept-salary-equals-city-salary', 'SELECT * FROM employees e1 WHERE (SELECT AVG(salary) FROM employees e2 WHERE e2.department_id = e1.department_id) = (SELECT AVG(salary) FROM employees e3 WHERE e3.city = e1.city);', ARRAY['sql', 'subqueries', 'correlation', 'avg']),

('Find employees whose salary equals department median salary', 'Hard', 'Subqueries', 'SQL', 'https://sql-practice.com/subqueries/equals-dept-median', 'SELECT * FROM employees e1 WHERE salary = (SELECT salary FROM employees e2 WHERE e2.department_id = e1.department_id ORDER BY salary LIMIT 1 OFFSET (SELECT COUNT(*)/2 FROM employees e3 WHERE e3.department_id = e1.department_id));', ARRAY['sql', 'subqueries', 'correlation', 'order-by', 'limit', 'offset', 'median']);

-- SECTION 5 — WINDOW FUNCTIONS (221–300)

INSERT INTO questions (title, difficulty, category, platform, problem_url, solution, tags) VALUES
('Assign row number to employees by salary', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/row-number', 'SELECT name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) as row_num FROM employees;', ARRAY['sql', 'window-functions', 'row-number', 'ranking']),

('Rank employees by salary', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/rank', 'SELECT name, salary, RANK() OVER (ORDER BY salary DESC) as salary_rank FROM employees;', ARRAY['sql', 'window-functions', 'rank', 'ranking']),

('Dense rank employees by salary', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/dense-rank', 'SELECT name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank FROM employees;', ARRAY['sql', 'window-functions', 'dense-rank', 'ranking']),

('Rank employees within each department', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/rank-by-dept', 'SELECT name, department_id, salary, RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as dept_rank FROM employees;', ARRAY['sql', 'window-functions', 'rank', 'partition-by', 'ranking']),

('Row number within department', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/row-number-dept', 'SELECT name, department_id, salary, ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) as dept_row_num FROM employees;', ARRAY['sql', 'window-functions', 'row-number', 'partition-by']),

('Dense rank within department', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/dense-rank-dept', 'SELECT name, department_id, salary, DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as dept_dense_rank FROM employees;', ARRAY['sql', 'window-functions', 'dense-rank', 'partition-by']),

('Find top 3 salaries using rank', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/top-3-rank', 'SELECT * FROM (SELECT name, salary, RANK() OVER (ORDER BY salary DESC) as rnk FROM employees) t WHERE rnk <= 3;', ARRAY['sql', 'window-functions', 'rank', 'subquery', 'top-n']),

('Find top 3 salaries per department', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/top-3-per-dept', 'SELECT * FROM (SELECT name, department_id, salary, RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as dept_rnk FROM employees) t WHERE dept_rnk <= 3;', ARRAY['sql', 'window-functions', 'rank', 'partition-by', 'top-n']),

('Find highest salary per department using window function', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/max-per-dept-window', 'SELECT DISTINCT department_id, FIRST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY salary DESC) as max_salary FROM employees;', ARRAY['sql', 'window-functions', 'first-value', 'partition-by', 'max']),

('Find lowest salary per department', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/min-per-dept-window', 'SELECT DISTINCT department_id, FIRST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY salary ASC) as min_salary FROM employees;', ARRAY['sql', 'window-functions', 'first-value', 'partition-by', 'min']),

('Find running total salary', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/running-total', 'SELECT name, salary, SUM(salary) OVER (ORDER BY salary DESC) as running_total FROM employees;', ARRAY['sql', 'window-functions', 'sum', 'running-total']),

('Find cumulative salary per department', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/cumulative-dept', 'SELECT name, department_id, salary, SUM(salary) OVER (PARTITION BY department_id ORDER BY salary DESC) as cumulative_salary FROM employees;', ARRAY['sql', 'window-functions', 'sum', 'partition-by', 'cumulative']),

('Find moving average salary', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/moving-average', 'SELECT name, salary, AVG(salary) OVER (ORDER BY salary DESC ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) as moving_avg FROM employees;', ARRAY['sql', 'window-functions', 'avg', 'moving-average', 'rows-between']),

('Find salary difference between employees', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/salary-difference', 'SELECT name, salary, salary - LAG(salary) OVER (ORDER BY salary DESC) as salary_diff FROM employees;', ARRAY['sql', 'window-functions', 'lag', 'difference']),

('Find previous employee salary using LAG', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/lag-salary', 'SELECT name, salary, LAG(salary) OVER (ORDER BY salary DESC) as prev_salary FROM employees;', ARRAY['sql', 'window-functions', 'lag', 'previous-value']),

('Find next employee salary using LEAD', 'Medium', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/lead-salary', 'SELECT name, salary, LEAD(salary) OVER (ORDER BY salary DESC) as next_salary FROM employees;', ARRAY['sql', 'window-functions', 'lead', 'next-value']),

('Find salary growth per employee', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/salary-growth', 'SELECT name, salary, ROUND((salary - LAG(salary) OVER (ORDER BY hire_date)) / LAG(salary) OVER (ORDER BY hire_date) * 100, 2) as growth_percent FROM employees WHERE LAG(salary) OVER (ORDER BY hire_date) IS NOT NULL;', ARRAY['sql', 'window-functions', 'lag', 'growth', 'percentage']),

('Find department salary percentile', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/percentile', 'SELECT name, department_id, salary, PERCENT_RANK() OVER (PARTITION BY department_id ORDER BY salary) as percentile FROM employees;', ARRAY['sql', 'window-functions', 'percent-rank', 'partition-by', 'percentile']),

('Find top 10% employees by salary', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/top-percentile', 'SELECT * FROM (SELECT name, salary, PERCENT_RANK() OVER (ORDER BY salary DESC) as pct FROM employees) t WHERE pct <= 0.1;', ARRAY['sql', 'window-functions', 'percent-rank', 'top-percentile']),

('Find bottom 10% employees by salary', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/bottom-percentile', 'SELECT * FROM (SELECT name, salary, PERCENT_RANK() OVER (ORDER BY salary) as pct FROM employees) t WHERE pct <= 0.1;', ARRAY['sql', 'window-functions', 'percent-rank', 'bottom-percentile']),

('Find median salary using window function', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/median-window', 'SELECT DISTINCT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) OVER () as median_salary FROM employees;', ARRAY['sql', 'window-functions', 'percentile-cont', 'median']),

('Find department median salary', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/dept-median', 'SELECT DISTINCT department_id, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) OVER (PARTITION BY department_id) as median_salary FROM employees;', ARRAY['sql', 'window-functions', 'percentile-cont', 'partition-by', 'median']),

('Find city median salary', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/city-median', 'SELECT DISTINCT city, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) OVER (PARTITION BY city) as median_salary FROM employees;', ARRAY['sql', 'window-functions', 'percentile-cont', 'partition-by', 'median']),

('Find salary quartiles', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/quartiles', 'SELECT name, salary, NTILE(4) OVER (ORDER BY salary) as quartile FROM employees;', ARRAY['sql', 'window-functions', 'ntile', 'quartiles']),

('Find salary distribution groups', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/distribution-groups', 'SELECT name, salary, NTILE(10) OVER (ORDER BY salary) as decile FROM employees;', ARRAY['sql', 'window-functions', 'ntile', 'distribution']),

('Find department salary quartiles', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/dept-quartiles', 'SELECT name, department_id, salary, NTILE(4) OVER (PARTITION BY department_id ORDER BY salary) as dept_quartile FROM employees;', ARRAY['sql', 'window-functions', 'ntile', 'partition-by', 'quartiles']),

('Find city salary quartiles', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/city-quartiles', 'SELECT name, city, salary, NTILE(4) OVER (PARTITION BY city ORDER BY salary) as city_quartile FROM employees;', ARRAY['sql', 'window-functions', 'ntile', 'partition-by', 'quartiles']),

('Find employees with salary above department percentile', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/above-dept-percentile', 'SELECT * FROM (SELECT name, department_id, salary, PERCENT_RANK() OVER (PARTITION BY department_id ORDER BY salary) as pct FROM employees) t WHERE pct > 0.75;', ARRAY['sql', 'window-functions', 'percent-rank', 'partition-by', 'above-percentile']),

('Find employees with salary below department percentile', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/below-dept-percentile', 'SELECT * FROM (SELECT name, department_id, salary, PERCENT_RANK() OVER (PARTITION BY department_id ORDER BY salary) as pct FROM employees) t WHERE pct < 0.25;', ARRAY['sql', 'window-functions', 'percent-rank', 'partition-by', 'below-percentile']),

('Find employees whose salary difference with previous > 10000', 'Hard', 'Window Functions', 'SQL', 'https://sql-practice.com/window-functions/salary-diff-threshold', 'SELECT name, salary, prev_salary, salary_diff FROM (SELECT name, salary, LAG(salary) OVER (ORDER BY salary DESC) as prev_salary, salary - LAG(salary) OVER (ORDER BY salary DESC) as salary_diff FROM employees) t WHERE salary_diff > 10000;', ARRAY['sql', 'window-functions', 'lag', 'difference', 'threshold']);