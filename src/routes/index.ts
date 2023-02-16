import { Router } from 'express';
import * as PageController from '../controllers/pageController';

const router = Router();

router.get('/', PageController.home);

router.get('/perguntar', PageController.perguntar);

router.post('/salaverpergunta', PageController.salvarPergunta);

router.get('/pergunta/:id', PageController.selecionarPergunta);

router.post('/salvarresposta', PageController.salvarResposta);

export default router;