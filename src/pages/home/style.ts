import styled from "styled-components";
import { Monitor } from "@styled-icons/foundation/Monitor";
import { Location } from "@styled-icons/ionicons-outline/Location";
import { Suitcase } from "@styled-icons/remix-line/Suitcase";
import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";

export const Conteiner85 = styled.div`
  width: 85%;
  display: flex;
`;

export const Whitspan = styled.span`
  color: white;
`;

export const Texdiv = styled.div`
  width: 40%;
`;

export const Fotodiv = styled.div`
  width: 60%;
  object-fit: contain;

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
`;

export const HomeLogo = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const Bodydiv = styled.div`
  margin-top: 150px;
  width: 100%;
`;
export const Homeh2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xLarge};
  font-weight: 600;
  color: ${(props) => props.theme.colors.preto};
  margin-bottom: 30px;
`;

export const Griddiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  width: 100%;
  margin-bottom: 40px;
`;

export const ConteinerBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const Homeh2Yelow = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xLarge};
  font-weight: 600;
  color: ${(props) => props.theme.colors.amarelo};
  margin-top: none;
`;

export const CardCadastre = styled.div`
  background-color: white;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px;
  width: 30%;
  line-height: 25px;
  font-weight: 400;
  padding-top: 30px;
`;
export const Flexdiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-top: 70px;
`;
export const Filtrodiv = styled.div`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 400;
  color: ${(props) => props.theme.colors.branco};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34%;
  border-bottom: 1px solid white;
  padding-bottom: 15px;
  cursor: pointer;
`;

export const Flexdiv2 = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 92%;
`;

export const Wh100div = styled.div`
  width: 100%;
`;

export const GridLinks = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-bottom: 50px;
`;

export const Monitor1 = styled(Monitor)`
  width: 30px;
  margin-right: 8px;
`;

export const Local = styled(Location)`
  width: 30px;
  margin-right: 8px;
`;

export const Maleta = styled(Suitcase)`
  width: 30px;
  margin-right: 8px;
`;

export const UserPl = styled(UserPlus)`
  width: 50px;
  margin-right: 8px;
  position: absolute;
  margin-left: 5px;
  margin-top: -55px;
  color: ${(props) => props.theme.colors.amarelo};
  background-color: ${(props) => props.theme.colors.roxo};
  padding: 10px;
  border-radius: 50%;
`;
