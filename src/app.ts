
import express from 'express';
import routes from './Routes';

import 'dotenv';

const app = express();
const port = process.env.PORT;

console.log(process.env);

app.use(express.json());

app.use(routes);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});