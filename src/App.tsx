import { ThemeProvider } from "styled-components";
import { light } from "./assets/styles/theme";
import GlobalStyles from "./assets/styles/global-styles";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles/>
        <></>
      </ThemeProvider>
      {/* THEME PROVIDER
        GLOBAL STYLES
        USER CONTEXT
          ROUTER
        USER CONTEXT
      THEME PROVIDER */}
    </>
  )
}

export default App
