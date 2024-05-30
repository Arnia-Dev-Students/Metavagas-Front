import { createContext, useState, ReactNode } from "react";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  searchLocation: string;
  setSearchLocation: (value: string) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchLocation, setSearchLocation] = useState<string>("");

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, searchLocation, setSearchLocation }}
    >
      {children}
    </SearchContext.Provider>
  );
};
