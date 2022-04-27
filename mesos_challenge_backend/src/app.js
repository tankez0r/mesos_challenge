import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// import errorHandler from './middleware/errorHandler';
// import operacionesRoutes from './routes/operacionesRoutes';
// import login from './routes/login';
import session from 'express-session';
const SequelizeStore = require('connect-session-sequelize')(session.Store);
import { conChain } from './database/database';
import { extendDefaultFields } from './models/sessionModel';



const app = express();
const storeSession = new SequelizeStore({
    db: conChain,
    checkExpirationInterval: 15 * 60 * 1000,
    expiration: 7 * 24 * 60 * 60 * 1000,
    table: 'Session',
    extendDefaultFields: extendDefaultFields
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
storeSession.sync();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));




storeSession.sync();

app.get('/', (req, res) => {
    console.log(req);
    res.status(202).json({ message: req.session });

});

// app.use('/operaciones', operacionesRoutes);
// app.use(errorHandler);
// app.use('/login', login);



export default app;
