import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('pagina inicial');
});

router.get('/perguntar', (req: Request, res: Response) => {
    res.render('pages/perguntar');
});

router.post('/salaverpergunta', (req: Request, res: Response) => {
    let title: string = req.body.titulo;
    let question: string = req.body.descricao;

    res.send(`Título: ${title}, Pergunta: ${question}`);
});

export default router;