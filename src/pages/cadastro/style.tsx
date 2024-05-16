import styled from "styled-components";
import { EmailOutline } from "styled-icons/evaicons-outline";
import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";

export const ConteinerCadastro = styled.div`
  margin-bottom: 8%;
  margin-top: 7%;
  background-color: ${(props) => props.theme.colors.preto};
  width: 85%;
  justify-content: baseline;
`;

export const EmailOut = styled(EmailOutline)`
  width: 20px;
  margin-right: 5px;
`;

export const Userplus = styled(UserPlus)`
  width: 20px;
  margin-right: 5px;
`;
