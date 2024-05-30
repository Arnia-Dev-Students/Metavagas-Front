import { formatDistanceToNow } from "date-fns";
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
  index: number
}

const Vagas = (vaga: VagaProp) => {
  return (
    <S.Cardvaga /*style={{ border: vaga.isRecent ? '1px #6950A1' : '1px #ECF1F4' }}*/
    >
      <S.Superiordiv>
        <div>
          {vaga.index === 0 && <S.NovaBtn>Nova</S.NovaBtn>}{" "}
        </div>
        <S.Datediv>
          <S.Bold></S.Bold>• {formatDistanceToNow(vaga.createdAt)}
        </S.Datediv>
      </S.Superiordiv>
      <S.TitleVaga>{vaga.vacancyRole}</S.TitleVaga>
      <S.Subspan>Empresa: {vaga.company.name}</S.Subspan>
      <S.Buttondiv>
        {vaga.technologies.map((technology, index) => (
          <ButtonTec key={index} tec={technology.tecName} />
        ))}
      </S.Buttondiv>
      <S.Detailsdiv>
        <S.Detailspan>
          Faixa salarial: <b>R$ {vaga.wage}</b>
        </S.Detailspan>
        <S.Detailspan>
          Localização: <b>{vaga.location}</b>
        </S.Detailspan>
        <S.Detailspan>
          Tipo de vaga: <b>{vaga.vacancyType}</b>
        </S.Detailspan>
      </S.Detailsdiv>
      <S.Description>
        {vaga.vacancyDescription}
      </S.Description>
    </S.Cardvaga>
  );
};

export default Vagas;
