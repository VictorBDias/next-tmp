"use client";

import { loginAction } from "@/actions/login";
import { FormButton } from "@/components";
import { useActionState } from "react";

export const LoginForm = () => {
  const [state, formAction] = useActionState(loginAction, {
    ok: false,
    error: "",
    data: null,
  });

  console.log(state, "state");

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
