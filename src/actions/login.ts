"use server";

import { apiAuth } from "@/services/api";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export const loginAPI = async (formData: FormData) => {
  const cookiesNext = await cookies();
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  if (!username || !password) {
    console.error("Username or password is missing");
    return { error: "Username or password is missing" };
  }

  try {
    const response = await apiAuth.post("token", {
      username,
      password,
      headers: {
        "Cache-Control": "no-cache",
      },
    });
    const { token } = response?.data;
    console.log("Login successful:", response.data.token);
    cookiesNext.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error("Axios error:", error.response?.data || error.message);
      return { error: error.response?.data || "Failed to authenticate" };
    } else {
      console.error("Unexpected error:", error);
      return { error: "An unexpected error occurred" };
    }
  }
};
