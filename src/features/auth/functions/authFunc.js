import { supabase } from "../../../config/supabaseClient";

// export async function signInWithProvider(provider, next) {
    export async function signInWithProvider(provider) {
    // const redirectTo = new URL('/auth/callback', window.location.origin);
    const redirectTo = `${window.location.origin}${location.state?.from?.pathname || "/"}`;
    // if (next) redirectTo.searchParams.set('next', next);
  
    const { error } = await supabase.auth.signInWithOAuth({
      provider, // 'google' | 'facebook'
      options: {
        // redirectTo: redirectTo.toString(),
        redirectTo: redirectTo,
        // scopes: provider === 'facebook' ? 'email' : undefined,
      },
    });
  
    if (error) throw error;
    // Nothing returns — the browser has navigated to the provider.
  }
