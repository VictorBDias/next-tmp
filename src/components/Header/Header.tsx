import Link from "next/link";
import styled from "./header.module.css";
import Image from "next/image";

export const Header = () => {
  const user = true;
  return (
    <div className={styled.container}>
      <nav className={`${styled.nav} container`}>
        <Link className="logo" href="/">
          <Image
            src="/assets/dogs.svg"
            alt="dogs"
            width={28}
            height={22}
            priority
          />
        </Link>
        {user ? (
          <Link className="login" href="/account">
            Gian
          </Link>
        ) : (
          <Link className="login" href="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </div>
  );
};
