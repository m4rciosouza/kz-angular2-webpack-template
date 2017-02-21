# kz-angular2-webpack-template[![Build Status](https://travis-ci.org/m4rciosouza/kz-angular2-webpack-template.svg?branch=master)](https://travis-ci.org/m4rciosouza/kz-angular2-webpack-template)
========

### Projeto template Angular 2 com WebPack

O objetivo desse projeto é fornecer um template para começar a utilizar o Angular 2 de forma profissional, e seguindo os padrões recomendados pela própria equipe de desenvolvimento do Google/Angular 2.

### Instalando as dependências do projeto

```
npm install
```

### Executando o projeto em modo de desenvolvimento (http://localhost:8080)

```
npm start
```

### Executando o projeto em modo de produção (http://localhost:5000)

```
npm run start-prod
```

### Rodando os testes

```
npm run test
```

### Gerando o projeto para deploy em produção (diretório dist)

```
npm run build
```

### Gerando CRUD (estrutura básica dos arquivos de um novo módulo)

```
npm run crud
```

### Deploy do código de produção no Heroku

```
heroku login
heroku create
git push heroku master
heroku ps:scale web=1
heroku open
```

### Atualizações

Para se manter informado sobre as atualizações e novos recursos adicionado ao projeto, verifique o arquivo CHANGELOG.md encontrado na raíz do projeto.