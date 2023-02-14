import { Request, Response } from 'express';
import { Pergunta } from '../models/Pergunta';

export const home = async (req: Request, res: Response) => {
    let perguntas = await Pergunta.findAll();
    
    res.render('pages/home', {
        perguntas
    });
}

export const perguntar = (req: Request, res: Response) => {
    res.render('pages/perguntar');
}

export const salvarPergunta = async (req: Request, res: Response) => {
    let titulo: string = req.body.titulo;
    let descricao: string = req.body.descricao;

    await Pergunta.create({
        titulo,
        descricao
    });

    res.redirect('/perguntar');
}