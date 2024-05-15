import { Conteiner } from "../../components/baselayot/style";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as S from "./style";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Login } from "../../services/auth";
import { FORM_MESSAGE } from "../../enums/formMensage";
export const LoginPag = () => {
  const navigate = useNavigate();

  type LoginFormData = z.infer<typeof loginFormSchema>;

  const loginFormSchema = z.object({
    email: z
      .string({ message: FORM_MESSAGE.EMAIL })
      .min(6, FORM_MESSAGE.EMAIL)
      .email(FORM_MESSAGE.EMAIL)
      .toLowerCase(),
    password: z.string().min(8, FORM_MESSAGE.PASSWORD),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleLogin = async (data: LoginFormData) => {
    const { ...rest } = data;
    console.log("teste");
    const result = await Login(rest);
    console.log(result);
    navigate("home");
  };
  return (
    <>
      <S.Loginform onSubmit={handleSubmit(handleLogin)}>
        <S.Formh3>Faça seu login</S.Formh3>

        <S.DivForm>
          <S.Inputlabel htmlFor="email" {...register("email")}>
            Seu e-mail
          </S.Inputlabel>
          <S.Inputlogin type="text" name="email" placeholder="ana@gmail.com" />

          {errors.email && <p>{errors.email.message}</p>}

          {<div>{errors?.email?.message}</div> }
          
        </S.DivForm>

        <S.DivForm>
          <S.Inputlabel htmlFor="senha">Senha</S.Inputlabel>
          <S.Inputlogin
            {...register("password")}
            name="senha"
            type="password"
            placeholder="*************"
          />
          {errors.password && <p>{errors.password.message}</p>}
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
              <p>Com um único cadastro você consegue encontrar sua vaga </p>
            </S.Ptext>
            <S.Ptext>
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
