// TO-DO: Crear modelo para crear y modificar los posteos de la pagina principal + crear pagina para administrar la misma

import sequelize from 'sequelize';
import operacionesModel from './operacionesModel';
import { conChain } from '../database/database';
import { sessionModel } from './sessionModel';

const userModel = conChain.define('user',
    {
        id: {
            type: sequelize.STRING,
            primaryKey: true,
            allowNull: false,
            onDelete: 'CASCADE',
        },
        usuario: {
            type: sequelize.TEXT,
            allowNull: false

        },
        sesionId: {
            type: sequelize.STRING
        }

    },
    {
        timestamps: false
    }
);
userModel.hasMany(operacionesModel, { as: 'operaciones', foreingKey: 'userId', sourceKey: 'id' });
userModel.belongsTo(sessionModel, { as: 'session', foreignKey: 'sesionId', sourceKey: 'sid', onDelete: 'cascade' });
userModel.sync();

export default userModel;