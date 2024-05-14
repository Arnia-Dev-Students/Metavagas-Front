import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Baselayout from "../components/baselayot/baseLayout";
import Cadastro from "../pages/cadastro";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Baselayout />} path="/">
        <Route element={<Login />} path="/login" />
        <Route element={<Cadastro />} path="/cadastro" />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router

