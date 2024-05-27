import { styled } from "styled-components";

export const StyledButton = styled.button<{ width?: string }>`
  background-color: ${(props) => props.theme.colors.amarelo};
  padding: 11px 24px 10px 24px;
  border: 1px solid ${(props) => props.theme.colors.amarelo};
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.preto};
  font-weight: 600;
  width: ${({ width }) => width || 'auto'};
`;
