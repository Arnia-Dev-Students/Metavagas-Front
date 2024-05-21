import { ArrowRigth, Filtro, LinkConteiner, LinkDiv, Linkp } from "./style";

interface LinksProps {
  filtro: string;
  onClick: () => void;
}

const LinksRapidos = ({ filtro, onClick }: LinksProps) => (
  <LinkConteiner onClick={onClick}>
    <LinkDiv>
      <Linkp>vagas</Linkp>
      <Filtro>{filtro}</Filtro>
    </LinkDiv>
    <ArrowRigth  />
  </LinkConteiner>
);

export default LinksRapidos;
