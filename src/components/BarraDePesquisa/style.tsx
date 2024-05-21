import styled, { css } from "styled-components";
import { Location } from "@styled-icons/ionicons-outline/Location";
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";

interface ContainerProps {
  theme: "light" | "dark";
}

export const ConteinerP = styled.div<ContainerProps>`
  ${(props) =>
    props.theme === "dark"
      ? css`
          background-color: #1a1033;
        `
      : css`
          background-color: white;
          box-shadow: 0px 3px 0px 0px #ecf1f4;
          border-radius: 16px;
          padding: 25px;
          width: 85%;
          position: absolute;
          margin-top: -70px;
        `}
`;

export const RecentSearches = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.preto};
`;

export const ConteinerB = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Inputdiv = styled.div`
  width: 400px;
  font-size: 16px;
  position: relative;
`;

export const LabelStyle = styled.label`
  width: 100%;
`;
export const InputStyle = styled.input`
  width: 100%;
  padding: 10px;
  height: 50px;
  padding-left: 40px;
  border-radius: 8px;
  border: solid 1px #d1d1d1;
  font-style: italic;
`;

export const BuscarBtn = styled.button`
  background-color: ${(props) => props.theme.colors.amarelo};
  padding: 11px 24px 10px 24px;
  border: 1px solid ${(props) => props.theme.colors.amarelo};
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.preto};
  font-weight: 600;
  height: 50px;
  box-sizing: border-box;
`;

export const Recdiv = styled.div`
  padding: 11px 24px 10px 24px;
  border: 1px solid #b2a1d9;
  border-radius: 8px;
  margin-left: 8px;
  color: ${(props) => props.theme.colors.roxoMedio};
  cursor: pointer;
  font-size: 14px;
`;

export const LocalNv = styled(Location)`
  width: 25px;
  position: absolute;
  top: 50%;
  transform: translateX(-1550%);
  color: #8c8ca1;
`;

export const Glass = styled(MagnifyingGlass)`
  width: 25px;
  position: absolute;
  color: #8c8ca1;
  top: 50%;
  transform: translateX(-1550%);
`;
