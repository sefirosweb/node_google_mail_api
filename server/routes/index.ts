
import { Express, Request, Response } from 'express'
import api from './api'

export default (app: Express) => {
    app.use('/api', api)
    app.use('/api/*', (req: Request, res: Response) => {
        res.json({ error: 'Page not found' })
    })
    app.use('*', (req: Request, res: Response) => {
        res.send('Page not found')
    })
}