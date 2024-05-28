import LinksRapidos from "../../components/LinksPesquisaRapida";
import { Conteiner } from "../../components/baselayot/style";
import CadastroBtn from "../../components/buttonAm";
import VagaCard from "../../components/vagasRecentes";
import { Link } from "react-router-dom";

import { ConteinerWhithe, Loginh1, Plogin } from "../login/style";
import * as S from "./style";
import BarraPesquisa from "../../components/BarraDePesquisa";
import { useGetVacancyPublic } from "../../hooks/vacancy/use-get-vacancy-public";

const Home = () => {

  const {vacancies} = useGetVacancyPublic()
  

  console.log(vacancies)

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
          <BarraPesquisa tema={"light"} />
            <S.Bodydiv>
            
              <S.Homeh2>Vagas mais recentes</S.Homeh2>

              <S.Griddiv>
                {vacancies?.map(({ vacancy }) => (
                  <VagaCard
                    key={vacancy.id}
                    title={vacancy.vacancyRole}
                    location={vacancy.location}
                    technology={vacancy.technologies.map(tech => tech.tecName).join(", ")}
                  />
                ))}
              </S.Griddiv>
              <S.ConteinerBtn>
                <CadastroBtn
                  children={"Cadastre-se para ver mais vagas"}
                  onClick={() => {}}
                />
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
            <S.CardCadastre>
              <S.UserPl />
              Faça seu <Link to={"cadastro"}>cadastro gratuito</Link> e encontre
              vagas de acordo com o seu perfil.
            </S.CardCadastre>
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
