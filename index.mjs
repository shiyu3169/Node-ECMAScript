import express from 'express';
import { welcome, add } from './hello';

const app = express();

app.get('/', (req, res) => res.send(add(5, 5).toString()));

const port = 5000;

app.listen(port, () => console.log(`Server stated on ${port}`));
