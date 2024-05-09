import styled from "styled-components";
import { Telephone } from "@styled-icons/bootstrap/Telephone";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Location } from "@styled-icons/evil/Location";

export const FooterStyle = styled.div`
  padding-top: 8%;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #FBB04D;
`;

export const TitleDados = styled.p`
  color: ${(props) => props.theme.colors.amarelo};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
`;
export const PDados = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.colors.branco};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Tel = styled(Telephone)`
  color: ${(props) => props.theme.colors.preto};
  background-color: ${(props) => props.theme.colors.amarelo};
  width: 20px;
  padding: 5px;
  font-weight: 600;
  border-radius: 50%;
  margin-right: 1.5%;
`;

export const Email = styled(EmailOutline)`
  color: ${(props) => props.theme.colors.preto};
  background-color: ${(props) => props.theme.colors.amarelo};
  width: 20px;
  padding: 5px;
  font-weight: 600;
  border-radius: 50%;
  margin-right: 1.5%;
`;

export const IcLocal = styled(Location)`
  color: ${(props) => props.theme.colors.preto};
  background-color: ${(props) => props.theme.colors.amarelo};
  width: 20px;
  padding: 5px;
  font-weight: 600;
  border-radius: 50%;
  margin-right: 1.5%;
`;

export const Contatos = styled.div`
  width: 33%;
`;
