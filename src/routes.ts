import { Router } from 'express';
import { UserController } from './controllers/user.controller'

const userController = new UserController();
const router = Router();
router.post('/pessoas', userController.create)

router.get('/pessoas/:id', userController.findById)

router.get('/pessoas', userController.findByTerm)

router.get('/contagem-pessoas', userController.count)

export default router;