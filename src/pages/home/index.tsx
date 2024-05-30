import LinksRapidos from "../../components/LinksPesquisaRapida";
import { Conteiner } from "../../components/baselayot/style";
import CadastroBtn from "../../components/buttonAm";
import VagaCard from "../../components/vagasRecentes";
import { Link, useNavigate } from "react-router-dom";
import { ConteinerWhithe, Loginh1, Plogin } from "../login/style";
import * as S from "./style";
import { useUserContext } from "../../hooks/user/use-user-context";
import BarraPesquisaHome from "../../components/BarraPesquisaHome";

const Home = () => {
  const navigate = useNavigate()
  const { user } = useUserContext()
 
  return (
    <>
      <Conteiner>
        <S.Conteiner85>
          <S.HomeLogo>
            <S.Texdiv>
              <Plogin>
                MAIS DE 12.000 VAGAS DE TECNOLOGIA, REUNIDAS EM UM SÓ LUGAR
              </Plogin>

              <Loginh1>
                Encontre a sua vaga de <S.Whitspan>react</S.Whitspan>
              </Loginh1>
            </S.Texdiv>
            <S.Fotodiv>
              <img src="./src/assets/imgs/GordinTec.png" alt="" />
            </S.Fotodiv>
          </S.HomeLogo>
        </S.Conteiner85>
      </Conteiner>
      <ConteinerWhithe>
        <Conteiner>
          <S.Conteiner85>           
          <BarraPesquisaHome tema={"light"} />
            <S.Bodydiv>
            
              <S.Homeh2>Vagas mais recentes</S.Homeh2>

              <S.Griddiv>
                
                <VagaCard
                  title="Desenvolvedor Frontend"
                  location="São Paulo, SP"
                  technology="React"
                />
                <VagaCard
                  title="Desenvolvedor Backend"
                  location="Rio de Janeiro, RJ"
                  technology="Node.js"
                />
                <VagaCard
                  title="Desenvolvedor Frontend"
                  location="São Paulo, SP"
                  technology="React"
                />
                <VagaCard
                  title="Desenvolvedor Backend"
                  location="Rio de Janeiro, RJ"
                  technology="Node.js"
                />
              </S.Griddiv>
              <S.ConteinerBtn>
                {!user && <CadastroBtn
                  children={"Cadastre-se para ver mais vagas"}
                  onClick={() => navigate('cadastro')}
                />}
              </S.ConteinerBtn>
            </S.Bodydiv>
          </S.Conteiner85>
        </Conteiner>
      </ConteinerWhithe>
      <Conteiner>
        <S.Conteiner85>
          <S.Flexdiv>
            <S.Wh100div>
              <S.Homeh2Yelow>Vagas de emprego em todo Brasil</S.Homeh2Yelow>
              <S.Flexdiv2>
                <S.Filtrodiv onClick={() => {}}>
                  <S.Monitor1 />
                  Tecnologia
                </S.Filtrodiv>
                <S.Filtrodiv onClick={() => {}}>
                  <S.Local />
                  Cidades
                </S.Filtrodiv>
                <S.Filtrodiv onClick={() => {}}>
                  <S.Maleta />
                  Cargos
                </S.Filtrodiv>
              </S.Flexdiv2>
            </S.Wh100div>
            { !user && <S.CardCadastre>
               <S.UserPl />
              Faça seu <Link to={"cadastro"}>cadastro gratuito</Link> e encontre
              vagas de acordo com o seu perfil.
            </S.CardCadastre> }
          </S.Flexdiv>
        </S.Conteiner85>
      </Conteiner>
      <Conteiner>
        <S.Conteiner85>
          <S.GridLinks>
            <LinksRapidos
              filtro="React"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <LinksRapidos
              filtro="React"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <LinksRapidos
              filtro="React"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <LinksRapidos
              filtro="React"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <LinksRapidos
              filtro="React"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <LinksRapidos
              filtro="React"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <LinksRapidos
              filtro="React"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <LinksRapidos
              filtro="React"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <LinksRapidos
              filtro="React"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <LinksRapidos
              filtro="React"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </S.GridLinks>
        </S.Conteiner85>
      </Conteiner>
    </>
  );
};

export default Home;
