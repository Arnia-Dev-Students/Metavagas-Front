import { Conteiner } from "../../components/baselayot/style";
import { useNavigate } from "react-router-dom";
import {
  Loginform,
  Formh3,
  DivForm,
  Inputlabel,
  Inputlogin,
  LoginBtn,
  RodapeForm,
  Astyled,
  Textdiv,
  Plogin,
  Loginh1,
  Ptext,
  ConteinerWhithe,
  DicasCadastro,
  TitleCard,
  CardDiv,
  SubMedium,
  SubMedium2,
  Pcard,
} from "../login/style";
import { ConteinerCadastro } from "./style";

const Cadastro = () => {
  const navigation = useNavigate();
  return (
    <>
      <Loginform action="">
        <Formh3>Faça seu cadastro</Formh3>

        <DivForm>
          <Inputlabel htmlFor="email">Seu e-mail</Inputlabel>
          <Inputlogin type="text" name="email" placeholder="ana@gmail.com" />
        </DivForm>

        <DivForm>
          <Inputlabel htmlFor="pasword">Senha</Inputlabel>
          <Inputlogin
            name="senha"
            type="password"
            placeholder="*************"
          />
        </DivForm>

        <DivForm>
          <Inputlabel htmlFor="confirmaPasword">Confirmar senha</Inputlabel>
          <Inputlogin
            name="senha"
            type="password"
            placeholder="*************"
          />
        </DivForm>

        <DivForm>
          <LoginBtn>Cadastrar</LoginBtn>
        </DivForm>

        <RodapeForm>
          Ja é cadastrado?{" "}
          <Astyled
            onClick={() => {
              navigation("/login");
            }}
          >
            Faça o login
          </Astyled>
        </RodapeForm>
      </Loginform>
      <Conteiner>
        <ConteinerCadastro>
          <Textdiv>
            <Plogin>FAÇA SEU LOGIN</Plogin>
            <Loginh1>
              Fique por dentro <p>de todas as vagas</p>
            </Loginh1>
            <Ptext>
              <p>Com um único cadastro você consegue encontrar sua vaga </p>
            </Ptext>
            <Ptext>
              <p>Receba alertas sobre as vagas que você procura</p>
            </Ptext>
          </Textdiv>
        </ConteinerCadastro>
      </Conteiner>
      <ConteinerWhithe>
        <Conteiner>
          <DicasCadastro>
            <TitleCard>Cadastrar na Meta Vagas é simples 👉</TitleCard>
            <CardDiv>
              <SubMedium>01</SubMedium>
              <SubMedium2>Crie sua conta</SubMedium2>
              <Pcard>
                Lorem ipsum dolor sit amet consectetur. Nec nunc scelerisque
                nulla mauris.
              </Pcard>
            </CardDiv>
            <CardDiv>
              <SubMedium>02</SubMedium>
              <SubMedium2>Busque sua vaga</SubMedium2>
              <Pcard>
                Lorem ipsum dolor sit amet consectetur. Nec nunc scelerisque
                nulla mauris.
              </Pcard>
            </CardDiv>
            <CardDiv>
              <SubMedium>03</SubMedium>
              <SubMedium2>Receba sugestões</SubMedium2>
              <Pcard>
                Lorem ipsum dolor sit amet consectetur. Nec nunc scelerisque
                nulla mauris.
              </Pcard>
            </CardDiv>
          </DicasCadastro>
        </Conteiner>
      </ConteinerWhithe>
    </>
  );
};

export default Cadastro;
