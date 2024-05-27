import { styled } from "styled-components";

export const TitleVaga = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.preto};
`;
export const Superiordiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Datediv = styled.div`
  font-size: 14px;
  color: #8c8ca1;
`;

export const Bold = styled.b`
  font-size: 14px;
  color: #4a4a68;
`;

export const Subspan = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.cinza2};
`;

export const Cardvaga = styled.div`
  padding: 20px;
  border: 1px solid #ecf1f4;
  border-radius: 16px;
  margin-bottom: 30px;
`;

export const Buttondiv = styled.div`
  margin-top: 15px;
  margin-bottom: 25px;
  display: flex;
`;
export const Detailsdiv = styled.div`
  margin-bottom: 25px;
`;
export const Detailspan = styled.span`
  color: ${(props) => props.theme.colors.cinza2};
  font-size: 14px;
  margin-right: 25px;
`;

export const Description = styled.div`
  color: ${(props) => props.theme.colors.cinza2};
  font-size: 14px;
`;

export const NovaBtn = styled.button`
  background-color: ${(props) => props.theme.colors.roxo};
  padding: 7px 24px 7px 24px;
  color: white;
  font-weight: 700;
  margin-bottom: 15px;
  border: none;
  border-radius: 8px;
`;
