import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export type AuthResponse = {
  success: boolean;
  error: string | null;
  redirectTo?: string;
};

export async function signIn(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    const supabase = await createClient();

    if (!email || !password) {
      return {
        success: false,
        error: "Email and password are required.",
      };
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !data.user) {
      return {
        success: false,
        error: error?.message || "Failed to sign in",
      };
    }

    // Check user role and set appropriate redirect
    // For now, we'll redirect to student dashboard
    return {
      success: true,
      error: null,
      redirectTo: "/student/dashboard",
    };
  } catch (error) {
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}

export async function signOut(): Promise<AuthResponse> {
  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      error: null,
      redirectTo: "/",
    };
  } catch (error) {
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}
