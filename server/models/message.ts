
import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from 'sequelize'

export interface MessageModel extends Model<InferAttributes<MessageModel>, InferCreationAttributes<MessageModel>> {
    id: string;
    threadId: string;
    query: string;
}

export default (sequelize: Sequelize) => {
    const MessageModel = sequelize.define<MessageModel>('messages', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            primaryKey: true
        },
        threadId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        query: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    return MessageModel
}