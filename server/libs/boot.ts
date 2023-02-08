import { Express } from 'express'
import { PORT } from '../config'

export default (app: Express) => {

    app.listen(PORT, () => {
        console.log(`[server]: Server is running at http://localhost:${PORT}`);
    });

}