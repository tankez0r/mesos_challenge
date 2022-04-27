import authorization from '../middleware/authorization';

import { Router } from 'express';




const router = Router();


router.post('/', authorization, ); 
router.get('/', );
router.get('/:id', );
router.delete('/:id', authorization, );
router.put('/:id', authorization, );


export default router; 