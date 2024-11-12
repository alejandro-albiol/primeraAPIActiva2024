import Express from 'express';
import { AssociationTypeController } from '../controllers/associationTypeController.js';
import { AssociationType } from '../types/AssociationType.js';
import { ProcessResult } from '../types/ProcessResult.js';

const associationTypesRouter = Express.Router();

associationTypesRouter.get('/', async (req: Express.Request, res: Express.Response) => {
    const result: ProcessResult = await AssociationTypeController.getAssociationTypes();
    let statusCode = 200;
    if (!result.success && result.rowsAffected === 0) statusCode = 404;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});

associationTypesRouter.get('/:id', async (req: Express.Request, res: Express.Response) => {
    const result: ProcessResult = await AssociationTypeController.getAssociationTypeById(req.params.id);
    let statusCode = 200;
    if (!result.success && result.rowsAffected === 0) statusCode = 404;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});

associationTypesRouter.post('/', async (req: Express.Request, res: Express.Response) => {
    const associationType: AssociationType = { type_name: req.body.type_name };
    const result: ProcessResult = await AssociationTypeController.createAssociationType(associationType);
    let statusCode = 201;
    if (!result.success && result.rowsAffected === 0) statusCode = 400;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});

associationTypesRouter.put('/:id', async (req: Express.Request, res: Express.Response) => {
    const associationType: AssociationType = { id: req.params.id, type_name: req.body.type_name };
    const result: ProcessResult = await AssociationTypeController.updateAssociationType(associationType);
    let statusCode = 200;
    if (!result.success && result.rowsAffected === 0) statusCode = 404;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});

associationTypesRouter.delete('/:id', async (req: Express.Request, res: Express.Response) => {
    const result: ProcessResult = await AssociationTypeController.deleteAssociationType(req.params.id);
    let statusCode = 200;
    if (!result.success && result.rowsAffected === 0) statusCode = 404;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});

export { associationTypesRouter };