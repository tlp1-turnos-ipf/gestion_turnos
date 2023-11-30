import { FormRegister } from "../../components/auth/FormRegister";
import { FooterPrincipal } from "../../components/footers/FooterPrincipal";
import { HeaderPrincipal } from "../../components/header/HeaderPrincipal";

export const Register = () => {
  return (
    <>
      <HeaderPrincipal />
      <FormRegister />
      <FooterPrincipal />
    </>
  );
};
