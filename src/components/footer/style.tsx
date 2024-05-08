import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: ${(props) => props.theme.colors.branco};
  color: ${(props) => props.theme.colors.preto};
  position: sticky;
  top: 0;
  display: flex;
`;
