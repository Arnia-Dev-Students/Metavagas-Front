import { createContext, useState, ReactNode } from "react";

interface SearchContext {
  searchTerm: string | null;
  setSearchTerm: (value: string) => void;
  searchLocation: string | null;
  setSearchLocation: (value: string) => void;
  searchTechnology: number[] | null;
  setSearchTechnology: (value: number[]) => void;
}

export const SearchContext = createContext<SearchContext>({
  searchLocation: null,
  searchTerm: null,
  setSearchTerm: () => {},
  setSearchLocation: () => {},
  searchTechnology: null,
  setSearchTechnology: () => {}
});

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchLocation, setSearchLocation] = useState<string>("");
  const [searchTechnology, setSearchTechnology] = useState<number[]>([]);

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, searchLocation, setSearchLocation, searchTechnology, setSearchTechnology }}
    >
      {children}
    </SearchContext.Provider>
  );
};
