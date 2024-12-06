"use client";

import { loginAction } from "@/actions/login";
import { FormButton } from "@/components";
import useAuthStore from "@/store/auth.store";
import { useActionState, useEffect } from "react";

export const LoginForm = () => {
  const { isAuthenticated, login, logout } = useAuthStore();
  const [state, formAction] = useActionState(loginAction, {
    ok: false,
    error: "",
    data: null,
  });

  console.log(isAuthenticated, "isAuthenticated");

  useEffect(() => {
    if (state.ok && !isAuthenticated) {
      login();
    }
  }, [state.ok, isAuthenticated, login]);

  return (
    <form action={formAction}>
      <input placeholder="usuário" type="text" name="username" id="username" />
      <input
        placeholder="Senha"
        type="password"
        name="password"
        id="password"
      />
      <FormButton />
      <p>{state.error}</p>
    </form>
  );
};
