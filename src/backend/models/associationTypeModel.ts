import pool from "../config/configDb.js";
import { ProcessResult } from "../types/ProcessResult.js";
import { AssociationType } from "../types/AssociationType.js";

export class AssociationTypeModel {
    static async getAssociationTypes(): Promise<ProcessResult> {
        try {
            const queryString = `SELECT * FROM association_type`;
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
                    message: "No se encontraron tipos de asociación",
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al buscar tipos de asociación: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }

    static async createAssociationType(type: AssociationType): Promise<ProcessResult> {
        try {
            const queryString = `INSERT INTO association_type (type_name) VALUES ('${type.type_name}') RETURNING *`;
            const result = await pool.query(queryString);
            if (result.rowCount && result.rowCount > 0) {
                return {
                    success: true,
                    message: "Nuevo tipo de asociación creado.",
                    rowsAffected: result.rowCount,
                };
            } else {
                return {
                    success: false,
                    message: "Error al crear el nuevo tipo de asociación.",
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al crear el tipo de asociación: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }

    static async updateAssociationType(type: AssociationType): Promise<ProcessResult> {
        try {
            const queryString = `UPDATE association_type SET type_name = '${type.type_name}' WHERE id = '${type.id}' RETURNING *`;
            const result = await pool.query(queryString);
            if (result.rowCount && result.rowCount > 0) {
                return {
                    success: true,
                    message: "Tipo de asociación actualizado correctamente",
                    rowsAffected: result.rowCount,
                };
            } else {
                return {
                    success: false,
                    message: "Error al actualizar el tipo de asociación",
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al actualizar el tipo de asociación: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }

    static async deleteAssociationType(id: string): Promise<ProcessResult> {
        try {
            const queryString = `DELETE FROM association_type WHERE id = '${id}' RETURNING *`;
            const result = await pool.query(queryString);
            if (result.rowCount && result.rowCount > 0) {
                return {
                    success: true,
                    message: "Tipo de asociación eliminado correctamente",
                    rowsAffected: result.rowCount,
                };
            } else {
                return {
                    success: false,
                    message: "Error al eliminar el tipo de asociación",
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al eliminar el tipo de asociación: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }

    static async getAssociationTypeById(id: string): Promise<ProcessResult> {
        try {
            const queryString = `SELECT * FROM association_type WHERE id = '${id}'`;
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
                    message: "Tipo de asociación no encontrado",
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al buscar el tipo de asociación: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }
}