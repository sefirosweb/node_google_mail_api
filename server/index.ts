import cors from 'cors'
import express from 'express'
import db from './db';
import boot from './libs/boot';
import routes from './routes';

const app = express();

const start = async () => {
    app.use(cors())

    await db()
    routes(app)
    boot(app)
}

start()