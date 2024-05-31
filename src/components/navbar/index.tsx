import { useNavigate } from "react-router-dom";
import CadastroBtn from "../buttonAm";
import {
  Arrow,
  EntrarBtn,
  Flexnav,
  Initialspan,
  LogOut,
  Meta,
  Namespan,
  NavStyle,
  Vagas,
} from "./style";
import { User } from "../../models/user";
import { useUserContext } from "../../hooks/user/use-user-context";
import { useState } from "react";

type Props = {
  user: User | null;
};

const getInitials = (name: string): string => {
  const initials = name.match(/\b\w/g) || [];
  return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
};

const NavBar: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate();
  const { logout } = useUserContext();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const [isButtonsVisible, setisButtonVisible] = useState(false);
  const handleArrowClick = () => {
    setisButtonVisible(!isButtonsVisible);
  };

  return (
    <NavStyle>
      <div>        
        <Meta>meta</Meta>
        <Vagas>vagas</Vagas>
      </div>
      <div>
        {user ? (
          <Flexnav>
            <Initialspan>{getInitials(user.name)}</Initialspan>
            <Namespan>
              {user.name} <Arrow onClick={() => handleArrowClick()} />
            </Namespan>
            {isButtonsVisible && <LogOut onClick={handleLogout}>Logout</LogOut>}
          </Flexnav>
        ) : (
          <>
            <EntrarBtn onClick={() => navigate("/login")}>Entrar</EntrarBtn>
            <CadastroBtn onClick={() => navigate("/cadastro")}>
              Cadastre-se gratuitamente
            </CadastroBtn>
          </>
        )}
      </div>
    </NavStyle>
  );
};

export default NavBar;
