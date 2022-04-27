import sequelize from 'sequelize';
import { conChain } from '../database/database';
import userModel from './userModel';

const operacionesModel = conChain.define('operaciones',
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true
        },
        fechaOrigen: {
            type: sequelize.TEXT
        },
        fechaConversion: {
            type: sequelize.TEXT
        },
        valorMoneda: {
            type: sequelize.STRING
        },
        userId: {
            type: sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
);
operacionesModel.belongsTo(userModel, { as: 'usuario', foreignKey: 'userId', sourceKey: 'id', onDelete: 'cascade' });
userModel.sync();
export default operacionesModel;