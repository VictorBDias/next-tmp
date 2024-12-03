import styled from "./login.module.css";
export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styled.containerLogin}>
      <div className={styled.cadasterForm}>{children}</div>
    </div>
  );
}
