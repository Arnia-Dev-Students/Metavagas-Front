import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../../hooks/user/use-search-context";
import { ArrowRigth, Filtro, LinkConteiner, LinkDiv, Linkp } from "./style";

interface LinksProps {
  filterItem: {
    id: number;
    title: string;
  }
  filterType: "cidades" | "tecnologias" | "cargos"
}

const LinksRapidos = ({ filterItem, filterType }: LinksProps) => {
  const { setSearchTerm, setSearchLocation, setSearchTechnology } = useSearchContext()
  const navigate = useNavigate();

  const handleSearchChange = () => {
    filterType === "cargos" && setSearchTerm(filterItem.title);
    filterType === "cidades" && setSearchLocation(filterItem.title);
    filterType === "tecnologias" && setSearchTechnology([filterItem.id]);
  };

  const handleSearch = () => {
    handleSearchChange()
    navigate("/listagem");
  };
  
  return (
  <LinkConteiner onClick={handleSearch}>
    <LinkDiv>
      <Linkp>vagas</Linkp>
      <Filtro>{filterItem.title}</Filtro>
    </LinkDiv>
    <ArrowRigth  />
  </LinkConteiner>)
};

export default LinksRapidos;
