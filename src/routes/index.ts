import { Router } from 'express';
import * as PageController from '../controllers/pageController';

const router = Router();

router.get('/', PageController.home);

router.get('/perguntar', PageController.perguntar);

router.post('/salaverpergunta', PageController.salvarPergunta);

export default router;