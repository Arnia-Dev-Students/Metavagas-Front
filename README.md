# Metavagas-Front
Este é um projeto de Front para um sistema de oferta/procura de vagas, desenvolvido em javascript/typescript com a biblioteca React.

## Estrutura do Projeto
A estrutura de pastas do projeto é organizada da seguinte forma:

```bash
project/
│
├── src/
│   ├── @types/
│   ├── assets/
│   ├── components/
│   ├── config/
│   ├── context/
│   ├── hooks/
│   ├── models/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   └── utils/
```

**@types**: Ficam os tipos e interfaces globais, exceto para o caso dos models.  
**assets**: Ficam alguns recursos visuais como imagens, estilos globais e icones.  
**components**: Componentes em geral.  
**config**: Inicialização do objeto ENV, que vai recuperar as informações das variáveis de ambiente.  
**context**: Contexto, mais precisamente o User Context.  
**hooks**: Contém os custom hooks.  
**models**: Possui as interfaces que representam os modelos.  
**pages**: Possui as paginas.  
**routes**: Possui a estruturação do Router.  
**services**: Implementa a lógica de comunicação com a api.  
**utils**: Contém utilidades como constants e enums.  

## Principais Dependências - v1

**axios:** Biblioteca para requisição com api.  
**react-dotenv:** Biblioteca para manipulação de variáveis de ambiente.  
**react-hook-form:** Biblioteca para criação de formulários com gerenciamento de estados.  
**react-router-dom:** Biblioteca para estruturar rotas, navegação e manipulação de parametros.  
**react-slider:** Biblioteca com componente slider.  
**styled-components:** Biblioteca para estilização.  
**styled-icons:** Biblioteca de icones compatível com styled components.  
**zod:** Biblioteca para validação de campos.  
**hookform/resolvers:** Biblioteca para integração do zod com o react hook form.  

## Instruções de Uso Online
O deploy do projeto foi realizado no Vercel, disponível pelo link: https://metavagas-front.vercel.app

## Instruções de Instalação e Uso Local
Para executar o projeto localmente, siga estas etapas:

Clone o repositório para o seu ambiente local.
```bash
git clone https://github.com/Arnia-Dev-Students/Metavagas-API.git
```
Instale as dependências utilizando o comando npm install.
```bash
npm install
```
Crie um arquivo .env na raiz do projeto para as variáveis de ambiente, como a URL da api seguindo o exemplo em .env.example.

Execute o comando npm start para iniciar o servidor.
```bash
npm start
```
O Front estará disponível em http://localhost:5173.
Acesse o Front diretamente pelo link. Lembrando que deve configurar nas variáveis de ambiente o link da api, podendo ser local ou pelo Railway.

Parabéns a todos os professores, a monitoria, a Arnia e todos os alunos que se dedicaram para concluir os projetos!



<center>
  <div>Ass:</div>
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHJmZ29oN3VueHZtemY1aWkzZGQxNXF0ZDVhdmxtYXNiYnJtOHpydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/29pTMa2vClJhYbxFk7/giphy.gif" alt="Tartarugas Ninja" style="border-radius: 50%; width: 200px">
</center>
