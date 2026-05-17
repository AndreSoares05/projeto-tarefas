# 📋 Sistema de Tarefas

Projeto Full Stack desenvolvido com Node.js, Express e Supabase para gerenciamento de tarefas.

O sistema permite cadastrar, listar, editar e excluir tarefas através de uma interface web simples e integrada com banco de dados em nuvem.

---

# 🚀 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos de desenvolvimento Full Stack utilizando tecnologias modernas do ecossistema JavaScript.

Durante o desenvolvimento foram aplicados conceitos como:

- Criação de APIs REST
- Integração entre Front-end e Back-end
- Operações CRUD
- Manipulação de banco de dados
- Requisições HTTP
- Uso de JSON
- Integração com Supabase
- Uso de fetch()
- Uso de async/await

---

# 🛠️ Tecnologias Utilizadas

## Back-end

- Node.js
- Express
- Supabase
- dotenv
- cors

## Front-end

- HTML5
- CSS3
- JavaScript

## Banco de Dados

- Supabase PostgreSQL

---

# 📌 Funcionalidades do Sistema

O sistema possui as seguintes funcionalidades:

✅ Cadastrar tarefas  
✅ Listar tarefas  
✅ Editar tarefas  
✅ Excluir tarefas  
✅ Integração com banco de dados em nuvem  
✅ Atualização dinâmica utilizando fetch API  

---

# 📂 Estrutura do Projeto

projeto-tarefas/
│
├── index.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
│
└── front/
    ├── index.html
    ├── style.css
    └── script.js


---


# 🗄️ Banco de Dados

O banco de dados foi criado utilizando o Supabase.

## Tabela utilizada


create table tarefas (
  id bigint generated always as identity primary key,
  titulo text not null,
  descricao text
);


---

# 🔗 API REST

A aplicação utiliza uma API REST para comunicação entre o Front-end e o banco de dados.

## Rotas disponíveis

### 📄 Listar tarefas


GET /tarefas


---

### ➕ Cadastrar tarefa


POST /tarefas


---

### ✏️ Editar tarefa


PUT /tarefas/:id


---

### ❌ Excluir tarefa


DELETE /tarefas/:id


---

# 💻 Interface do Sistema

O sistema possui uma interface simples e intuitiva para gerenciamento das tarefas.

## Funcionalidades disponíveis na tela

- Campo para título
- Campo para descrição
- Botão de cadastro
- Listagem automática das tarefas
- Botão para editar
- Botão para excluir

---

# 📸 Prints do Projeto

## Tela principal

Adicione aqui imagens do sistema funcionando.

Exemplo:

![Tela do Sistema](<img width="648" height="277" alt="Screenshot 2026-05-16 222112" src="https://github.com/user-attachments/assets/53ac7651-5d7a-42af-8489-7ee8f546554e" />
)


---

# 📚 Conceitos Praticados

Durante o desenvolvimento deste projeto foram praticados:

- Desenvolvimento Full Stack
- APIs REST
- CRUD
- Integração Front-end + Back-end
- Banco de dados em nuvem
- Requisições HTTP
- JSON
- Manipulação do DOM
- JavaScript assíncrono

---

# 👨‍💻 Autor

Projeto desenvolvido por **André Soares** para a atividade prática de Desenvolvimento Full Stack.

---
