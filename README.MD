<h1 id="inicio" align="center">LetmeAsk</h1 >
<div align="center">
<img src=https://i.imgur.com/VidsSVT.png" >
<h3>Olá esse é o letmeask, Crie suas salas de Perguntas e respostas 😀😁 </h3>
</div>

# Como funciona?

        O projeto serve para a criação de salas virtuais onde poderemos fazer perguntas em tempo real e a pessoa responsável pode marcar a pergunta como respondida, marcar a pergunta como em destaque assim como deletar alguma pergunta, os usuarios comuns além de perguntar podem também curtir perguntas já feitas para que seja o responsavel consiga identificar qual pergunta mais interessa o publico.

<a href="#let">Inicio |</a> <a href="#ferramentas">Ferramentas|</a> <a href="#prereq">Pré requisitos|</a> <a href="#printsl">Prints tema normal |</a>
<a href="#printsd">Prints tema dark</a>

<div id="ferramentas"> 
   <ul> 
        <li> React</li>
        <li> Typescript </li>
        <li> Styled-components</li>
        <li> Firebase </li>
        <li> Eslint </li>
        <li> Prettier </li>
   </ul>
</div>

# pre-requisitos

<div id="prereq"/>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

e também precisamos criar um projeto no [Firebase](https://firebase.google.com/) .
Então voce deve ir para realtime database e dentro das configurações deve por igual ao arquivo disponivel [aqui](https://github.com/carlos0406/nlw6-react/blob/main/database.rules.json)

Além disso você deve ligar o modo de autenticação com o google na aba de authetication do firebase e a ultima ação dentro do firebase é ir até as configurações do projeto criar um arquivo.env.local na raiz do arquivo e colocar os seguintes variaveis baseados nas suas configurações de projeto do firebase, as inforamações são

REACT_APP_API_KEY,

REACT_APP_AUTH_DOMAIN,

REACT_APP_DATABASE_URL,

REACT_APP_PROJECT_ID,

REACT_APP_STORAGE_BUCKET ,

REACT_APP_MESSAGEGING_SENDER_ID ,

REACT_APP_APP_ID

o prefixo REACT_APP É obrigatorio em todas as variaveis de ambiente desse projeto, o que vem depois desse prefixo é o valor que você encontra nas configurações do firebase

### Rodando o projeto

```bash
# Clone este repositório
$ git clone https://github.com/carlos0406/nlw6-react nlw6

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw6

# Vá para a pasta server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3000 - caso nao abra automaticamente acesse <http://localhost:3000>
```

## Agora teremos alguns prints dos projeto

# Tema claro

<div id="printsl"/>

![Imgur](https://i.imgur.com/609C7xa.png)
![Imgur](https://i.imgur.com/Uzw9IxN.png)
![Imgur](https://i.imgur.com/oazTsft.png)
![Imgur](https://i.imgur.com/j7jZh9N.png)
![Imgur](https://i.imgur.com/YxuZQjj.png)
![Imgur](https://i.imgur.com/00tIIhQ.png)

# Tema dark

<div id="printsd"/>

![Imgur](https://i.imgur.com/uxJH7lF.png)
![Imgur](https://i.imgur.com/8fzTrAd.png)
![Imgur](https://i.imgur.com/wyIIVdF.png)
![Imgur](https://i.imgur.com/1BG2N8r.png)
![Imgur](https://i.imgur.com/Vg5Uyb0.png)
![Imgur](https://i.imgur.com/zo8EP1V.png)
