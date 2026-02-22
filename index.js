import express from 'express';


const host = '0.0.0.0';
const port = 3000;

const server = express();

server.get('/', (requisicao, resposta) => {
  resposta.send(`
      <DOCTYPE html>
      <html lang="pt-br">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"
      <title>Atividade Reajuste de Salario</title>
      </head>
      <body>
        <h1>Atividade Reajuste de Salario</h1>
        <h2>Olá, bem-vindo a página inicial.</h2>
      </body>
      </html>
    `)
});

server.get('reajusteSalario', (requisicao, resposta) => {
  
});

server.listen(port, host, () => {
  console.log(`Servidor escutando em http://${host}:${port}`);
});