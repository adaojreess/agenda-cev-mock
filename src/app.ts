import express from 'express';
import routes from './Routes';
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

console.log(process.env);

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    return console.log(`server is listening on ${PORT}`);
});