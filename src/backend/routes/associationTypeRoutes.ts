import Express from 'express';
import { AssociationTypeController } from '../controllers/associationTypeController.js';
import { Association } from '../types/Association.js';
import { AssociationType } from '../types/AssociationType.js';

const associationTypesRouter = Express.Router();

associationTypesRouter.get('/', async (req: Express.Request, res: Express.Response) => {
    try {
        const result = await AssociationTypeController.getAssociationTypes();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ success: false, message: 'Error fetching association types' });
    }
});

associationTypesRouter.post('/', async (req: Express.Request, res: Express.Response) => {
    try {
        const associationType:AssociationType = {type: req.body.type};
        console.log(req.body)//TODO: El body es undefined
        const result = await AssociationTypeController.createAssociationType(associationType);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ success: false, message: 'Error creating association type' });
    }
});

associationTypesRouter.get('/:id', async (req: Express.Request, res: Express.Response) => {
    try {
        const id = req.params.id;
        const result = await AssociationTypeController.getAssociationTypeById(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ success: false, message: 'Error fetching association type' });
    }
});

associationTypesRouter.put('/:id', async (req: Express.Request, res: Express.Response) => {
    try {
        const id = req.params.id;
        const associationType = req.body;
        const result = await AssociationTypeController.updateAssociationType(id, associationType);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ success: false, message: 'Error updating association type' });
    }
});

associationTypesRouter.delete('/:id', async (req: Express.Request, res: Express.Response) => {
    try {
        const id = req.params.id;
        const result = await AssociationTypeController.deleteAssociationType(id);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ success: false, message: 'Error deleting association type' });
    }
});

export { associationTypesRouter };

