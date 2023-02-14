import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
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