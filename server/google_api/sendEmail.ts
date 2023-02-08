
import { REFRESH_TOKEN, CLIENT_SECRET, CLIENT_ID, getAccessToken } from '../config'
import nodemailer from 'nodemailer'

type MailOptions = {
    from: string
    to: string
    subject: string
    text?: string
    html: string
}

const sendEmail = async (mailOptions: MailOptions) => {
    try {
        const accessToken = await getAccessToken()
        const transport = nodemailer.createTransport({
            //@ts-ignore
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'javier.garcia.fillol@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        // const mailOptions = {
        //     from: 'javier.garcia.fillol@gmail.com',
        //     to: 'sefirosweb@gmail.com',
        //     subject: 'Test grom API ' + Date.now(),
        //     text: 'Hello this body mail from api',
        //     html: '<h1>Hello this body mail from api</h1>'
        // }

        const result = await transport.sendMail(mailOptions)
        return result
        // return mailOptions

    } catch (e) {
        return e
    }
}

export default sendEmail