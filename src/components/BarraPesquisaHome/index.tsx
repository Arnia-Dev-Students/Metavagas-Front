import * as S from "./style";
import { useSearchContext } from "../../hooks/user/use-search-context";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecentSearches } from "../../hooks/user/use-recent-searches";

interface BarraPesquisaHomeProps {
  tema: "light" | "dark";
}

const BarraPesquisaHome: React.FC<BarraPesquisaHomeProps> = ({ tema }) => {
  const { searchTerm, setSearchTerm, searchLocation, setSearchLocation } =
    useSearchContext();
  const { recentSearches, saveSearch } = useRecentSearches();
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLocation(e.target.value);
  };

  const handleSubmit = () => {
    saveSearch(searchTerm as string);
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
            value={searchTerm || ""}
            onChange={handleSearchChange}
          />
          <S.Glass />
        </S.Inputdiv>

        <S.Inputdiv>
          <S.LabelStyle htmlFor="">Onde?</S.LabelStyle>
          <S.InputStyle
            type="text"
            placeholder="Localização"
            value={searchLocation || ""}
            onChange={handleLocationChange}
          />
          <S.LocalNv />
        </S.Inputdiv>

        <S.BuscarBtn onClick={handleSubmit}>Buscar vagas</S.BuscarBtn>
      </S.ConteinerB>

      <S.RecentSearches>
        {tema === "light" && <span>Buscas mais recentes:</span>}
        {recentSearches.map((search, index) => (
          <S.Recdiv key={index} onClick={() => setSearchTerm(search)}>
            {search}
          </S.Recdiv>
        ))}
      </S.RecentSearches>
    </S.ConteinerP>
  );
};

export default BarraPesquisaHome;
