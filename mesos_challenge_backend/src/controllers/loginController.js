import userModel from '../models/userModel';

export const createUser = (req, res, next) => {
    const { usuario } = req.body;
    const SessionSid = req.sessionID;
    const uid = req.session.userID;
    userModel.create({
        uid,
        usuario,
        SessionSid
    }, {
        fields: ['uid', 'usuario', 'SessionSid']
    }).then(newPost => {
        if (newPost) {
            req.session.usuario = usuario;
            res.status(201).json({
                message: 'se ha creado un nuevo usuario',
                data: newPost
            });
        }
    }).catch((err) => {
        next(err);
    });

};

export const getUser = (req, res, next) => {
    const uid = req.sessionID;

    userModel.findOne({
        where: { uid }
    }).then(model => res.status(200).json({
        data: model
    })).catch(err => next(err));
};

