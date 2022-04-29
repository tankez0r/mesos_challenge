// TO-DO: Crear modelo para crear y modificar los posteos de la pagina principal + crear pagina para administrar la misma

import sequelize from 'sequelize';
import { conChain } from '../database/database';

const userModel = conChain.define('users',
    {
        uid: {
            type: sequelize.STRING,
            primaryKey: true,
            allowNull: false,
        },
        usuario: {
            type: sequelize.TEXT,
            allowNull: false

        },
    },
    {
        timestamps: false
    }
);



export default userModel;