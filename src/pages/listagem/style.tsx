import styled from "styled-components";
import ReactSlider from "react-slider";

export const Listagemdiv = styled.div`
  margin-top: 20px;
  width: 100%;
`;
export const Titlediv = styled.div`
  width: 100%;
`;

export const Filtrodiv = styled.div`
  width: 25%;
  border-radius: 16px;
  border: 1px solid #ecf1f4;
  padding: 20px;
`;
export const Listagemdiv2 = styled.div`
  width: 70%;
`;

export const DivLayout = styled.div`
  width: 100%;
  display: flex;
`;

export const TitleFiltros = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.preto};
  font-weight: 700;
  margin-bottom: 25px;
`;

export const ListH2 = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xLarge};
  color: ${(props) => props.theme.colors.preto};
  margin-top: 30px;
`;

export const SubH2 = styled.div`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: #4a4a68;
  margin-bottom: 25px;
`;

export const SubH3 = styled.h3`
  color: #1a1033;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Inputsdiv = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

// range

export interface StyledTrackProps {
  index: number;
}

export const SliderWrapper = styled.div`
  margin: 20px 0;  
`;

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 2px;
  display: flex;
  align-items: center;
`;

export const StyledThumb = styled.div`
  height: 15px;
  width: 15px;
  background-color: white;
  border-radius: 50%;
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 1px solid #6950A1 ;
`;

export const StyledTrack = styled.div<StyledTrackProps>`
  top: 0;
  bottom: 0;
  background: ${(props) => (props.index === 1 ? "#6950A1" : "#ccc")};
  border-radius: 999px;
  height: 3px;
`;
