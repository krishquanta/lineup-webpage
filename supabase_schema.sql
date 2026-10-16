-- ================================================================
-- Lineup — Supabase SQL Schema for Idea Submissions
-- Run this in your Supabase project's SQL Editor (Dashboard > SQL Editor)
-- ================================================================

-- 1. Create the 'ideas' table
CREATE TABLE IF NOT EXISTS public.ideas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    age SMALLINT CHECK (age >= 14 AND age <= 35),
    project_title TEXT NOT NULL,
    idea_description TEXT NOT NULL,
    funding_goal TEXT NOT NULL,
    email TEXT NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.ideas ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow anyone (anon key) to submit new ideas
CREATE POLICY "Allow public insert of ideas" 
ON public.ideas 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- 4. Policy: Only authenticated team members / service role can view submissions
CREATE POLICY "Allow authenticated users to view ideas" 
ON public.ideas 
FOR SELECT 
TO authenticated 
USING (true);
