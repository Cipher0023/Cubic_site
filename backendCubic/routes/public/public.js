import express from 'express';
import {registerUser} from '../../controllers/registerController.js';
import {loginUser} from '../../controllers/loginController.js';
import { registerDeveloper } from '../../controllers/Developer/developerRegister.js';

const router = express.Router()


//parte de ações de usuário
router.post('/cadastro', registerUser);
router.post('/login', loginUser);
//parte de ações de developer
router.post('/cadastro-developer', registerDeveloper);

export default router;