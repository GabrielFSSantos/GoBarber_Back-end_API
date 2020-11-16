
# GoBarber_Back-end_API
![Developer](https://img.shields.io/badge/GabrielFSSantos-GoBarber_Back-end_API)
[![licence mit](https://img.shields.io/github/license/GabrielFSSantos/GoBarber_Back-end_API)](https://github.com/GabrielFSSantos/GoBarber_Back-end_API/blob/master/LICENSE)

### :books:  Este repositório é referente ao back-end da aplicação.

>Projeto criado para estudar e praticar conhecimentos de programação e para fins didáticos.

## :rocket: Projeto

>O **GoBarber**, é uma aplicação para conectar barbeiros/cabeleireiros com seus clientes. Fazendo agendamentos de acordo com o que o profissional tem de dias e horários disponíveis. Desenvolvemos a aplicação do zero, com backend conectado ao banco de dados relacional(Postgres), web(ReacJS)e mobile(React Native).

## 🎨 Layout
>Você pode visualizar o layout do projeto no formato através deste [link](https://www.figma.com/file/BXCihtXXh9p37lGsENV614/GoBarber). Lembrando que você precisará ter uma conta [Figma](https://www.figma.com/).

## :wrench: Requerimentos
>Ter instalado pelo menos um gerenciador de pacotes do Node, [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/).

## :floppy_disk: Instalando
>Instalação e configuração do Docker
>1. Instale o [docker](https://www.docker.com/get-started) em sua máquina.
>2. Crie um contêiner postgres no terminal docker: ``docker run --name postgres -e POSTGRES_PASSWORD = docker -p 5432: 5432 -d postgres``.
>3. Inicie o container criado: ``docker start postgres``.<br>

>Executar na raiz do projeto o seguinte comando para instalar as dependências <br>
>``yarn install``<br>
>ou <br>
>``npm install``

>Abra o DBeaver e crie uma nova conexão, inserindo os dados:
>``` 
>HOST: localhost / 192.168.99.100
>DATABASE: Postgres
>USERNAME: Postgres
>PASSWORD: docker
>```

>Instale todas as dependências do banco de dados<br>
``yarn typeorm:migration: run``

## 💻  Executando
>``yarn dev:server``<br>
>O servidor irá iniciar na porta: 3333 - vá para http://localhost:3333

## :raising_hand: Contribuindo
>O projeto é de livre acesso e uso, então fique à-vontade para realizar um Fork e utilizar do mesmo, como também sugerir dicas e melhorias.
>
>1. Faça um **fork** do projeto.
>2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
>3.Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
>4. Envie as suas alterações: `git push origin my-feature`
>
>Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## :space_invader: Tecnologias
> Softwares e tecnologias utilizadas para o desenvolvimento e uso do projeto:
>
>* [Node.js] - Utilizado para o desenvolvimento back-end.
>* [Typescript] - Tipagem utilizada para o desenvolvimento geral.
>* [Docker] - Virtualização de nível de sistema operacional.
>* [PostgreSQL] - Sistema gerenciador de banco de dados objeto relacional.
>* [VSCode] - Ótimo editor de texto.
>* [StackEdit] - Excelente editor de Markdown online.

## :memo: Licença
>Este projeto está sob a licença do MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

[Node.js]: <https://nodejs.org/>
[Typescript]: <https://www.typescriptlang.org/>
[Docker]: <https://www.docker.com/>
[PostgreSQL]: <https://www.postgresql.org/>
[VSCode]: <https://code.visualstudio.com/>
[StackEdit]: <https://stackedit.io/>
