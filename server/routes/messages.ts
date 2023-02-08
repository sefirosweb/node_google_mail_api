
import { Request, Response, Router } from 'express'
import { generateConfig } from '../google_api/generateConfig';
import getMessages from '../google_api/getMessages';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
    getMessages()
        .then((messages) => {
            res.json(messages);
        })
});

router.get('/messages/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const url = `/users/me/messages/${id}`;
    const response = await generateConfig(url);
    res.json(response.data)
});

export default router;