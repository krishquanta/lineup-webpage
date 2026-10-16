// Lineup — Supabase Client Configuration
// Replace the placeholder values below with your project credentials from:
// Supabase Dashboard -> Project Settings -> API -> Project URL & Project API Keys (anon public)

export const SUPABASE_URL = "https://your-project-id.supabase.co";
export const SUPABASE_ANON_KEY = "your-anon-public-key";

// Helper to check if credentials have been set up
export function isSupabaseConfigured() {
  return (
    SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    !SUPABASE_URL.includes("your-project-id") &&
    !SUPABASE_ANON_KEY.includes("your-anon-public-key")
  );
}
