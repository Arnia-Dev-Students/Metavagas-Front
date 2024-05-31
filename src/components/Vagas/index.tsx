import { formatDistanceToNow } from "date-fns";
import { Company } from "../../models/company";
import { Technology } from "../../models/technology";
import { User } from "../../models/user";
import ButtonTec from "../buttonTecnologias";
import * as S from "./style";
import { useUserContext } from "../../hooks/user/use-user-context";

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
  index: number;
}

const Vagas = (vaga: VagaProp) => {

  const { user } = useUserContext()

  return (
    <S.Cardvaga
      style={{
        border: vaga.index === 0 ? "1px solid #6950A1" : "1px solid #ECF1F4",
      }}
    >
      <S.Superiordiv>
        <div>{vaga.index === 0 && <S.NovaBtn>Nova</S.NovaBtn>} </div>
        <S.Datediv>
          <S.Bold></S.Bold>• {formatDistanceToNow(vaga.createdAt)}
        </S.Datediv>
      </S.Superiordiv>
      <S.TitleVaga>{vaga.vacancyRole}</S.TitleVaga>
      <S.Subspan style={!user ? { filter: 'blur(5px)' } : {}} >Empresa: {vaga.company.name}</S.Subspan>
      <S.Buttondiv>
        {vaga.technologies.map((technology, index) => (
          <ButtonTec key={index} tec={technology.tecName} />
        ))}
      </S.Buttondiv>
      <S.Detailsdiv>
        <S.Detailspan style={!user ? { filter: 'blur(5px)' } : {}}>
          <S.Dollar />
          Faixa salarial: <b>R$ {vaga.wage}</b>
        </S.Detailspan>
        <S.Detailspan style={!user ? { filter: 'blur(5px)' } : {}}>
          <S.Local />
          Localização: <b>{vaga.location}</b>
        </S.Detailspan>
        <S.Detailspan style={!user ? { filter: 'blur(5px)' } : {}}>
          <S.Monitor1 />
          Tipo de vaga: <b>{vaga.vacancyType}</b>
        </S.Detailspan>
      </S.Detailsdiv>
      <S.Description>{vaga.vacancyDescription}</S.Description>
    </S.Cardvaga>
  );
};

export default Vagas;
