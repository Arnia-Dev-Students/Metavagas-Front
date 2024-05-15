import styled from "styled-components";

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

