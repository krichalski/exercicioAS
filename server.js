const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/media', (req, res) => {
  res.sendFile(path.join(__dirname, 'media.html'));
});

app.post('/salvar-dados', (req, res) => {
  const nome = req.body.nome;
  const n1 = parseFloat(req.body.n1);
  const n2 = parseFloat(req.body.n2);
  const n3 = parseFloat(req.body.n3);
  const me = parseFloat(req.body.me);

  const mf = (n1 + n2 * 2 + n3 * 3 + me) / 7;

  const data = `${nome},${n1},${n2},${n3},${me},${mf.toFixed(2)}\n`;

  fs.appendFile('dados.csv', data, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao salvar os dados.');
    } else {
      console.log('Dados salvos com sucesso.');
      res.send(`Média calculada e dados salvos no servidor.`);
    }
  });
});


app.get('/lista', (req, res) => {
  res.sendFile(path.join(__dirname, 'lista.html'));
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
