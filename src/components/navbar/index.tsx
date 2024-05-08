import CadastroBtn from "../buttonAm";
import { EntrarBtn, Meta, NavStyle, Vagas } from "./style";

const NavBar = () => {
  return (
    <NavStyle>
      <div>
        <Meta>meta</Meta>
        <Vagas>vagas</Vagas>
      </div>
      <div>
        <EntrarBtn>Entrar</EntrarBtn>
        <CadastroBtn>Cadastre-se gratuitamente</CadastroBtn>
      </div>
    </NavStyle>
  );
};

export default NavBar;
