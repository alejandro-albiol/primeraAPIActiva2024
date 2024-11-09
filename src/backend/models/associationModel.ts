import pool from "../config/configDb.js";
import { ProcessResult } from "../types/ProcessResult.js";
import { Association } from "../types/Association.js";

export class AssociationModel {
    static async saveNewAssociation(association: Association): Promise<ProcessResult> {
        try {
            const queryString = `INSERT INTO "association" ("name", "description", "type", "location", "founded_date", "contact_email") VALUES ('${association.name}', '${association.description}', '${association.type}', '${association.location}', '${association.founded_date}', '${association.contact_email}')`;
            const result = await pool.query(queryString);
            if (result.rowCount && result.rowCount > 0) {
                return {
                    success: true,
                    message: 'Asociación creada',
                    rowsAffected: result.rowCount
                };
            } else {
                return {
                    success: false,
                    message: 'No se pudo crear la asociación',
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al crear asociación: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }

    static async getAssociations(): Promise<ProcessResult> {
        try {
            const queryString = `SELECT * FROM "association"`;
            const result = await pool.query(queryString);
            if (result.rowCount && result.rowCount > 0) {
                return {
                    success: true,
                    message: result.rows,
                    rowsAffected: result.rowCount,
                };
            } else {
                return {
                    success: false,
                    message: 'No se encontraron asociaciones',
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al buscar asociaciones: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }

    static async getAssociationById(id: string): Promise<ProcessResult> {
        try {
            const queryString = `SELECT * FROM "association" WHERE "id" = ${id}`;
            const result = await pool.query(queryString);
            if (result.rowCount && result.rowCount > 0) {
                return {
                    success: true,
                    message: result.rows,
                    rowsAffected: result.rowCount
                };
            } else {
                return {
                    success: false,
                    message: 'No se encontró la asociación',
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al buscar asociación: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }

    static async deleteAssociationById(id: string): Promise<ProcessResult> {
        try {
            const queryString = `DELETE FROM "association" WHERE "id" = ${id}`;
            const result = await pool.query(queryString);
            
            if (result.rowCount && result.rowCount > 0) {
                return {
                    success: true,
                    message: `Asociación eliminada correctamente.`,
                    rowsAffected: result.rowCount
                };
            } else {
                return {
                    success: false,
                    message: 'No se encontró la asociación',
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al eliminar asociación: ${(error as Error).message}`
            };
        }
    }
}