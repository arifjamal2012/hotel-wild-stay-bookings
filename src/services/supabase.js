
import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://nupzcylnykfauywdraax.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51cHpjeWxueWtmYXV5d2RyYWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4NjcyMDcsImV4cCI6MjAyMjQ0MzIwN30.Jt8gRH5atvb80V2akXG5lWB8ZwFBbaOCtxFhri_oHa8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;