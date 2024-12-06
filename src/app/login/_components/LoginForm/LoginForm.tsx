"use client";

import { loginAction } from "@/actions/login";
import { ErrorMessage, FormButton, FormInput } from "@/components";

import useAuthStore from "@/store/auth.store";
import { useActionState, useEffect } from "react";

export const LoginForm = () => {
  const { isAuthenticated, login } = useAuthStore();
  const [state, formAction] = useActionState(loginAction, {
    ok: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    if (state.ok && !isAuthenticated) {
      login();
    }
  }, [state.ok, isAuthenticated, login]);

  useEffect(() => {
    if (state.ok) {
      window.location.href = "/account";
    }
  }, [state.ok]);

  return (
    <form style={{ maxWidth: "50%" }} action={formAction}>
      <FormInput label="Usuário" name="username" type="text" />
      <FormInput label="Senha" name="password" type="password" />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
};
