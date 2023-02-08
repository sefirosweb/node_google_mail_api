
import { Router } from 'express'
import messages from './messages';
import threads from './threads';

const router = Router();
router.use('/', messages)
router.use('/', threads)

export default router;