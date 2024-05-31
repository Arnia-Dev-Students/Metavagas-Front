import styled from "styled-components";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";

export const NavStyle = styled.nav`
  background-color: ${(props) => props.theme.colors.preto};
  color: ${(props) => props.theme.colors.branco};
  position: sticky;
  top: 0;
  display: flex;
  height: 10vh;
  border-bottom: 2px solid black;
  align-items: center;
  justify-content: space-between;
  width: 85%;
`;

export const EntrarBtn = styled.button`
  color: white;
  background-color: transparent;
  padding: 11px 24px 10px 24px;
  margin-right: 20px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid white;
`;

export const Meta = styled.span`
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.xLarge};
  color: white;
`;
export const Vagas = styled.span`
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.xLarge};
  color: ${(props) => props.theme.colors.amarelo};
  font-style: italic;
`;

export const Initialspan = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.amarelo};
  width: 35px;
  height: auto;
  padding: 5px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  margin-right: 10px;
`;

export const Flexnav = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Namespan = styled.span`
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
`;

export const Arrow = styled(ArrowIosDownward)`
  color: white;
  width: 20px;
`;

export const LogOut = styled.button`
  border-radius: 15px;
  padding: 5px;
  color: ${(props) => props.theme.colors.roxo};
  cursor: pointer;
  position: absolute;
  margin-top: 50px;
  margin-left: 120px;
  
`;

