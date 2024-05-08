import { ThemeProvider } from "styled-components";
import { light } from "./assets/styles/theme";
import GlobalStyles from "./assets/styles/global-styles";
import Baselayout from "./components/baselayot/baseLayout";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles/>
        <Baselayout>
        
        </Baselayout>
      </ThemeProvider>
      {/* THEME PROVIDER
        GLOBAL STYLES
        USER CONTEXT
          ROUTER
        USER CONTEXT
      THEME PROVIDER */}
    </>
  );
}

export default App;
