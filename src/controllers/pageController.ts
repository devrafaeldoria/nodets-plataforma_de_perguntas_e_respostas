import { Request, Response } from 'express';
import { sequelize } from '../instances/pg';

export const home = async (req: Request, res: Response) => {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao banco de dados');
    } catch(error) {
        console.log(error);
    }
    res.send('pagina inicial');
}

export const perguntar = (req: Request, res: Response) => {
    res.render('pages/perguntar');
}

export const salvarPergunta = (req: Request, res: Response) => {
    let title: string = req.body.titulo;
    let question: string = req.body.descricao;

    res.send(`Título: ${title}, Pergunta: ${question}`);
}