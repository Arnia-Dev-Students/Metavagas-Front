import { Outlet } from "react-router-dom";
import Footer from "../footer";
import NavBar from "../navbar";
import { Conteiner, Layout } from "./style";
import { useUserContext } from "../../hooks/user/use-user-context";

export default function Baselayout() {
  const { user } = useUserContext();
  return (
    <>
      <Layout>
        <Conteiner>
          <NavBar user={user} />
        </Conteiner>
        <Outlet />
        <Conteiner>
          <Footer />
        </Conteiner>
      </Layout>
    </>
  );
}
