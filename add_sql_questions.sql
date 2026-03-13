-- Add SQL Practice Questions

INSERT INTO questions (title, difficulty, category, platform, problem_url, solution, tags) VALUES
('Find Second Highest Salary', 'Easy', 'Basic SQL', 'SQL', 'https://leetcode.com/problems/second-highest-salary/', 'SELECT MAX(salary) AS SecondHighestSalary FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);', ARRAY['sql', 'aggregation', 'subquery']),

('Employees Earning More Than Their Managers', 'Easy', 'Joins', 'SQL', 'https://leetcode.com/problems/employees-earning-more-than-their-managers/', 'SELECT e.name AS Employee FROM Employee e JOIN Employee m ON e.managerId = m.id WHERE e.salary > m.salary;', ARRAY['sql', 'joins', 'comparison']),

('Duplicate Emails', 'Easy', 'Aggregation', 'SQL', 'https://leetcode.com/problems/duplicate-emails/', 'SELECT email FROM Person GROUP BY email HAVING COUNT(*) > 1;', ARRAY['sql', 'group-by', 'aggregation']),

('Customers Who Never Order', 'Easy', 'Joins', 'SQL', 'https://leetcode.com/problems/customers-who-never-order/', 'SELECT c.name AS Customers FROM Customers c LEFT JOIN Orders o ON c.id = o.customerId WHERE o.customerId IS NULL;', ARRAY['sql', 'left-join', 'null-check']),

('Department Highest Salary', 'Medium', 'Joins', 'SQL', 'https://leetcode.com/problems/department-highest-salary/', 'SELECT d.name AS Department, e.name AS Employee, e.salary FROM Employee e JOIN Department d ON e.departmentId = d.id WHERE (e.departmentId, e.salary) IN (SELECT departmentId, MAX(salary) FROM Employee GROUP BY departmentId);', ARRAY['sql', 'joins', 'subquery', 'aggregation']),

('Nth Highest Salary', 'Medium', 'Advanced SQL', 'SQL', 'https://leetcode.com/problems/nth-highest-salary/', 'CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT BEGIN RETURN (SELECT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET N-1); END;', ARRAY['sql', 'functions', 'limit', 'offset']),

('Rank Scores', 'Medium', 'Window Functions', 'SQL', 'https://leetcode.com/problems/rank-scores/', 'SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS `rank` FROM Scores;', ARRAY['sql', 'window-functions', 'ranking']),

('Consecutive Numbers', 'Medium', 'Window Functions', 'SQL', 'https://leetcode.com/problems/consecutive-numbers/', 'SELECT DISTINCT l1.num AS ConsecutiveNums FROM Logs l1, Logs l2, Logs l3 WHERE l1.id = l2.id - 1 AND l2.id = l3.id - 1 AND l1.num = l2.num AND l2.num = l3.num;', ARRAY['sql', 'self-join', 'consecutive']),

('Department Top Three Salaries', 'Hard', 'Window Functions', 'SQL', 'https://leetcode.com/problems/department-top-three-salaries/', 'SELECT d.name AS Department, e.name AS Employee, e.salary FROM Employee e JOIN Department d ON e.departmentId = d.id WHERE (SELECT COUNT(DISTINCT salary) FROM Employee WHERE departmentId = e.departmentId AND salary > e.salary) < 3 ORDER BY d.name, e.salary DESC;', ARRAY['sql', 'joins', 'subquery', 'ranking']),

('Median Employee Salary', 'Hard', 'Advanced SQL', 'SQL', 'https://leetcode.com/problems/median-employee-salary/', 'SELECT AVG(salary) AS median FROM (SELECT salary, ROW_NUMBER() OVER (ORDER BY salary) AS rn, COUNT(*) OVER () AS total FROM Employee) t WHERE rn IN ((total + 1) / 2, (total + 2) / 2);', ARRAY['sql', 'window-functions', 'median', 'aggregation']);