import 'dotenv/config';
import express from 'express';

const app = express();
const PUERTO = process.env.PUERTO;

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(PUERTO, () => {
  console.log(`Servidor en http://localhost:${PUERTO}`);
});