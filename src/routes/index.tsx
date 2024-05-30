import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPag from "../pages/login";
import Baselayout from "../components/baselayot/baseLayout";
import Cadastro from "../pages/cadastro";
import Home from "../pages/home";
import PagListagem from "../pages/listagem";
import { UserContextProvider } from "../context/user";
import PublicRoute from "../components/rotasPublic";
import  { SearchProvider }  from "../context/pesquisa";
const Router: React.FC = () => {
  return (
    <UserContextProvider>
      <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Baselayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<PublicRoute redirectTo="/" />}>
              <Route path="" element={<LoginPag />} />
            </Route>
            <Route path="/cadastro" element={<PublicRoute redirectTo="/" />}>
              <Route path="" element={<Cadastro />} />
            </Route>

            <Route path="/listagem" element={<PagListagem />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </SearchProvider>
      
    </UserContextProvider>
  );
};

export default Router;
