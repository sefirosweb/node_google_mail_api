import { Sequelize } from 'sequelize'
import { DB_NAME, DB_PARAMS, DB_PASSWORD, DB_USER } from './config'
import message from './models/message'
import thread from './models/thread'

let db: {
    sequalize: Sequelize,
    models: {
        message: ReturnType<typeof message>
        thread: ReturnType<typeof thread>
    }
}

export default async () => {
    if (db) return db

    const sequalize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, DB_PARAMS)

    const Thread = thread(sequalize)
    const Message = message(sequalize)

    Message.hasMany(Thread);
    Thread.belongsTo(Message, {
        foreignKey: 'message_id'
    });

    await sequalize.sync()

    db = {
        sequalize,
        models: {
            message: Message,
            thread: Thread,
        }
    }

    return db
}