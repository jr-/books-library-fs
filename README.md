# books-library-fs


Ambiente de dev
-----------------
Dependencias: node, npm create-react-app e postgres;

Instalando dependências dentro do projeto: rodar o comando npm install nos diretórios: b-books-library, f-books-library e books-library;
Para rodar o projeto no ambiente de desenvolvimento basta ficar na raiz do projeto (books-library) e rodar o comando npm run dev;

Ambiente de produção
-----------------
- RDS: books-library-prod.chmugumwre6t.sa-east-1.rds.amazonaws.com
- front: http://ec2-52-67-145-42.sa-east-1.compute.amazonaws.com/
- backend: http://ec2-52-67-145-42.sa-east-1.compute.amazonaws.com:5000/

Rotas do backend
-----------------
- /books, get all books;
- /books/year/?start=2010&end=2018, get books by year interval;
- /books/filter/:filter, filter books by title, author or ISBN;
- /books/:id, get book by id;

Tarefas planejadas para o desafio:
-----------------
- criar/estrutura database local - ok
- git init - ok
- colocar eslint - ok (tive que remover quando juntei o backend com o front)
- estruturar projeto backend - ok
- postman (test routes) - ok
- subir o backend na AWS (EC2 e RDS) - ok
- finalizar versão final backend - ok
- test unitário (mocha)
- documentação README.md - ok
- estruturar o front (react) - ok
- subir o front (EC2) - ok
- finalizar versão final front
- validação de entradas no backend


Intolerâncias de projetos:
-----------------
obs.: deixei algumas coisas feitas de um jeito que não seria ideal por causa do tempo que eu tive para programar o desafio;

- configurações do bd de produção salvas no repositório git;

Cronograma de horas do desafio
-------------------
- 3 horas para fazer tudo que foi feito do backend
- 1 hora para criar e subir na AWS
- 1 hora para resolver um problema de VPC na AWS
- 1 hora para startar o esqueleto do front (nunca tinha feito um projeto de front do zero)
- 3 horas para conseguir utilizar o front na AWS (Invalid hostname)

Estratégia para o desafio
------------------
Primeiro deixei o básico do backend pronto pois é a minha area de atuação, depois iria utilizar todas as rotas do backend em uma tela simples do front, que eu acabei nao tendo tempo para terminar; 

Depois que tudo estivesse pronto iria lapidar o backend com testes unitários e validação de entradas;

A parte da paginação eu iria deixar para o front resolver com o table do material-ui a parte do filtro pelo intervalo de anos e filtro de busca por título, autor ou ISBN iria utilizar as rotas criadas do backend;







