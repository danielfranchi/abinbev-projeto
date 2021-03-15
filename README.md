# Beer Emporium Administrator

## Project Description

Beer Emporium Administrator is a website made in React, to manage users and products. Users are divided into two levels, (admin) who have full access to the site, being able to register new products, how to remove also, and register users with their access level. Users (editor) have more restricted access, not being able to access and register users, such as removing products, only being able to register new products.

### Login
Use these users to login to the site:

#### Login administrador

email: helen@facebook.com | senha: 123123

#### Login editor

email: mauricio@google.com | senha: 123123

* Challenge description: [https://gist.github.com/jenicarvalho/1cc50b46f853be12be660b429ce487a4](https://gist.github.com/jenicarvalho/1cc50b46f853be12be660b429ce487a4)

## Getting started

### Prerequisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/).

### 🎲 Running the Backend (API)

```bash
# Clone this repository
$ git clone https://github.com/danielfranchi/abinbev-projeto

# Access the project folder in the terminal/cmd
$ cd abinbev-projeto

# Go to the folder api
$ cd api

# Install the dependencies
$ npm install

# Run the application in development mode
$ json-server db.json -m ./node_modules/json-server-auth -r routes.json --port 4000

# The server will start at the port:4000 - access <http://localhost:4000>
```

### :computer: Running the Front-End (React)

```bash
# Clone this repository
$ git clone https://github.com/danielfranchi/abinbev-projeto

# Access the project folder in the terminal/cmd
$ cd abinbev-projeto

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm start

# The server will start at the port:3000 - access <http://localhost:3000>
```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://react-redux.js.org/)
