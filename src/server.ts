import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mustache from 'mustache-express';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.urlencoded({extended:true}));
server.use(express.static(path.join(__dirname, '../public')));

server.get('/', (req: Request, res: Response) => {
    res.send('pagina inicial')
});

server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada');
});

server.listen(process.env.PORT, () => {
    console.log('servidor rodadando na porta 4000');
});
