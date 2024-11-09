import Express from 'express';
import userRouter from './userRouter.js';
import { associationTypesRouter } from './associationTypeRoutes.js';
import {associationRouter} from './associationRouter.js';

const apiRouter = Express.Router();

apiRouter.use("/users", userRouter);
apiRouter.use("/associationTypes", associationTypesRouter);
apiRouter.use("/associations", associationRouter);

apiRouter.use((err: any, req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    console.error('An error occurred:', err);
    res.status(500).json({ message: 'Something broke!' });
});

export default apiRouter;