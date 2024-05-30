import { useState } from "react";
import BarraPesquisa from "../../components/BarraDePesquisa";
import { Conteiner } from "../../components/baselayot/style";
import CadastroBtn from "../../components/buttonAm";
import { Conteiner85 } from "../home/style";
import { ConteinerWhithe } from "../login/style";
import * as S from "./style";
import { useVacancyList } from "../../hooks/vacancy/use-vacancy-list";
import { useGetTechnologies } from "../../hooks/technology/use-get-technologies";
import Vagas from "../../components/Vagas";

const PagListagem = () => {
  const { vacanciesList } = useVacancyList()
  const { technologies } = useGetTechnologies()

  console.log("Vacancies: ", vacanciesList)
  console.log("Technologies", technologies)
  
  const [values, setValues] = useState([0, 80000]);

  const handleSliderChange = (newValues: number | readonly number[]) => {
    setValues(newValues as number[]);
  };

  return (
    <>
      <Conteiner>
        <Conteiner85>
          <BarraPesquisa tema={"dark"} />
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

                  <S.Inputsdiv>
                    <S.CheckboxInput type="checkbox" name="react" id="react" />
                    <S.CheckboxLabel htmlFor="react">React</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput type="Checkbox" name="react" />
                    <S.CheckboxLabel htmlFor="">PHP</S.CheckboxLabel>
                  </S.Inputsdiv>
                  <S.Inputsdiv>
                    <S.CheckboxInput type="Checkbox" name="react" />
                    <S.CheckboxLabel htmlFor="">Java</S.CheckboxLabel>
                  </S.Inputsdiv>
                  <S.Inputsdiv>
                    <S.CheckboxInput type="Checkbox" name="react" />
                    <S.CheckboxLabel htmlFor="">Phyton</S.CheckboxLabel>
                  </S.Inputsdiv>
                  <S.Inputsdiv>
                    <S.CheckboxInput type="Checkbox" name="react" />
                    <S.CheckboxLabel htmlFor="">.Net</S.CheckboxLabel>
                  </S.Inputsdiv>
                  <S.Inputsdiv>
                    <S.CheckboxInput type="Checkbox" name="react" />
                    <S.CheckboxLabel htmlFor="">CSS</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput type="Checkbox" name="react" />
                    <S.CheckboxLabel htmlFor="">HTML</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput type="Checkbox" name="react" />
                    <S.CheckboxLabel htmlFor="">Ruby</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Bluesp>Ver mais...</S.Bluesp>
                </div>

                <div>
                  <S.SubH3>Tipo de vaga</S.SubH3>

                  <S.Inputsdiv>
                    <S.CheckboxInput type="checkbox" />
                    <S.CheckboxLabel htmlFor="">Remoto</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput type="checkbox" />
                    <S.CheckboxLabel htmlFor="">Presencial</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput type="checkbox" />
                    <S.CheckboxLabel htmlFor="">Hibrido</S.CheckboxLabel>
                  </S.Inputsdiv>
                </div>

                <div>
                  <S.SubH3>Regime de trabalho</S.SubH3>

                  <S.Inputsdiv>
                    <S.CheckboxInput type="checkbox" />
                    <S.CheckboxLabel htmlFor="">Clt</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput type="checkbox" />
                    <S.CheckboxLabel htmlFor="">PJ</S.CheckboxLabel>
                  </S.Inputsdiv>
                </div>

                <div>
                  <S.SubH3>Tamanho da empresa</S.SubH3>

                  <S.Inputsdiv>
                    <S.CheckboxInput type="checkbox" />
                    <S.CheckboxLabel htmlFor="">Pequena</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput type="checkbox" />
                    <S.CheckboxLabel htmlFor="">Média</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput type="checkbox" />
                    <S.CheckboxLabel htmlFor="">Grande</S.CheckboxLabel>
                  </S.Inputsdiv>
                </div>

                <div>
                  <S.SubH3>
                    Faixa salarial
                    <p>
                      <S.StyleSpan>
                        R$ {values[0]} - R$ {values[1]}
                      </S.StyleSpan>
                    </p>
                  </S.SubH3>

                  <S.SliderWrapper>
                    <S.StyledSlider
                      value={values}
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
                  <S.SubH3>Nível de experiencia</S.SubH3>

                  <S.Inputsdiv>
                    <S.CheckboxInput type="checkbox" />
                    <S.CheckboxLabel htmlFor="">Júnior</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    {" "}
                    <S.CheckboxInput type="checkbox" />
                    <S.CheckboxLabel htmlFor="">Pleno</S.CheckboxLabel>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <S.CheckboxInput type="checkbox" />
                    <S.CheckboxLabel htmlFor="">Sênior</S.CheckboxLabel>
                  </S.Inputsdiv>
                </div>
                <CadastroBtn
                  width="100%"
                  children={"Filtrar"}
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </S.Filtrodiv>

              <S.Listagemdiv2>
                <S.Graficodiv>
                  <S.Styleimg src="/src/assets/imgs/Frame 47.png" alt="" />
                  <S.Styleimg src="/src/assets/imgs/Frame 48.png" alt="" />
                </S.Graficodiv>
                <div>
                  {vacanciesList?.vacancies.map((vacancy, index) => (
                    <Vagas index={index} key={index} id={vacancy.id} vacancyRole={vacancy.vacancyRole} wage={vacancy.wage} location={vacancy.location} vacancyType={vacancy.vacancyType} vacancyDescription={vacancy.vacancyDescription} level={vacancy.level} createdAt={vacancy.createdAt} updatedAt={vacancy.updatedAt} advertiser={vacancy.advertiser} company={vacancy.company} technologies={vacancy.technologies} />
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
