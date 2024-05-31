import LinksRapidos from "../../components/LinksPesquisaRapida";
import { Conteiner } from "../../components/baselayot/style";
import CadastroBtn from "../../components/buttonAm";
import VagaCard from "../../components/vagasRecentes";
import { Link, useNavigate } from "react-router-dom";
import { ConteinerWhithe, Loginh1, Plogin } from "../login/style";
import * as S from "./style";
import { useUserContext } from "../../hooks/user/use-user-context";
import BarraPesquisaHome from "../../components/BarraPesquisaHome";
import { useVacancyList } from "../../hooks/vacancy/use-vacancy-list";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate()
  const { user } = useUserContext()

  const { vacanciesList } = useVacancyList({});
    
  console.log(vacanciesList);

  const [filteredArray, setFilteredArray] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<string>('');
  
  const handleTecnologiasClick = () => {
    const tecnologias = vacanciesList?.vacancies.flatMap(vacancy =>
      vacancy.technologies.map(tech => tech.tecName)).slice(0, 16) || [];
    setFilteredArray(tecnologias);
    setFilterType('Tecnologia');
  };

  const handleCidadesClick = () => {
    const cidades = vacanciesList?.vacancies.map(vacancy => vacancy.location).slice(0, 16) || [];
    setFilteredArray(cidades);
    setFilterType('Cidades');
  };

  const handleCargosClick = () => {
    const cargos = vacanciesList?.vacancies.map(vacancy => vacancy.vacancyRole).slice(0, 16) || [];
    setFilteredArray(cargos);
    setFilterType('Cargos');
  };

  useEffect(() => {
    if (vacanciesList) {
      handleTecnologiasClick();
    }
  }, [vacanciesList]);
  
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
                {vacanciesList?.vacancies.slice(0, 4).map(( vacancy , index) => (
                  <VagaCard
                    key={index}
                    title={vacancy?.vacancyRole}
                    location={vacancy?.location}
                    technology={vacancy?.technologies?.map(tech => tech.tecName).join(", ")}
                  />
                )) || <p>No vacancies available</p>}
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
                <S.Filtrodiv onClick={handleTecnologiasClick}>
                  <S.Monitor1 />
                  Tecnologia
                </S.Filtrodiv>
                <S.Filtrodiv onClick={handleCidadesClick}>
                  <S.Local />
                  Cidades
                </S.Filtrodiv>
                <S.Filtrodiv onClick={handleCargosClick}>
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
      {filteredArray.map((item, index) => (
        <LinksRapidos key={index} filtro={item} onClick={() => {}} />
      ))}
      </S.GridLinks>
        </S.Conteiner85>
      </Conteiner>
    </>
  );
};

export default Home;
