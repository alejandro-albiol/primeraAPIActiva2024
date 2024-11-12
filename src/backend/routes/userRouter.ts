import Express from 'express';
import { validateNumericParams } from '../middlewares/validateNumericParams.js';
import { ProcessResult } from '../types/ProcessResult.js';
import { User } from '../types/User.js';
import { UserController } from '../controllers/userController.js';

const userRouter = Express.Router();
userRouter.get("/", async (req: Express.Request, res: Express.Response) => {
    const result: ProcessResult = await UserController.getAllUsers();
    let statusCode = 200;
    if (!result.success && result.rowsAffected === 0) statusCode = 404;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});

userRouter.get("/:id", validateNumericParams, async (req: Express.Request, res: Express.Response) => {
    const result: ProcessResult = await UserController.getUser(req.params.id);
    let statusCode = 200;
    if (!result.success && result.rowsAffected === 0) statusCode = 404;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});

userRouter.post("/", async (req: Express.Request, res: Express.Response) => {
    const user: User = { userName: req.body.username, name: req.body.name, first_surname: req.body.surname, email: req.body.email, password: req.body.password };
    const result: ProcessResult = await UserController.newUser(user);
    let statusCode = 200;
    if (!result.success && result.rowsAffected === 0) statusCode = 404;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});

userRouter.delete("/:id", validateNumericParams, async (req: Express.Request, res: Express.Response) => {
    const result: ProcessResult = await UserController.deleteUser(req.params.id);
    let statusCode = 200;
    if (!result.success && result.rowsAffected === 0) statusCode = 404;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});

userRouter.put("/:id", validateNumericParams, async (req: Express.Request, res: Express.Response) => {
    const updates: { [key: string]: any } = req.body;
    const result: ProcessResult = await UserController.updateUserById(req.params.id, updates);
    let statusCode = 200;
    if (!result.success && result.rowsAffected === 0) statusCode = 404;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});



export default userRouter;