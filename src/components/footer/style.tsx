import styled from "styled-components";
import { Telephone } from "@styled-icons/bootstrap/Telephone";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Location } from "@styled-icons/evil/Location";

export const FooterStyle = styled.div`
  padding-bottom: 5%;
  padding-top: 5%;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #fbb04d;
  align-items: baseline;
  background-color: ${(props) => props.theme.colors.preto};
  width: 85%;
`;

export const TitleDados = styled.p`
  color: ${(props) => props.theme.colors.amarelo};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 500;
  margin-bottom: 10px;
`;
export const PDados = styled.div`
  font-weight: 400;
  color: ${(props) => props.theme.colors.branco};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Tel = styled(Telephone)`
  color: ${(props) => props.theme.colors.preto};
  background-color: ${(props) => props.theme.colors.amarelo};
  width: 30px;
  padding: 5px;
  font-weight: 600;
  border-radius: 50%;
  margin-right: 3%;
  margin-top: 10px;
`;

export const Email = styled(EmailOutline)`
  color: ${(props) => props.theme.colors.preto};
  background-color: ${(props) => props.theme.colors.amarelo};
  width: 30px;
  padding: 5px;
  font-weight: 600;
  border-radius: 50%;
  margin-right: 3%;
  margin-top: 10px;
`;

export const IcLocal = styled(Location)`
  color: ${(props) => props.theme.colors.preto};
  background-color: ${(props) => props.theme.colors.amarelo};
  width: 30px;
  padding: 5px;
  font-weight: 600;
  border-radius: 50%;
  margin-right: 3%;
  margin-top: 10px;
`;

export const Contatos = styled.div`
  width: 33%;
`;
