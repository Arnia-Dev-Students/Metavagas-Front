import styled from "styled-components";

export const NavStyle = styled.nav`
  background-color: ${(props) => props.theme.colors.amarelo};
  color: ${(props) => props.theme.colors.branco};
  position: sticky;
  top: 0;
  display: flex;
  padding: 20px;
`;
