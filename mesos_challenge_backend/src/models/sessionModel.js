import sequelize from 'sequelize';
import { conChain } from '../database/database';


export const sessionModel = conChain.define('Sessions', {
    sid: {
        type: sequelize.STRING,
        primaryKey: true,
    },
    expires: sequelize.DATE,
    data: sequelize.TEXT,
});

