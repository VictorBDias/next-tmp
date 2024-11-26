import Image from "next/image";
import { Container } from "./footer.styles";

export const Footer = () => {
  return (
    <Container>
      <Image
        src={"/assets/dogs-footer.svg"}
        alt="dogs"
        width={28}
        height={22}
      />
      <p>Dogs. Alguns direitos reservados</p>
    </Container>
  );
};
