import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../hooks/user/use-user-context";
import CadastroBtn from "../buttonAm";
import { EntrarBtn, Meta, Vagas } from "../navbar/style";
import {
  Contatos,
  Email,
  FooterStyle,
  IcLocal,
  PDados,
  Tel,
  TitleDados,
} from "./style";

const Footer = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  return (
    <FooterStyle>
      <div>
        <Meta>meta</Meta>
        <Vagas>vagas</Vagas>
      </div>
      <Contatos>
        <TitleDados>Contato e Endereço</TitleDados>
        <PDados>
          <Tel />
          4003-5442
        </PDados>
        <PDados>
          <Email />
          Contato@arnia.com.br
        </PDados>
        <PDados>
          <IcLocal />
          Av. do Contorno, 2905 Santa Efigênia, Belo Horizonte - MG, 30110-080.
        </PDados>
      </Contatos>

      {!user && (
        <div>
          <EntrarBtn onClick={() => navigate("login")}>Entrar</EntrarBtn>
          <CadastroBtn onClick={() => navigate("cadastro")}>
            Cadastre-se gratuitamente
          </CadastroBtn>
        </div>
      )}
    </FooterStyle>
  );
};

export default Footer;
