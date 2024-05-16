import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPag from "../pages/login";
import Baselayout from "../components/baselayot/baseLayout";
import Cadastro from "../pages/cadastro";
import Home from "../pages/home";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Baselayout />} >
        <Route element={<Home />} path="/" />
        <Route element={<LoginPag />} path="/login" />
        <Route element={<Cadastro />} path="/cadastro" />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
