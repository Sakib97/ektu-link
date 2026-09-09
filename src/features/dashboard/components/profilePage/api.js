import { supabase } from "../../../../config/supabaseClient";

export async function fetchProfileOverview() {
    const { data, error } = await supabase.rpc('get_profile_overview');
    if (error) throw error;
    return data; // { profile: {...}, subscription: {...} | null } | null
  }