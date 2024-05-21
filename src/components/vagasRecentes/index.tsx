import * as S from "./style";

interface VagaCardProps {
    title: string;
    location: string;
    technology: string;
    
  }
  

const VagaCard = ({ title, location, technology}: VagaCardProps) => {
    return (
      <S.CardDiv>
        <S.Cardh3>{title}</S.Cardh3>
        <S.Flexdiv><S.Cardp><S.LocalA/> Localização: {location}</S.Cardp></S.Flexdiv>
        <S.Flexdiv><S.Cardp><S.MaletaA/>Tecnologia: <S.Cardspan>{technology}</S.Cardspan> </S.Cardp></S.Flexdiv>
        <S.CardA href="">
          Ver mais detalhes
        </S.CardA>
      </S.CardDiv>
    );
  };

  export default VagaCard