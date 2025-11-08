# How to Add Company Questions to Your Website

Your website pulls data from a Supabase database, not from files. To see the new company sections:

## Step 1: Run the SQL Migrations

1. Open your Supabase dashboard
2. Go to the SQL Editor
3. Copy and paste the content from these files:
   - `project/supabase/migrations/add_company_questions.sql`
   - `project/supabase/migrations/add_algorithm_questions.sql`
4. Run each script

## Step 2: Refresh Your Website

After running the SQL scripts, refresh your website. You'll now see:

### New Categories:
- **TCS-Ninja** (4 questions)
- **TCS-CodeVita** (3 questions)  
- **Accenture** (3 questions)
- **Google** (3 questions)
- **Amazon** (3 questions)
- **Microsoft** (3 questions)
- **NVIDIA** (2 questions)
- **Oracle** (2 questions)
- **PayPal** (2 questions)
- **Tech-Mahindra** (2 questions)
- **Sorting-Algorithms** (4 questions)
- **Searching-Algorithms** (3 questions)
- **Graph-Algorithms** (5 questions)
- **Dynamic-Programming** (4 questions)
- **Tree-Algorithms** (4 questions)
- **String-Algorithms** (4 questions)
- **Array-Algorithms** (4 questions)
- **Greedy-Algorithms** (3 questions)

## Alternative: Quick Copy-Paste Method

If you can't access the migration files, copy this SQL and run it in Supabase SQL Editor:

```sql
-- [Copy the content from add_company_questions.sql and add_algorithm_questions.sql]
```

## File Structure Created

The file structure I created (`Company-Questions/` and `Important-Algorithms/`) is for your reference and practice. The website shows database content, not file content.