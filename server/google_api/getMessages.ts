import { oAuth2Client } from "../config";
import db from "../db";
import { generateConfig } from "./generateConfig"

const getMessages = async () => {
    const query: string = 'includeSpamTrash=true&q=after:2010/01/01 before:2015/01/01'

    const database = await db()
    const messages = await database.models.message.findAll({
        where: {
            query: query
        }
    })

    if (messages.length > 0) return messages

    try {
        const url = `/users/me/messages?${query}`;
        // const url = `/users/me/messages`;
        // const url = `/users/me/threads?includeSpamTrash=true&q=after:2010/01/01 before:2015/02/01`;
        const { token } = await oAuth2Client.getAccessToken();
        if (typeof token !== 'string') {
            throw new Error('Token not found!')
        }

        const response = await generateConfig(url);
        response.data.messages.forEach((m) => {
            database.models.message.create({
                id: m.id,
                threadId: m.threadId,
                query: query
            })
        })

        const messages = await database.models.message.findAll({
            where: {
                query: query
            }
        })

        return messages
    } catch (error) {
        console.log(error);
        return error;
    }
}

export default getMessages