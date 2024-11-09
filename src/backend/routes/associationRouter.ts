import Express from 'express';
import { AssociationController } from '../controllers/associationController.js';
import { ProcessResult } from '../types/ProcessResult.js';
import { Association } from '../types/Association.js';

const associationRouter = Express.Router();

associationRouter.get('/', async (req: Express.Request, res: Express.Response) => {
    try {
        const result = await AssociationController.getAssociations();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ success: false, message: 'Error fetching associations' });
    }
});

associationRouter.post('/', async (req: Express.Request, res: Express.Response) => {
    try {
        const association: Association = req.body;
        const result = await AssociationController.saveNewAssociation(association);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ success: false, message: 'Error creating association' });
    }
});

associationRouter.get('/:id', async (req: Express.Request, res: Express.Response) => {
    try {
        const id = req.params.id;
        const result = await AssociationController.getAssociationById(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ success: false, message: 'Error fetching association' });
    }
});

associationRouter.delete('/:id', async (req: Express.Request, res: Express.Response) => {
    try {
        const id = req.params.id;
        const result = await AssociationController.deleteAssociationById(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ success: false, message: 'Error deleting association' });
    }
});

export { associationRouter };

