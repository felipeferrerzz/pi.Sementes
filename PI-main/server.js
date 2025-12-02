const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;


app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.get("/sobre", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "sobre.html"));
});


app.get("/contato", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contato.html"));
});


app.get("/obrigado", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "obrigado.html"));
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
