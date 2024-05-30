import { ChangeEvent, Dispatch, useContext } from "react";
import * as S from "./style";
import { SearchContext } from "../../context/pesquisa";

interface BarraPesquisaProps {
  tema: "light" | "dark";
  vacancyRole: string;
  setVacancyRole: Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: Dispatch<React.SetStateAction<string>>;
  handleSearchChange: (
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  handleFilter: () => void;
}

const BarraPesquisa = ({
  tema,
  setVacancyRole,
  setLocation,
  handleSearchChange,
  handleFilter,
}: BarraPesquisaProps) => {
  const searchContext = useContext(SearchContext);

  if (!searchContext) {
    return null;
  }
  const { searchTerm, searchLocation } = searchContext;

  return (
    <>
      <S.ConteinerP theme={tema}>
        <S.ConteinerB>
          <S.Inputdiv>
            <S.LabelStyle htmlFor="">O que você procura?</S.LabelStyle>
            <S.InputStyle
              
              type="text"
              placeholder="Cargo, tecnologia ou palava-chave"
              onChange={handleSearchChange(setVacancyRole)}
            />
            <S.Glass />
          </S.Inputdiv>

          <S.Inputdiv>
            <S.LabelStyle htmlFor="">Onde?</S.LabelStyle>
            <S.InputStyle
              
              type="text"
              placeholder="Localização"
              onChange={handleSearchChange(setLocation)}
            />
            <S.LocalNv />
          </S.Inputdiv>

          <S.BuscarBtn onClick={handleFilter}>Buscar vagas</S.BuscarBtn>
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
