import sequelize from 'sequelize';
import { conChain } from '../database/database';


export const sessionModel = conChain.define('Session', {
    sid: {
        type: sequelize.STRING,
        primaryKey: true,
    },
    userId: sequelize.STRING,
    expires: sequelize.DATE,
    data: sequelize.TEXT,
});

export function extendDefaultFields(defaults, session) {
    return {
        data: defaults.data,
        expires: defaults.expires,
        userId: session.userId,
    };
}