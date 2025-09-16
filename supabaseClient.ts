import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zsrrxaajqchldxcgzetr.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzcnJ4YWFqcWNobGR4Y2d6ZXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMzgzODMsImV4cCI6MjA3MzYxNDM4M30.aUvVu1kXsI_O80lCzoe7BkegnlOCAt9QL5X_x70iF4o";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
