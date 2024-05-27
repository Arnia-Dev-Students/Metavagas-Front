import { useNavigate } from "react-router-dom";
import CadastroBtn from "../buttonAm";
import { EntrarBtn, Meta, NavStyle, Vagas } from "./style";
import { User } from "../../models/user";

type Props = {
  user: User | null
}

const NavBar: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate()
  
  return (
    <NavStyle>
      <div>
        <Meta>meta</Meta>
        <Vagas>vagas</Vagas>
      </div>
      <div>
        <EntrarBtn onClick={() => navigate("/login")}>Entrar</EntrarBtn>
        <CadastroBtn onClick={() => {window.alert('botao funcionou')}}>Cadastre-se gratuitamente</CadastroBtn>
        <div>{user?.name || ""}</div>
      </div>
    </NavStyle>
  );
};

export default NavBar;
