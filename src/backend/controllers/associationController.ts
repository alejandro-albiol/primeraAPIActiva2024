import { AssociationModel } from '../models/associationModel.js';
import { ProcessResult } from '../types/ProcessResult.js';
import { Association } from '../types/Association.js';

export class AssociationController {
    static async getAssociations(): Promise<ProcessResult> {
        try {
            const result = await AssociationModel.getAssociations();
            return result;
        } catch (error: any) {
            return {
                success: false,
                message: `Error fetching associations: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }

    static async saveNewAssociation(association: Association): Promise<ProcessResult> {
        try {
            const result = await AssociationModel.saveNewAssociation(association);
            return result;
        } catch (error: any) {
            return {
                success: false,
                message: `Error creating association: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }

    static async getAssociationById(id: string): Promise<ProcessResult> {
        try {
            const result = await AssociationModel.getAssociationById(id);
            return result;
        } catch (error: any) {
            return {
                success: false,
                message: `Error fetching association: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }

    static async deleteAssociationById(id: string): Promise<ProcessResult> {
        try {
            const result = await AssociationModel.deleteAssociationById(id);
            return result;
        } catch (error: any) {
            return {
                success: false,
                message: `Error deleting association: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }
}
