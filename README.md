#API REST
##Desenvolvedor
João Paulo Souza Silva

##Descrição e Objetivo do projeto
Desenvolvimento de uma API REST com Banco de Dados para gerenciar informações completas sobre filmes. O objetivo principal é aplicar e consolidar os conhecimentos adquiridos em aulas sobre o desenvolvimento de APIs, abrangendo desde a criação das rotas e modelos até a integração com um banco de dados para armazenamento dos dados.

##Tecnologias utilizadas
- Node.js
- Express.js
- MongoDB Atlas Database
- Mongoose
- Json Web Token
- Insomnia
- Render
- Visual Studio Code

##Documentação

## Introdução
O projeto consiste em uma API para o gerenciamento de dados de filmes, incluindo título, descrição, link para capa e link para trailer. A API oferece operações GET (para obtenção de dados do servidor), PUT (para atualização dos dados existentes no servidor, sendo idempotente), DELETE (para remoção de dados do servidor, também idempotente) e POST (para envio de dados a serem processados, não idempotente). Essas operações permitem o gerenciamento completo das informações dos filmes. 

Além disso, a API utiliza o JWT (JSON Web Token), um padrão da Internet para a criação de tokens com assinatura opcional e/ou criptografia, cujo payload contém o JSON que afirma um conjunto de declarações. Esse token é utilizado para autenticação e autorização nas requisições à API, garantindo a segurança e integridade dos dados transmitidos.

###Instalação
Para instalação do projeto é necessário dar os seguintes comandos: 

```sh
npm install
```
Para instalar o gerenciador de arquivos NPM.

```sh
npm start
```
Para iniciar o servidor.

Deve aparecer a seguinte mensagem no conselo: **Servidor Rodando**

Para testar a API, é necessário um framework para desenvolvimento/teste de API Clients. Neste projeto, foi utilizado o Insomnia. O Insomnia permite enviar requisições HTTP para a API, testando as diferentes rotas e métodos disponíveis, além de facilitar a visualização e o gerenciamento dos resultados.

### Link e Url da API

Link:  <https://api-rest-u612.onrender.com/>
Url: `https://api-rest-u612.onrender.com/`

###End-Points

**[GET]**/list

**DESCRIÇÃO:** Lista todos os campos da tabela. 

**RESPOSTA:** 
```json
[
	{
		"_id": "65cfc0df139e7a8804e0c3de",
		"title": "The Fast and the Furious: Tokyo Drift",
		"description": "O filme segue Sean Boswell, um jovem de dezessete anos entusiasta das corridas de rua ilegais, que é levado para o Japão para morar com seu pai em Tóquio, onde descobre o submundo das corridas de drift japonesas. É estrelado por Lucas Black, no papel de Sean, e pelo rapper Bow Wow.",
		"image_url": "https://upload.wikimedia.org/wikipedia/pt/f/f1/TFF-TokyoDrift-p%C3%B4ster.jpg",
		"Trailer_url": "https://youtu.be/C6v6U8g2fYU?si=GNlJ2rVUM3mbjkrs&t=25",
		"__v": 0
	},
	{
		"_id": "65d0f7e15b45db1eff00b15b",
		"title": "Velozes & Furiosos",
		"description": "Brian O'Conner é um policial que se infiltra no submundo dos rachas de rua para investigar uma série de furtos. Enquanto tenta ganhar o respeito e a confiança do líder Dom Toretto, ele corre o risco de ser desmascarado.",
		"image_url": "https://media.fstatic.com/92SI7fIPY1HKSR2n-LEL4YGF-e0=/322x478/smart/filters:format(webp)/media/movies/covers/2012/01/65ae82df53fed964096d7065487fb00f.jpg",
		"Trailer_url": "https://youtu.be/4bEMXlQXiS0?si=bS6emG99KCXpr2WH",
		"__v": 0
	}
]

```

**[GET]**/list/{ID}

**DESCRIÇÃO:** Lista todos os dados da tabela que tiverem o ID indicado. 

**RESPOSTA:** 
```json
{
	"_id": "65cfc0df139e7a8804e0c3de",
	"title": "The Fast and the Furious: Tokyo Drift",
	"description": "O filme segue Sean Boswell, um jovem de dezessete anos entusiasta das corridas de rua ilegais, que é levado para o Japão para morar com seu pai em Tóquio, onde descobre o submundo das corridas de drift japonesas. É estrelado por Lucas Black, no papel de Sean, e pelo rapper Bow Wow.",
	"image_url": "https://upload.wikimedia.org/wikipedia/pt/f/f1/TFF-TokyoDrift-p%C3%B4ster.jpg",
	"Trailer_url": "https://youtu.be/C6v6U8g2fYU?si=GNlJ2rVUM3mbjkrs&t=25",
	"__v": 0
}

```
