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
  margin-right: 20px;
  height: 100%;
`;
export const Listagemdiv2 = styled.div`
  width: 100%;
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
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const Inputsdiv = styled.div`
  width: 100%;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
  position: relative;

  display: flex;
`;

export const Bluesp = styled.p`
  color: #004ce8;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

export const Graficodiv = styled.div`
  gap: 20px; /* Espaçamento entre os itens */
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  
`;

export const Styleimg = styled.img`
  width: 100%;
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
  border: 1px solid #6950a1;
`;

export const StyledTrack = styled.div<StyledTrackProps>`
  top: 0;
  bottom: 0;
  background: ${(props) => (props.index === 1 ? "#6950A1" : "#ccc")};
  border-radius: 999px;
  height: 3px;
`;
export const StyleSpan = styled.span`
  color: #8c8ca1;
  font-size: 14px;
  font-weight: 400;
`;

// chekbox

export const CheckboxLabel = styled.label`
  margin-left: 8px;
`;

export const CheckboxInput = styled.input`
  all: unset;
  display: inline-block;
  border: 1px solid #bdbdbd;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  position: relative;

  &:checked {
    background-color: #004ce8;
  }

  &:checked::before {
    content: "✓";
    font-size: 14px;
    color: #f7f7fa;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 18px;
  }
`;
