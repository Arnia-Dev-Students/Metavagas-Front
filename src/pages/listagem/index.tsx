import React, { ChangeEvent, useState } from "react";
import BarraPesquisa from "../../components/BarraDePesquisa";
import { Conteiner } from "../../components/baselayot/style";
import CadastroBtn from "../../components/buttonAm";
import { Conteiner85 } from "../home/style";
import { ConteinerWhithe } from "../login/style";
import * as S from "./style";
import { useVacancyList } from "../../hooks/vacancy/use-vacancy-list";
import { useGetTechnologies } from "../../hooks/technology/use-get-technologies";
import Vagas from "../../components/Vagas";
import { useSearchContext } from "../../hooks/user/use-search-context";
import { useUserContext } from "../../hooks/user/use-user-context";
import { useNavigate } from "react-router-dom";

const PagListagem = () => {
  const navigate = useNavigate();

  const { searchTerm, searchLocation, searchTechnology } = useSearchContext();

  const { user } = useUserContext();

  const { technologies } = useGetTechnologies();

  const [vacancyRole, setVacancyRole] = useState(searchTerm || "");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    searchTechnology ? [searchTechnology.toString()] : []
  );
  const [vacancyTypes, setVacancyTypes] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState([0, 80000]);
  const [location, setLocation] = useState(searchLocation || "");

  //BUSCANDO COM VALORES INICIAIS DO CONTEXTO
  const { vacanciesList, fetchVacancies } = useVacancyList({
    vacancyRole: searchTerm || undefined,
    location: searchLocation || undefined,
    technologyIds: searchTechnology || undefined,
  });

  const handleSliderChange = (newValues: number | readonly number[]) => {
    setSalaryRange(newValues as number[]);
  };

  const handleFilterChange =
    (setter: React.Dispatch<React.SetStateAction<string[]>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;
      setter((prev) =>
        checked ? [...prev, value] : prev.filter((item) => item !== value)
      );
    };

  const handleFilter = () => {
    fetchVacancies({
      vacancyRole: vacancyRole,
      technologyIds: selectedTechnologies.map(Number),
      vacancyTypes: vacancyTypes,
      wageMin: salaryRange[0],
      wageMax: salaryRange[1],
      location: location,
    });
  };

  return (
    <>
      <Conteiner>
        <Conteiner85>
          <BarraPesquisa
            vacancyRole={vacancyRole}
            setVacancyRole={setVacancyRole}
            location={location}
            setLocation={setLocation}
            handleFilter={handleFilter}
            tema={"dark"}
          />
        </Conteiner85>
      </Conteiner>
      <ConteinerWhithe>
        <Conteiner>
          <Conteiner85>
            <S.Titlediv>
              <S.ListH2>
                Vagas em <b>React</b>
              </S.ListH2>
              <S.SubH2>{vacanciesList?.totalCount} vagas encontradas</S.SubH2>
            </S.Titlediv>

            <S.DivLayout>
              <S.Filtrodiv>
                <div>
                  <S.TitleFiltros>
                    Filtre sua busca <span>Limpar</span>
                  </S.TitleFiltros>
                </div>
                <div>
                  <S.SubH3>Tecnologia</S.SubH3>

                  {technologies?.map((technology, index) => (
                    <S.Inputsdiv key={index}>
                      <S.CheckboxInput
                        type="checkbox"
                        value={technology.id}
                        checked={selectedTechnologies.includes(
                          technology.id.toString()
                        )}
                        onChange={handleFilterChange(setSelectedTechnologies)}
                      />
                      <S.CheckboxLabel htmlFor={technology.tecName}>
                        {technology.tecName}
                      </S.CheckboxLabel>
                    </S.Inputsdiv>
                  ))}

                  <S.Bluesp>Ver mais...</S.Bluesp>
                </div>

                <div>
                  <S.SubH3>Tipo de vaga</S.SubH3>

                  <S.Inputsdiv>
                    <S.CheckboxInput
                      type="checkbox"
                      value="Remoto"
                      onChange={handleFilterChange(setVacancyTypes)}
                    />
                    <S.CheckboxLabel htmlFor="">Remoto</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput
                      type="checkbox"
                      value="Presencial"
                      onChange={handleFilterChange(setVacancyTypes)}
                    />
                    <S.CheckboxLabel htmlFor="">Presencial</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput
                      type="checkbox"
                      value="Hibrido"
                      onChange={handleFilterChange(setVacancyTypes)}
                    />
                    <S.CheckboxLabel htmlFor="">Hibrido</S.CheckboxLabel>
                  </S.Inputsdiv>
                </div>

                <div>
                  <S.SubH3>Regime de trabalho</S.SubH3>

                  <S.Inputsdiv>
                    <S.CheckboxInput disabled type="checkbox" value="Clt" />
                    <S.CheckboxLabel htmlFor="">Clt</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput disabled type="checkbox" value="PJ" />
                    <S.CheckboxLabel htmlFor="">PJ</S.CheckboxLabel>
                  </S.Inputsdiv>
                </div>

                <div>
                  <S.SubH3>Tamanho da empresa</S.SubH3>

                  <S.Inputsdiv>
                    <S.CheckboxInput disabled type="checkbox" value="Pequena" />
                    <S.CheckboxLabel htmlFor="">Pequena</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput disabled type="checkbox" value="Média" />
                    <S.CheckboxLabel htmlFor="">Média</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput disabled type="checkbox" value="Grande" />
                    <S.CheckboxLabel htmlFor="">Grande</S.CheckboxLabel>
                  </S.Inputsdiv>
                </div>

                <div>
                  <S.SubH3>
                    Faixa salarial
                    <p>
                      <S.StyleSpan>
                        R$ {salaryRange[0]} - R$ {salaryRange[1]}
                      </S.StyleSpan>
                    </p>
                  </S.SubH3>

                  <S.SliderWrapper>
                    <S.StyledSlider
                      value={salaryRange}
                      min={0}
                      max={30000}
                      step={100}
                      onChange={handleSliderChange}
                      renderThumb={(props) => <S.StyledThumb {...props} />}
                      renderTrack={(props, state) => (
                        <S.StyledTrack {...props} index={state.index} />
                      )}
                    />
                  </S.SliderWrapper>
                </div>

                <div>
                  <S.SubH3>Nível de experiência</S.SubH3>

                  <S.Inputsdiv>
                    <S.CheckboxInput disabled type="checkbox" value="Júnior" />
                    <S.CheckboxLabel htmlFor="">Júnior</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput disabled type="checkbox" value="Pleno" />
                    <S.CheckboxLabel htmlFor="">Pleno</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput disabled type="checkbox" value="Sênior" />
                    <S.CheckboxLabel htmlFor="">Sênior</S.CheckboxLabel>
                  </S.Inputsdiv>
                </div>
                <CadastroBtn
                  width="100%"
                  children={"Filtrar"}
                  onClick={handleFilter}
                />
              </S.Filtrodiv>

              <S.Listagemdiv2>
                <S.Graficodiv>
                  <S.Imgdiv>
                    <S.Styleimg
                      style={user ? {} : { filter: "blur(10px)" }}
                      src="/static/images/Frame 47.png"
                      alt=""
                    />

                    {!user && (
                      <S.Btdiv>
                        <CadastroBtn
                          children={"Cadastre-se para visualizar"}
                          onClick={() => {
                            navigate("/cadastro");
                          }}
                        />
                      </S.Btdiv>
                    )}
                  </S.Imgdiv>

                  <S.Imgdiv>
                    <S.Styleimg
                      style={user ? {} : { filter: "blur(10px)" }}
                      src="/static/images/Frame 48.png"
                      alt=""
                    />

                    {!user && (
                      <S.Btdiv>
                        <CadastroBtn
                          children={"Cadastre-se para visualizar"}
                          onClick={() => {
                            navigate("/cadastro");
                          }}
                        />
                      </S.Btdiv>
                    )}
                  </S.Imgdiv>
                </S.Graficodiv>

                <div>
                  {vacanciesList?.vacancies.map((vacancy, index) => (
                    <Vagas
                      index={index}
                      key={index}
                      id={vacancy.id}
                      vacancyRole={vacancy.vacancyRole}
                      wage={vacancy.wage}
                      location={vacancy.location}
                      vacancyType={vacancy.vacancyType}
                      vacancyDescription={vacancy.vacancyDescription}
                      level={vacancy.level}
                      createdAt={vacancy.createdAt}
                      updatedAt={vacancy.updatedAt}
                      advertiser={vacancy.advertiser}
                      company={vacancy.company}
                      technologies={vacancy.technologies}
                    />
                  ))}
                </div>
              </S.Listagemdiv2>
            </S.DivLayout>
          </Conteiner85>
        </Conteiner>
      </ConteinerWhithe>
    </>
  );
};

export default PagListagem;
