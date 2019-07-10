import express from 'express';
// import { welcome, add } from './hello';
import welcome from './hello';

const app = express();

app.get('/', (req, res) => res.send(welcome));

const port = 5000;

app.listen(port, () => console.log(`Server stated on ${port}`));
