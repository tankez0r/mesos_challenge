import { conChain } from '../database/database';
import sequelize from 'sequelize';

const operacionesModel = conChain.define('operaciones',
    {
        oid: {
            type: sequelize.STRING,
            primaryKey: true,
            allowNull: false

        },
        fechaConversion: {
            type: sequelize.TEXT
        },
        valorMoneda: {
            type: sequelize.STRING
        },
    },
    {
        timestamps: true
    }
);

export default operacionesModel;