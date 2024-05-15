import { Conteiner } from "../../components/baselayot/style";
import { useNavigate } from "react-router-dom";
import * as S from "../login/style";
import { ConteinerCadastro } from "./style";

const Cadastro = () => {
  const navigation = useNavigate();
  return (
    <>
      <S.Loginform action="">
        <S.Formh3>Faça seu cadastro</S.Formh3>

        <S.DivForm>
          <S.Inputlabel htmlFor="email">Seu e-mail</S.Inputlabel>
          <S.Inputlogin type="text" name="email" placeholder="ana@gmail.com" />
        </S.DivForm>

        <S.DivForm>
          <S.Inputlabel htmlFor="pasword">Senha</S.Inputlabel>
          <S.Inputlogin
            name="senha"
            type="password"
            placeholder="*************"
          />
        </S.DivForm>

        <S.DivForm>
          <S.Inputlabel htmlFor="confirmaPasword">Confirmar senha</S.Inputlabel>
          <S.Inputlogin
            name="senha"
            type="password"
            placeholder="*************"
          />
        </S.DivForm>

        <S.DivForm>
          <S.LoginBtn>Cadastrar</S.LoginBtn>
        </S.DivForm>

        <S.RodapeForm>
          Ja é cadastrado?{" "}
          <S.Astyled
            onClick={() => {
              navigation("/login");
            }}
          >
            Faça o login
          </S.Astyled>
        </S.RodapeForm>
      </S.Loginform>
      <Conteiner>
        <ConteinerCadastro>
          <S.Textdiv>
            <S.Plogin>FAÇA SEU LOGIN</S.Plogin>
            <S.Loginh1>
              Fique por dentro <p>de todas as vagas</p>
            </S.Loginh1>
            <S.Ptext>
              <p>Com um único cadastro você consegue encontrar sua vaga </p>
            </S.Ptext>
            <S.Ptext>
              <p>Receba alertas sobre as vagas que você procura</p>
            </S.Ptext>
          </S.Textdiv>
        </ConteinerCadastro>
      </Conteiner>
      <S.ConteinerWhithe>
        <Conteiner>
          <S.DicasCadastro>
            <S.TitleCard>Cadastrar na Meta Vagas é simples 👉</S.TitleCard>
            <S.CardDiv>
              <S.SubMedium>01</S.SubMedium>
              <S.SubMedium2>Crie sua conta</S.SubMedium2>
              <S.Pcard>
                Lorem ipsum dolor sit amet consectetur. Nec nunc scelerisque
                nulla mauris.
              </S.Pcard>
            </S.CardDiv>
            <S.CardDiv>
              <S.SubMedium>02</S.SubMedium>
              <S.SubMedium2>Busque sua vaga</S.SubMedium2>
              <S.Pcard>
                Lorem ipsum dolor sit amet consectetur. Nec nunc scelerisque
                nulla mauris.
              </S.Pcard>
            </S.CardDiv>
            <S.CardDiv>
              <S.SubMedium>03</S.SubMedium>
              <S.SubMedium2>Receba sugestões</S.SubMedium2>
              <S.Pcard>
                Lorem ipsum dolor sit amet consectetur. Nec nunc scelerisque
                nulla mauris.
              </S.Pcard>
            </S.CardDiv>
          </S.DicasCadastro>
        </Conteiner>
      </S.ConteinerWhithe>
    </>
  );
};

export default Cadastro;
