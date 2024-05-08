import { ReactNode } from "react";
import { StyledButton } from "./style";

interface CadastroBtnProps {
  children: ReactNode;
}

const CadastroBtn = ({ children, ...rest }: CadastroBtnProps) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default CadastroBtn;
