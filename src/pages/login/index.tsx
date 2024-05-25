import { Conteiner } from "../../components/baselayot/style";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as S from "./style";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Login, Me } from "../../services/auth";
import { FORM_MESSAGE } from "../../enums/formMensage";
import { EmailOut, Userplus } from "../cadastro/style";
import { useUserContext } from "../../hooks/user/use-user-context";

export const LoginPag = () => {
  const navigate = useNavigate();
  const { updateUser } = useUserContext()

  const loginFormSchema = z.object({
    email: z
      .string({ message: FORM_MESSAGE.EMAIL })
      .min(6, FORM_MESSAGE.EMAIL)
      .email(FORM_MESSAGE.EMAIL)
      .toLowerCase(),
    password: z.string().min(8, FORM_MESSAGE.PASSWORD),
  });

  type LoginFormData = z.infer<typeof loginFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleLogin = async (data: LoginFormData) => {
    const { ...rest } = data;
    const { success, message, token} = await Login(rest);

    if (!success || !token) {
      //definir como vai mostrar a falha de login
      console.log(message)
      return
    }

    localStorage.setItem("metavagas-token", token);

    const { user } = await Me({ token });

    if(user) {
      updateUser(user, token)
    }

    navigate("/");
  };


  return (
    <>
      <S.Loginform onSubmit={handleSubmit(handleLogin)}>
        <S.Formh3>Faça seu login</S.Formh3>

        <S.DivForm>
          <S.Inputlabel htmlFor="email">Seu e-mail</S.Inputlabel>
          <S.Inputlogin
            type="text"
            placeholder="ana@gmail.com"
            {...register("email")}
          />

          {errors.email && <S.ErrorForm>{errors.email.message}</S.ErrorForm>}
        </S.DivForm>

        <S.DivForm>
          <S.Inputlabel htmlFor="senha">Senha</S.Inputlabel>
          <S.Inputlogin
            {...register("password")}
            type="password"
            placeholder="*************"
          />

          {errors.password && (
            <S.ErrorForm>{errors.password.message}</S.ErrorForm>
          )}
        </S.DivForm>

        <S.DivForm>
          <S.LoginBtn type="submit">Entrar</S.LoginBtn>
        </S.DivForm>

        <S.RodapeForm>
          Não é cadastrado?{" "}
          <S.Astyled
            onClick={() => {
              navigate("/cadastro");
            }}
          >
            Cadastre-se gratuitamente
          </S.Astyled>
        </S.RodapeForm>
      </S.Loginform>
      <Conteiner>
        <S.ConteinerLogin>
          <S.Textdiv>
            <S.Plogin>FAÇA SEU LOGIN</S.Plogin>
            <S.Loginh1>
              Fique por dentro <p>de todas as vagas</p>
            </S.Loginh1>
            <S.Ptext>
              <Userplus/>
              <p>Com um único cadastro você consegue encontrar sua vaga </p>
            </S.Ptext>
            <S.Ptext>
              <EmailOut/>
              <p>Receba alertas sobre as vagas que você procura</p>
            </S.Ptext>
          </S.Textdiv>
        </S.ConteinerLogin>
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

export default LoginPag;
