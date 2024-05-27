import { TecButton } from "./style";

interface ButtonProps { 
  tec: string
}

const ButtonTec = ({ tec }: ButtonProps) => {
    return <TecButton>{tec}</TecButton>;
  };
  
  export default ButtonTec;