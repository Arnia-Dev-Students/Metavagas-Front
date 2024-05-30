import { Company } from "../../models/company";
import { Technology } from "../../models/technology";
import { User } from "../../models/user";
import ButtonTec from "../buttonTecnologias";
import * as S from "./style";

interface VagaProp {
  id: number;
  vacancyRole: string;
  wage: number;
  location: string;
  vacancyType: string;
  vacancyDescription: string;
  level: string;
  createdAt: Date;
  updatedAt: Date;
  advertiser: User;
  company: Company;
  technologies: Technology[];
}

const Vagas = (vaga: VagaProp) => {
  console.log(vaga)
  return (
    <S.Cardvaga /*style={{ border: vaga.isRecent ? '1px #6950A1' : '1px #ECF1F4' }}*/
    >
      <S.Superiordiv>
        <div>
          <S.NovaBtn>Nova</S.NovaBtn>{" "}
        </div>
        <S.Datediv>
          <S.Bold></S.Bold>• {}
        </S.Datediv>
      </S.Superiordiv>
      <S.TitleVaga>Desenvolvedor de Sistemas Pleno</S.TitleVaga>
      <S.Subspan>Empresa: iZap Softworks</S.Subspan>
      <S.Buttondiv>
        <ButtonTec tec={"php"} />
        <ButtonTec tec={"Phynto"} />
        <ButtonTec tec={"JavaScript"} />
      </S.Buttondiv>
      <S.Detailsdiv>
        <S.Detailspan>
          <S.Dollar /> Faixa salarial: <b>R$ 4.000,00</b>
        </S.Detailspan>
        <S.Detailspan>
          <S.Local/> Localização: <b>Belo Horizonte</b>
        </S.Detailspan>
        <S.Detailspan>
          <S.Monitor1 />Tipo de vaga: <b>Home officeHome office</b>
        </S.Detailspan>
      </S.Detailsdiv>
      <S.Description>
        Oferecemos um ambiente em que todos são protagonistas e agentes de
        transformação. Temos um excelente clima organizacional com pessoas
        engajadas em entregar os melhores resultados, assim como grandes
        oportunidades...
      </S.Description>
    </S.Cardvaga>
  );
};

export default Vagas;
