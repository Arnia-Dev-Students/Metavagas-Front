import { Conteiner } from "../../components/baselayot/style";
import { useNavigate } from "react-router-dom";
import * as S from "../login/style";
import { ConteinerCadastro, EmailOut } from "./style";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FORM_MESSAGE } from "../../utils/enums/form-message";
import { Register } from "../../services/auth";
import { Userplus } from "./style";
import { useState } from "react";

const Cadastro = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [cadastroError, setcadastroError] = useState(false);
  const navigate = useNavigate();

  const RegisterFormSchema = z
    .object({
      name: z.string().min(4, FORM_MESSAGE.NAME),
      email: z
        .string({ message: FORM_MESSAGE.EMAIL })
        .min(6, FORM_MESSAGE.EMAIL)
        .email(FORM_MESSAGE.EMAIL)
        .toLowerCase(),
      password: z.string().min(8, FORM_MESSAGE.PASSWORD),
      confirmPassword: z.string().min(8, FORM_MESSAGE.PASSWORD),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: FORM_MESSAGE.CONFIRM_PASSWORD,
      path: ["confirmPassword"],
    });

  type RegisterFormData = z.infer<typeof RegisterFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const handleRegister = async (data: RegisterFormData) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const result = await Register(user);

      if (result.success) {
        navigate("/login");
      } else {
        setcadastroError(true);
      }
    } catch (error) {
      setcadastroError(true);
    }
  };

  return (
    <>
      <S.Loginform onSubmit={handleSubmit(handleRegister)}>
        <S.Formh3>Faça seu cadastro</S.Formh3>

        <S.DivForm>
          <S.Inputlabel htmlFor="name">Seu nome:</S.Inputlabel>
          <S.Inputlogin
            {...register("name")}
            type="text"
            placeholder="jose alves"
          />
          {errors.name && <S.ErrorForm>{errors.name.message}</S.ErrorForm>}
        </S.DivForm>

        <S.DivForm>
          <S.Inputlabel htmlFor="email">Seu e-mail:</S.Inputlabel>
          <S.Inputlogin
            {...register("email")}
            type="text"
            placeholder="ana@gmail.com"
          />
          {errors.email && <S.ErrorForm>{errors.email.message}</S.ErrorForm>}
        </S.DivForm>

        <S.DivForm>
          <S.Inputlabel htmlFor="pasword">Senha:</S.Inputlabel>
          <S.Inputlogin
            {...register("password")}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="*************"
          />
          {isPasswordVisible ? (
            <S.EyeOff onClick={togglePasswordVisibility} />
          ) : (
            <S.EyeOut onClick={togglePasswordVisibility} />
          )}
          {errors.password && (
            <S.ErrorForm>{errors.password.message}</S.ErrorForm>
          )}
        </S.DivForm>

        <S.DivForm>
          <S.Inputlabel htmlFor="confirmPassword">
            Confirmar senha:
          </S.Inputlabel>
          <S.Inputlogin
            {...register("confirmPassword")}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="*************"
          />

          {isPasswordVisible ? (
            <S.EyeOff onClick={togglePasswordVisibility} />
          ) : (
            <S.EyeOut onClick={togglePasswordVisibility} />
          )}

          {errors.confirmPassword && (
            <S.ErrorForm>{errors.confirmPassword.message}</S.ErrorForm>
          )}
        </S.DivForm>

        <S.DivForm>
          <S.LoginBtn>Cadastrar</S.LoginBtn>
          {cadastroError && (
            <S.ErrorForm>
              Falha ao realizar o cadastro tente novamente
            </S.ErrorForm>
          )}
        </S.DivForm>

        <S.RodapeForm>
          Ja é cadastrado?{" "}
          <S.Astyled
            onClick={() => {
              navigate("/login");
            }}
          >
            Faça o login
          </S.Astyled>
        </S.RodapeForm>
      </S.Loginform>
      <Conteiner>
        <ConteinerCadastro>
          <S.Textdiv>
            <S.Plogin>CADASTRE-SE</S.Plogin>
            <S.Loginh1>Fique por dentro de todas as vagas</S.Loginh1>
            <S.Ptext>
              <Userplus />
              <p>Com um único cadastro você consegue encontrar sua vaga </p>
            </S.Ptext>
            <S.Ptext>
              <EmailOut />
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
