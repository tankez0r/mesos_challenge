import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// import operacionesRoutes from './routes/operacionesRoutes';
// import login from './routes/login';
import session from 'express-session';
const SequelizeStore = require('connect-session-sequelize')(session.Store);
import { conChain } from './database/database';
import { createUser, getUser } from './controllers/loginController';
import asociaciones from './controllers/asociaciones';
import errorHandler from './middleware/errorHandler';



const app = express();
app.use(cors());
const storeSession = new SequelizeStore({
    db: conChain,
    checkExpirationInterval: 15 * 60 * 1000,
    expiration: 7 * 24 * 60 * 60 * 1000,
    table: 'Sessions',
});
app.use(
    session(
        {

            secret: 'mesos',
            store: storeSession,
            resave: false,
            saveUninitialized: false,

        }
    ));
asociaciones(storeSession);
app.use(express.json());
app.use(morgan('dev'));





app.post('/user', (req, res, next) => {
    req.session.userID = req.sessionID;
    next();
}, createUser);
app.get('/user', getUser);


app.use(errorHandler);
// app.use('/operaciones', operacionesRoutes);
// app.use(errorHandler);
// app.use('/login', login);



export default app;
