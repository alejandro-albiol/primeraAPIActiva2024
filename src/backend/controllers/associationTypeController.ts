import { AssociationTypeModel } from '../models/associationTypeModel.js';
import { ProcessResult } from '../types/ProcessResult.js';
import { AssociationType } from '../types/AssociationType.js';

export class AssociationTypeController {
    static async getAssociationTypes(): Promise<ProcessResult> {
        try {
            const result = await AssociationTypeModel.getAssociationTypes();
            return result;
        } catch (error) {
            return {
                success: false,
                message: `Error fetching association types: ${(error as Error).message}`,
                rows_affected: 0
            };
        }
    }

    static async createAssociationType(type: AssociationType): Promise<ProcessResult> {
        try {
            const result = await AssociationTypeModel.createAssociationType(type);
            return result;
        } catch (error) {
            return {
                success: false,
                message: `Error creating association type: ${(error as Error).message}`,
                rows_affected: 0
            };
        }
    }

    static async updateAssociationType(type: AssociationType): Promise<ProcessResult> {
        try {
            const result = await AssociationTypeModel.updateAssociationType(type);
            return result;
        } catch (error) {
            return {
                success: false,
                message: `Error updating association type: ${(error as Error).message}`,
                rows_affected: 0
            };
        }
    }

    static async deleteAssociationType(id: string): Promise<ProcessResult> {
        try {
            const result = await AssociationTypeModel.deleteAssociationType(id);
            return result;
        } catch (error) {
            return {
                success: false,
                message: `Error deleting association type: ${(error as Error).message}`,
                rows_affected: 0
            };
        }
    }

    static async getAssociationTypeById(id: string): Promise<ProcessResult> {
        try {
            const result = await AssociationTypeModel.getAssociationTypeById(id);
            return result;
        } catch (error) {
            return {
                success: false,
                message: `Error fetching association type: ${(error as Error).message}`,
                rows_affected: 0
            };
        }
    }
}
