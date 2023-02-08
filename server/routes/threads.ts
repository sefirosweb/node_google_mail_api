
import { Request, Response, Router } from 'express'
import { generateConfig } from '../google_api/generateConfig';
import getThread from '../google_api/getThread';

const router = Router();

router.get('/threads/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const url = `/users/me/threads/${id}`;;
    const response = await generateConfig(url);
    res.json(response.data)
});

export default router;