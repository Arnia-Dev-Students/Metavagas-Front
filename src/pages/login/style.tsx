import styled from "styled-components";
import { EyeOffOutline } from "@styled-icons/evaicons-outline/EyeOffOutline";
import { EyeOutline } from "@styled-icons/evaicons-outline/EyeOutline";

export const Plogin = styled.p`
  color: ${(props) => props.theme.colors.branco};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 400;
`;
export const Loginh1 = styled.h1`
  color: ${(props) => props.theme.colors.amarelo};
  font-size: ${(props) => props.theme.fontSizes.xxLarge};
  font-weight: 600;
  margin-bottom: 5%;
`;
export const Textdiv = styled.div`
  width: 50%;
`;

export const Ptext = styled.div`
  color: ${(props) => props.theme.colors.branco};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: 3%;
  display: flex;
`;
export const ConteinerLogin = styled.div`
  margin-bottom: 5%;
  margin-top: 7%;
  background-color: ${(props) => props.theme.colors.preto};
  width: 85%;
  justify-content: baseline;
`;

export const ConteinerWhithe = styled.div`
  background-color: white;
`;

export const Loginform = styled.form`
  background-color: white;
  width: 35%;
  padding: 25px;
  border-radius: 15px;
  position: absolute;
  margin-top: 70px;
  margin-left: 57.5%;
  box-shadow: 0px 2px 2px #8c8ca1;
`;
export const Formh3 = styled.p`
  color: ${(props) => props.theme.colors.roxo};
  font-weight: 700;
  font-size: 24px;
`;
export const DivForm = styled.div`
  width: 100%;
  margin-top: 20px;
  position: relative;
`;
export const Inputlabel = styled.label`
  width: 100%;
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.preto};
`;
export const Inputlogin = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d1d1d1;
`;
export const LoginBtn = styled.button`
  margin-top: 15px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.amarelo};
  padding: 11px 24px 10px 24px;
  border: 1px solid ${(props) => props.theme.colors.amarelo};
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.preto};
`;

export const RodapeForm = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 15px;
  color: ${(props) => props.theme.colors.preto};
`;

export const Astyled = styled.a`
  color: ${(props) => props.theme.colors.preto};
  text-decoration: underline;
  cursor: pointer;
`;

export const DicasCadastro = styled.div`
  width: 85%;
  margin-top: 80px;
  display: flex;
  margin-bottom: 150px;
  margin-top: 150px;
`;

export const TitleCard = styled.div`
  width: 30%;
  margin-right: 25px;
  font-size: ${(props) => props.theme.fontSizes.xLarge};
  font-weight: 600;
`;

export const CardDiv = styled.div`
  width: 25%;
  background-color: ${(props) => props.theme.colors.roxo};
  margin-left: 25px;
  padding: 20px;
  border-radius: 16px;
  line-height: 30px;
`;
export const SubMedium = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.branco};
  font-weight: 500;
`;

export const SubMedium2 = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.amarelo};
  font-weight: 500;
`;

export const Pcard = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.branco};
`;

export const ErrorForm = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: red;
`;

export const EyeOut = styled(EyeOutline)`
  width: 20px;
  color: #8c8ca1;
  position: absolute;
  margin-top: 10px;
  margin-left: -30px;
  cursor: pointer;
`;

export const EyeOff = styled(EyeOffOutline)`
  width: 20px;
  color: #8c8ca1;
  position: absolute;
  margin-top: 10px;
  margin-left: -30px;
  cursor: pointer;
`;
