"use client";

import { useFormStatus } from "react-dom";

import styled from "./form-button.module.css";

type FormButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const FormButton = ({
  children = "Entrar",
  ...props
}: FormButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button {...props} className={styled.button} disabled={pending}>
      {children}
    </button>
  );
};
