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
        <div>
          padada
        </div>
        <p>pda</p>
        <p>pda</p>
        <p>pda</p>
        <p>pda</p><p>pda</p><p>pda</p><p>pda</p><p>pda</p>
        <Outlet />
        <Footer />
          </Layout>
        </Conteiner>
      
      
    </>
  );
}

//1320
