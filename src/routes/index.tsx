import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Baselayout from "../components/baselayot/baseLayout";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Login />} />

      <Route element={<Baselayout />} path="/">
        <Route />

        
      </Route>
    </Routes>
  </BrowserRouter>
);
