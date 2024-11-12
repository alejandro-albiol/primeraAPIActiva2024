import Express from 'express';
import { AssociationController } from '../controllers/associationController.js';
import { Association } from '../types/Association.js';
import { ProcessResult } from '../types/ProcessResult.js';

const associationRouter = Express.Router();

associationRouter.get('/', async (req: Express.Request, res: Express.Response) => {
    const result: ProcessResult = await AssociationController.getAssociations();
    let statusCode = 200;
    if (!result.success && result.rowsAffected === 0) statusCode = 404;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});

associationRouter.get('/:id', async (req: Express.Request, res: Express.Response) => {
    const result: ProcessResult = await AssociationController.getAssociationById(req.params.id);
    let statusCode = 200;
    if (!result.success && result.rowsAffected === 0) statusCode = 404;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});

associationRouter.post('/', async (req: Express.Request, res: Express.Response) => {
    const association: Association = {
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
        location: req.body.location,
        founded_date: req.body.founded_date,
        contact_email: req.body.contact_email
    };
    const result: ProcessResult = await AssociationController.saveNewAssociation(association);
    let statusCode = 201;
    if (!result.success && result.rowsAffected === 0) statusCode = 400;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});

associationRouter.delete('/:id', async (req: Express.Request, res: Express.Response) => {
    const result: ProcessResult = await AssociationController.deleteAssociationById(req.params.id);
    let statusCode = 200;
    if (!result.success && result.rowsAffected === 0) statusCode = 404;
    if (!result.success && !("rowsAffected" in result)) statusCode = 500;
    res.status(statusCode).json({ message: result.message });
});

export { associationRouter };