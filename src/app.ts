import express from 'express';
import routes from './Routes';

const app = express();
const port = 3000;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});