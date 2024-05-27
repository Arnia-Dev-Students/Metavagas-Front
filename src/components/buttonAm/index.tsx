import { ReactNode } from "react";
import { StyledButton } from "./style";

interface CadastroBtnProps {
  children: ReactNode;
  onClick: () => void;
  width?: string; 
  
}

const CadastroBtn = ({ children, onClick, width, ...rest }: CadastroBtnProps) => (
  <StyledButton onClick={onClick} width={width} {...rest}>
    {children}
  </StyledButton>
);

export default CadastroBtn;
