console.log(process.env.SUPABASE_URL);
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("front"));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);


// LISTAR
app.get("/tarefas", async (req, res) => {

  const { data, error } = await supabase
    .from("tarefas")
    .select("*");

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});


// CADASTRAR
app.post("/tarefas", async (req, res) => {

  const { titulo, descricao } = req.body;

  const { data, error } = await supabase
    .from("tarefas")
    .insert([{ titulo, descricao }]);

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});


// EDITAR
app.put("/tarefas/:id", async (req, res) => {

  const { id } = req.params;

  const { titulo, descricao } = req.body;

  const { data, error } = await supabase
    .from("tarefas")
    .update({ titulo, descricao })
    .eq("id", id);

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});


// EXCLUIR
app.delete("/tarefas/:id", async (req, res) => {

  const { id } = req.params;

  const { data, error } = await supabase
    .from("tarefas")
    .delete()
    .eq("id", id);

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});


app.listen(3000, () => {
  console.log("Servidor rodando");
});