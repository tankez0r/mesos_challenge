/* eslint-disable no-unused-vars */
import operacionesModel from '../models/operacionesModel';
import userModel from '../models/userModel';
import { sessionModel } from '../models/sessionModel';
const asociaciones = (session) => {
    sessionModel.hasOne(userModel);
    userModel.belongsTo(sessionModel);
    userModel.hasMany(operacionesModel);
    operacionesModel.belongsTo(userModel);


    session.sync({ force: true }).then(_next => {
        userModel.sync({ force: true }).then(_next =>
            operacionesModel.sync({ force: true }));
    });




};

export default asociaciones;