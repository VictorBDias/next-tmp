import styled from "./form-input.module.css";

interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = ({ label, error, ...props }: IFormInput) => {
  return (
    <div className={styled.container}>
      <label className={styled.label} htmlFor={props.name}>
        {label}
      </label>
      <input className={styled.formInput} {...props} id={props.name} />
      {error && <p className={styled.formError}>{error}</p>}
    </div>
  );
};
