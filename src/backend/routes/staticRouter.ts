import Express from 'express';
import path from 'path';
import { publicPath } from '../config/configData.js';

const staticRouter = Express.Router();

staticRouter.get('/newUser', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, "/newUser.html");
    res.sendFile(targetFilePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(500).send('Failed to send file');
        }
    });
});

staticRouter.get('/usersManagement', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, "/usersManagement.html");
    res.sendFile(targetFilePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(500).send('Failed to send file');
        }
    });
});

staticRouter.get('/associations', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, "/newAssociation.html");
    res.sendFile(targetFilePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(500).send('Failed to send file');
        }
    });
});

staticRouter.get('/associationsTypes', (req: Express.Request, res: Express.Response) => {
    const targetFilePath = path.join(publicPath, "/newAssociationType.html");
    res.sendFile(targetFilePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(500).send('Failed to send file');
        }
    });
});
export {staticRouter} ;

