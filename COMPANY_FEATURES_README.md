# Company-Specific Questions & Study Materials

## New Features Added

### 1. Company Filter
- Added company filter dropdown in the Dashboard
- Filter questions by specific companies (Google, Amazon, Microsoft, TCS-Ninja, etc.)
- Company badges displayed on question cards

### 2. Study Materials Tab
- New tab system with "Practice Questions" and "Study Materials"
- Company-specific study resources including:
  - Articles and guides
  - Video tutorials
  - Practice problem sets
  - Company-specific notes

### 3. Database Schema Updates
- Added `company` field to questions table
- Sample company-specific questions included
- Proper indexing for performance

## Setup Instructions

### 1. Run Database Migration
Execute the following SQL in your Supabase SQL editor:
```sql
-- Copy and paste contents from run_company_migration.sql
```

### 2. File Structure
```
src/Company-Questions/
├── TCS-Ninja/
│   ├── easy/
│   │   ├── array-sum.md
│   │   └── palindrome-check.md
│   ├── medium/
│   ├── hard/
│   ├── solutions/
│   └── notes.md
├── Google/
├── Amazon/
├── Microsoft/
└── README.md
```

### 3. Adding New Company Questions

#### Method 1: Database Insert
```sql
INSERT INTO questions (title, difficulty, category, platform, problem_url, solution, tags, company) 
VALUES ('Question Title', 'Easy', 'Arrays', 'CompanyName', 'https://url.com', 'Solution text', ARRAY['tag1', 'tag2'], 'CompanyName');
```

#### Method 2: File-based (for documentation)
1. Create folder: `src/Company-Questions/CompanyName/`
2. Add subfolders: `easy/`, `medium/`, `hard/`, `solutions/`
3. Create `notes.md` with company-specific tips
4. Add question files in markdown format

### 4. Adding Study Materials
Edit `src/components/StudyMaterials.tsx` and add to the `studyMaterials` array:
```typescript
{
  id: 'unique-id',
  title: 'Material Title',
  type: 'article' | 'video' | 'practice' | 'notes',
  company: 'CompanyName',
  category: 'Category',
  url: 'https://resource-url.com',
  description: 'Description of the material',
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}
```

## Usage

### For Students
1. **Filter by Company**: Use the company dropdown to focus on specific company questions
2. **Study Materials**: Switch to "Study Materials" tab for preparation resources
3. **Track Progress**: Mark questions as complete to track your preparation
4. **Company-specific Preparation**: Focus on patterns and question types for target companies

### For Administrators
1. **Add Questions**: Use SQL inserts or create markdown files
2. **Update Study Materials**: Modify the StudyMaterials component
3. **Company Notes**: Update company-specific notes in respective folders

## Features Overview

### Dashboard Enhancements
- ✅ Company filter dropdown
- ✅ Tab system (Questions/Materials)
- ✅ Company badges on question cards
- ✅ Responsive design maintained

### Study Materials
- ✅ Filterable by company and type
- ✅ Multiple resource types (articles, videos, practice, notes)
- ✅ Difficulty levels
- ✅ External link integration

### Database Schema
- ✅ Company field added to questions table
- ✅ Sample data for major companies
- ✅ Proper indexing for performance
- ✅ Backward compatibility maintained

## Next Steps
1. Run the database migration
2. Test the new company filter functionality
3. Add more company-specific questions and study materials
4. Customize the study materials based on your needs