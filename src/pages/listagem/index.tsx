import { useState } from "react";
import BarraPesquisa from "../../components/BarraDePesquisa";
import { Conteiner } from "../../components/baselayot/style";
import CadastroBtn from "../../components/buttonAm";
import { Conteiner85 } from "../home/style";
import { ConteinerWhithe } from "../login/style";
import * as S from "./style";

const PagListagem = () => {
  
  const [values, setValues] = useState([0, 80000]);

  const handleSliderChange = (newValues: number[]) => {
    setValues(newValues);
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
              <S.SubH2>225 vagas encontradas</S.SubH2>
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
                    <input type="Checkbox" name="react" />
                    <label htmlFor="">React</label>
                  </S.Inputsdiv>
                  <S.Inputsdiv>
                    <input type="Checkbox" name="react" />
                    <label htmlFor="">React</label>
                  </S.Inputsdiv>
                  <S.Inputsdiv>
                    <input type="Checkbox" name="react" />
                    <label htmlFor="">React</label>
                  </S.Inputsdiv>
                  <S.Inputsdiv>
                    <input type="Checkbox" name="react" />
                    <label htmlFor="">React</label>
                  </S.Inputsdiv>
                  <S.Inputsdiv>
                    <input type="Checkbox" name="react" />
                    <label htmlFor="">React</label>
                  </S.Inputsdiv>
                  <S.Inputsdiv>
                    <input type="Checkbox" name="react" />
                    <label htmlFor="">React</label>
                  </S.Inputsdiv>
                </div>

                <div>
                  <S.SubH3>Tipo de vaga</S.SubH3>

                  <S.Inputsdiv>
                    <input type="checkbox" />
                    <label htmlFor="">Remoto</label>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <input type="checkbox" />
                    <label htmlFor="">Presencial</label>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <input type="checkbox" />
                    <label htmlFor="">Hibrido</label>
                  </S.Inputsdiv>
                </div>

                <div>
                  <S.SubH3>Regime de trabalho</S.SubH3>

                  <S.Inputsdiv>
                    <input type="checkbox" />
                    <label htmlFor="">Clt</label>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <input type="checkbox" />
                    <label htmlFor="">PJ</label>
                  </S.Inputsdiv>
                </div>

                <div>
                  <S.SubH3>Tamanho da empresa</S.SubH3>

                  <S.Inputsdiv>
                    <input type="checkbox" />
                    <label htmlFor="">Pequena</label>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <input type="checkbox" />
                    <label htmlFor="">Média</label>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <input type="checkbox" />
                    <label htmlFor="">Grande</label>
                  </S.Inputsdiv>
                </div>

                <div>
                  <S.SubH3>Faixa salarial</S.SubH3>
                  <span>
                    R$ {values[0]} - R$ {values[1]}
                  </span>
                  <S.SliderWrapper>
                    <S.StyledSlider
                      value={values}
                      min={0}
                      max={80000}
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
                  <h3>Nível de experiencia</h3>

                  <S.Inputsdiv>
                    <input type="checkbox" />
                    <label htmlFor="">Júnior</label>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    {" "}
                    <input type="checkbox" />
                    <label htmlFor="">Pleno</label>
                  </S.Inputsdiv>

                  <S.Inputsdiv>
                    <input type="checkbox" />
                    <label htmlFor="">Sênior</label>
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
                <div> fds</div>
              </S.Listagemdiv2>
            </S.DivLayout>
          </Conteiner85>
        </Conteiner>
      </ConteinerWhithe>
    </>
  );
};

export default PagListagem;
