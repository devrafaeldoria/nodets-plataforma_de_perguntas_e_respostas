import { Request, Response } from 'express';
import { Pergunta } from '../models/Pergunta';
import { Resposta } from '../models/Resposta';

export const home = async (req: Request, res: Response) => {
    let perguntas = await Pergunta.findAll({
        order: [
            ['id', 'DESC']
        ]
    });
    
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

export const selecionarPergunta = async (req: Request, res: Response) => {
    const id = req.params.id;
 
    await Pergunta.findOne({
        where: {
            id
        }
    }).then(pergunta => {
        if(pergunta != undefined) {
            Resposta.findAll({
                where: {idPergunta: pergunta.id},
                order: [
                    ['id', 'DESC']
                ]
            }).then(respostas => {
                res.render('pages/paginaResponder', {
                    pergunta,
                    respostas
                });
            });
        } else {
            res.redirect('/');
        }
    }).catch(() => {
        res.redirect('/');
    });

}

export const salvarResposta = async (req: Request, res: Response) => {
    let idPergunta = req.body.pergunta;
    let resposta = req.body.resposta;

    await Resposta.create({
        idPergunta,
        resposta
    })

    res.redirect(`/pergunta/${idPergunta}`);

}