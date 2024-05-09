import CadastroBtn from "../../components/buttonAm";

const Login = () => {
  return (
    
      <>
      <div>
        <p>Cadastre-se</p>
        <h1>Fique por dentro de todas as vagas</h1>
        <p>Com um único cadastro você consegue encontrar sua vaga </p>
        <p>Receba alertas sobre as vagas que você procura</p>

      <div>

      </div>

      <form action="">
        <p>Faça seu cadastro</p>

        <label htmlFor="email">Seu e-mail</label>
        <input type="text" name="email" placeholder="ana@gmail.com" />

        <label htmlFor="pasword">Senha</label>
        <input type="text" name="senha" placeholder="*************"/>

        <label htmlFor="passwordConfirmation">Confirmar senha</label>
        <input type="text" name="passwordConfirmation" placeholder="*************" />

        <CadastroBtn children={'Cadastrar'}></CadastroBtn>
      </form>

    </div>
    
    <div>

      </div>
      </>
    
    
  );
};

export default Login;
