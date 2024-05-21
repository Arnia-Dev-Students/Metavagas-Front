import styled from "styled-components";
import { Location } from "@styled-icons/ionicons-outline/Location";
import { Suitcase } from "@styled-icons/remix-line/Suitcase";


export const CardDiv = styled.div`
  border: 1px solid #ecf1f4;
  border-radius: 15px;
  padding: 25px;
  margin: 0;
  max-width: 100%;
  box-shadow: 0 4px 8px #ecf1f4;
`;

export const Cardh3 = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1a1033;
  margin-bottom: 10px;
`;
export const Cardp = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #4a4a68;
`;

export const Cardspan = styled.span`
  font-weight: 700;
`;

export const Flexdiv = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const CardA = styled.a`
  font-weight: 700;
  font-size: 14;
  color: #5D5FEF;
  text-decoration: none;
`;

export const LocalA = styled(Location)`
  width: 20px;
  margin-right: 8px;
  color: ${(props) => props.theme.colors.amarelo} ;
`;

export const MaletaA = styled(Suitcase)`
  width: 20px;
  margin-right: 8px;
  color: ${(props) => props.theme.colors.amarelo} ;
`;
