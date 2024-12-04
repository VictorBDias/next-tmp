import { loginAPI } from "@/actions/login";

export const LoginForm = async () => {
  return (
    <>
      <form action={loginAPI}>
        <input
          placeholder="usuário"
          type="text"
          name="username"
          id="username"
        />
        <input
          placeholder="Senha"
          type="password"
          name="password"
          id="password"
        />
        <button>Entrar</button>
      </form>
    </>
  );
};
