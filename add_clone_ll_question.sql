-- Add Clone LL with Random Pointers question

INSERT INTO questions (title, difficulty, category, platform, problem_url, solution, tags) VALUES
('Copy List with Random Pointer', 'Medium', 'Linked-List', 'LeetCode', 'https://leetcode.com/problems/copy-list-with-random-pointer/', 'Use HashMap to map original nodes to cloned nodes. First pass: create nodes and store mapping. Second pass: set next and random pointers using the mapping.', ARRAY['linked-list', 'hash-map', 'cloning']);