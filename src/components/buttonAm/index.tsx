import { ReactNode } from "react";
import { StyledButton } from "./style";

interface CadastroBtnProps {
  children: ReactNode;
  onClick: () => void;
}

const CadastroBtn = ({ children, onClick, ...rest }: CadastroBtnProps) => (
  <StyledButton onClick={onClick} {...rest}>
    {children}
  </StyledButton>
);

export default CadastroBtn;
