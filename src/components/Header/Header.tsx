import Link from "next/link";
import { Container, Nav } from "./header.styles";
import Image from "next/image";

export const Header = () => {
  return (
    <Container>
      <Nav className="container">
        <Link className="logo" href="/">
          <Image
            src="/assets/dogs.svg"
            alt="dogs"
            width={28}
            height={22}
            priority
          />
        </Link>
        <Link className="login" href="/login">
          Login / Criar
        </Link>
      </Nav>
    </Container>
  );
};
