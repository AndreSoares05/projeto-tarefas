const api = "http://localhost:3000/tarefas";


// LISTAR
async function listar() {

  const resposta = await fetch(api);

  const dados = await resposta.json();

  const lista = document.getElementById("lista");

  lista.innerHTML = "";

  dados.forEach(tarefa => {

    lista.innerHTML += `
      <div class="tarefa">

        <h3>${tarefa.titulo}</h3>

        <p>${tarefa.descricao}</p>

        <button onclick="editar(${tarefa.id})">
          Editar
        </button>

        <button onclick="excluir(${tarefa.id})">
          Excluir
        </button>

      </div>
    `;
  });
}


// CADASTRAR
async function cadastrar() {

  const titulo = document.getElementById("titulo").value;

  const descricao = document.getElementById("descricao").value;

  await fetch(api, {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      titulo,
      descricao
    })
  });

  listar();
}


// EXCLUIR
async function excluir(id) {

  await fetch(`${api}/${id}`, {
    method: "DELETE"
  });

  listar();
}


// EDITAR
async function editar(id) {

  const novoTitulo = prompt("Novo título");

  const novaDescricao = prompt("Nova descrição");

  await fetch(`${api}/${id}`, {

    method: "PUT",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      titulo: novoTitulo,
      descricao: novaDescricao
    })
  });

  listar();
}


listar();