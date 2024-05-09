import { Outlet } from "react-router-dom";
import Footer from "../footer";
import NavBar from "../navbar";
import { Conteiner, Layout } from "./style";

export default function Baselayout() {
  return (
    <>
      <Conteiner>
        <Layout>
          <NavBar />          
          <Outlet />         
          <Footer />
        </Layout>
      </Conteiner>
    </>
  );
}
