import * as S from "./style";

interface BarraPesquisaProps {
  tema: "light" | "dark";
}

const BarraPesquisa = ({ tema }: BarraPesquisaProps) => {
  return (
    <>
      <S.ConteinerP theme={tema}>
        <S.ConteinerB>
          <S.Inputdiv>
            <S.LabelStyle htmlFor="">O que você procura?</S.LabelStyle>
            <S.InputStyle type="text" placeholder="Cargo, tecnologia ou palava-chave" />
            <S.Glass/>
          </S.Inputdiv>

          <S.Inputdiv>
            <S.LabelStyle htmlFor="">Onde?</S.LabelStyle>
            <S.InputStyle type="text" placeholder="Localização" />
            <S.LocalNv/>
          </S.Inputdiv>

          <S.BuscarBtn>Buscar vagas</S.BuscarBtn>
        </S.ConteinerB>

        <S.RecentSearches>
        {tema === "light" && <span>Buscas mais recentes:</span>}
          <S.Recdiv>Java</S.Recdiv>
          <S.Recdiv>PHP</S.Recdiv>
          <S.Recdiv>Phyton</S.Recdiv>
          <S.Recdiv>React</S.Recdiv>
        </S.RecentSearches>
      </S.ConteinerP>
    </>
  );
};

export default BarraPesquisa;
