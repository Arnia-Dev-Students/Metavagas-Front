import React, { useContext } from "react";
import { SearchContext } from "../../context/pesquisa";

import * as S from "./style";
import { useNavigate } from "react-router-dom";

interface BarraPesquisaHomeProps {
  tema: "light" | "dark";
}

const BarraPesquisaHome: React.FC<BarraPesquisaHomeProps> = ({ tema }) => {
  
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();

  if (!searchContext) {
    return null;
  }

  const { searchTerm, setSearchTerm, searchLocation, setSearchLocation } =
    searchContext;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLocation(e.target.value);
  };

  const handleSubmit = () => {
    navigate("/listagem");
  };

  return (
    <S.ConteinerP>
      <S.ConteinerB>
        <S.Inputdiv>
          <S.LabelStyle htmlFor="">O que você procura?</S.LabelStyle>
          <S.InputStyle
            type="text"
            placeholder="Cargo, tecnologia ou palavra-chave"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <S.Glass />
        </S.Inputdiv>

        <S.Inputdiv>
          <S.LabelStyle htmlFor="">Onde?</S.LabelStyle>
          <S.InputStyle
            type="text"
            placeholder="Localização"
            value={searchLocation}
            onChange={handleLocationChange}
          />
          <S.LocalNv />
        </S.Inputdiv>

        <S.BuscarBtn onClick={handleSubmit}>Buscar vagas</S.BuscarBtn>
      </S.ConteinerB>

      <S.RecentSearches>
        {tema === "light" && <span>Buscas mais recentes:</span>}
        <S.Recdiv>Java</S.Recdiv>
        <S.Recdiv>PHP</S.Recdiv>
        <S.Recdiv>Phyton</S.Recdiv>
        <S.Recdiv>React</S.Recdiv>
      </S.RecentSearches>
    </S.ConteinerP>
  );
};

export default BarraPesquisaHome;
