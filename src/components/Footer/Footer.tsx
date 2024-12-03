import Image from "next/image";
import styled from "./footer.module.css";
export const Footer = () => {
  return (
    <div className={styled.container}>
      <Image
        src={"/assets/dogs-footer.svg"}
        alt="dogs"
        width={28}
        height={22}
      />
      <p>Dogs. Alguns direitos reservados</p>
    </div>
  );
};
