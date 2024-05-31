import { useContext } from "react";
import { SearchContext } from "../../context/pesquisa";

export const useSearchContext = () => useContext(SearchContext);
