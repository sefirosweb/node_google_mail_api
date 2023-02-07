import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import { REFRESH_TOKEN, REDIRECT_URL, CLIENT_SECRET, CLIENT_ID } from './config'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

const sendEmail = async () => {
    try {
        const accessToken = await oAuth2Client.getAccessToken()
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

        const mailOptions = {
            from: 'javier.garcia.fillol@gmail.com',
            to: 'sefirosweb@gmail.com',
            subject: 'Test grom API ' + Date.now(),
            text: 'Hello this body mail from api',
            html: '<h1>Hello this body mail from api</h1>'
        }

        const result = await transport.sendMail(mailOptions)
        return result
        // return mailOptions

    } catch (e) {
        return e
    }
}


sendEmail()
    .then((result) => {
        console.log('result:')
        console.log({ result })
    })
    .catch(e => console.log(e))