import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Dogs</Link>
        <Link href="/login">Login / Criar</Link>
      </nav>
    </header>
  );
};
