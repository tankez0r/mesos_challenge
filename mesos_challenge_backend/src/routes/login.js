import { Router } from 'express';
import { login } from '../controllers/loginController';
import logedin from '../middleware/logedin';
const router = Router();

router.post('/', login);
router.get('/', logedin);



export default router;
