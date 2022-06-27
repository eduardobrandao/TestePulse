const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + 'dist/PulseBank'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + 'dist/PulseBank/index.html')
})

app.listen(PORT, () => {
  console.log('Servidor start na porta ' + PORT)
})
