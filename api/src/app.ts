import express from 'express';
import session, { Store } from 'express-session';
import { SESSION_OPTIONS } from './config';
import { register, login, home, users } from './routes';
import { notFound, internalServerError, active, catchAsync } from './middleware'
import cors from 'cors';

export const createApp = (store: Store) => {
    const app = express();

    // app.use((req, res, next) => {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header('Access-Control-Allow-Headers', '*')
    //     res.header('Access-Control-Allow-Credentials', 'true');
    //     if (req.method === 'OPTIONS') {
    //         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    //         return res.status(200).json({});
    //     }
    //     next();
    // })
    app.use(cors({
        origin: 'http://localhost:3000',
        allowedHeaders: ['Content-Type', 'Authorization','Set-Cookie'],
        credentials: true,
    }));

    app.use(express.json())

    app.use(
        session({
            ...SESSION_OPTIONS,
            store
        })
    )
    app.use(catchAsync(active))

    app.use(users)
    
    app.use(home)

    app.use(login)

    app.use(register)

    app.use(notFound)

    app.use(internalServerError)

    return app
};

