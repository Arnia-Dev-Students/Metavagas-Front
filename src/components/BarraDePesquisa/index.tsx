import { ChangeEvent, Dispatch, useContext } from "react";
import * as S from "./style";
import { SearchContext } from "../../context/pesquisa";

interface BarraPesquisaProps {
  tema: "light" | "dark";
  vacancyRole: string;
  setVacancyRole: Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: Dispatch<React.SetStateAction<string>>;
  handleFilter: () => void;
}

const BarraPesquisa = ({
  tema,
  vacancyRole,
  location,
  setVacancyRole,
  setLocation,
  handleFilter,
}: BarraPesquisaProps) => {
  const handleVacancyRoleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVacancyRole(event.target.value);
  };

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <S.ConteinerP theme={tema}>
        <S.ConteinerB>
          <S.Inputdiv>
            <S.LabelStyle htmlFor="">O que você procura?</S.LabelStyle>
            <S.InputStyle
              value={vacancyRole}
              type="text"
              placeholder="Cargo, tecnologia ou palava-chave"
              onChange={handleVacancyRoleChange}
            />
            <S.Glass />
          </S.Inputdiv>

          <S.Inputdiv>
            <S.LabelStyle htmlFor="">Onde?</S.LabelStyle>
            <S.InputStyle
              value={location}
              type="text"
              placeholder="Localização"
              onChange={handleLocationChange}
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
