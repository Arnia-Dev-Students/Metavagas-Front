import styled from "styled-components";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";

export const LinkConteiner = styled.div`
  margin: 2px;
  padding: 18px;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const LinkDiv = styled.div`
  width: 100%;
  justify-content: space-between;
`;
export const Filtro = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.preto};
`;

export const Linkp = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #8c8ca1;
`;
export const ArrowRigth = styled(ArrowRight)`
  width: 20px;
  margin-right: 5px;
`;
