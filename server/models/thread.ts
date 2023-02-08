
import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model, Sequelize } from 'sequelize'

interface ThreadModel extends Model<InferAttributes<ThreadModel>, InferCreationAttributes<ThreadModel>> {
    // Some fields are optional when calling UserModel.create() or UserModel.build()
    id: string;
    message_id: ForeignKey<number>;
    query: string;

}

export default (sequelize: Sequelize) => {
    const ThreadModel = sequelize.define<ThreadModel>('threads', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            primaryKey: true
        },
        message_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        query: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    return ThreadModel
}