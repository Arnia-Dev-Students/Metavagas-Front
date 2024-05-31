import { ThemeProvider } from "styled-components";
import { light } from "./assets/styles/theme";
import GlobalStyles from "./assets/styles/global-styles";
import Router from "./routes";
import { UserContextProvider } from "./context/user";
import { SearchProvider } from "./context/pesquisa";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <UserContextProvider>
          <SearchProvider>
            <Router />
          </SearchProvider>
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
