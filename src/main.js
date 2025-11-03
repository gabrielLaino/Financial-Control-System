const express = require("express");

const app = express();
const port = 3334;

app.get('/', (req, res) => {
    res.send('Servidor redando')
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});
