import { useState, useEffect } from "react";
import * as CONSTANTS from "../../utils/constants/constants";

export const useRecentSearches = () => {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const saveSearch = (query: string) => {
    if (!query) return;

    // OU TEM OU VAI SER INICIALIZADO
    let searches = JSON.parse(
      localStorage.getItem(CONSTANTS.LOCALSTORAGE_SEARCH_KEY) || "[]"
    );

    //REMOVENDO ALGUMA DUPLICADA
    searches = searches.filter((item: string) => item !== query);

    searches.unshift(query);

    if (searches.length > 4) {
      searches.pop();
    }

    localStorage.setItem(
      CONSTANTS.LOCALSTORAGE_SEARCH_KEY,
      JSON.stringify(searches)
    );

    setRecentSearches(searches);
  };

  const getRecentSearches = (): string[] => {
    return JSON.parse(
      localStorage.getItem(CONSTANTS.LOCALSTORAGE_SEARCH_KEY) || "[]"
    );
  };

  //REMOVER SEARCHS
  const clearSearchHistory = () => {
    //REMOVER
    localStorage.removeItem(CONSTANTS.LOCALSTORAGE_SEARCH_KEY);
    //LIMPAR STATES
    setRecentSearches([]);
  };

  useEffect(() => {
    setRecentSearches(getRecentSearches());
  }, []);

  return {
    recentSearches,
    saveSearch,
    clearSearchHistory,
  };
};
