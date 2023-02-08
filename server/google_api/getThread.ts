import db from "../db";
import { generateConfig } from "./generateConfig"

const getThread = async (id: string) => {
    const url = `/users/me/threads/${id}`;

    const database = await db()
    const data = await database.models.thread.findOne({
        where: {
            id
        }
    })

    if (data) return data

    const response = await generateConfig(url);
    return response

}

export default getThread