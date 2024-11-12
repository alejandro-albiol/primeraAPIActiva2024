import pool from "../config/configDb.js";
import { ProcessResult } from "../types/ProcessResult.js";
import { User } from "../types/User.js";

export  class UserModel {
    static async saveNewUser(user: User): Promise<ProcessResult> {
        try {
            const queryString = `INSERT INTO "user" ("userName", "name", "first_surname", "password", "email") VALUES ('${user.userName}', '${user.name}', '${user.first_surname}', '${user.password}','${user.email}')`;
            const result = await pool.query(queryString);
            if (result.rowCount && result.rowCount > 0) {
                return {
                    success: true,
                    message: 'Usuario creado',
                    rowsAffected: result.rowCount
                };
            } else {
                return {
                    success: false,
                    message: 'No se pudo crear el usuario',
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al crear usuario: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }

    static async getUsers(): Promise<ProcessResult> {
        try {
            const queryString = `SELECT * FROM "user"`;
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
                    message: 'No se encontraron usuarios',
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al buscar usuarios: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }

    static async findUserById(id: string): Promise<ProcessResult> {
        try {
            const queryString = `SELECT * FROM "user" WHERE "id" = ${id}`;
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
                    message: 'No se encontró el usuario',
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al buscar usuario: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }

    static async deleteUserById(id: string): Promise<ProcessResult> {
        try {
            const queryString = `DELETE FROM "user" WHERE "id" = ${id}`;
            const result = await pool.query(queryString);
            
            if (result.rowCount && result.rowCount > 0) {
                return {
                    success: true,
                    message: `Usuario eliminado correctamente.`,
                    rowsAffected: result.rowCount
                };
            } else {
                return {
                    success: false,
                    message: 'No se encontró el usuario',
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al eliminar usuario: ${(error as Error).message}`
            };
        }
    }
    static async updateUserById(id: string, updates: { [key: string]: any }): Promise<ProcessResult> {
        try {
            const queryString = `UPDATE "user" SET ${Object.keys(updates).map((key, index) => `${key} = '${updates[key]}'`).join(', ')} WHERE "id" = ${id}`;
            const result = await pool.query(queryString);
            if (result.rowCount && result.rowCount > 0) {
                return {
                    success: true,
                    message: `Usuario actualizado correctamente.`,
                    rowsAffected: result.rowCount
                };
            } else {
                return {
                    success: false,
                    message: 'No se encontró el usuario',
                    rowsAffected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error al actualizar usuario: ${(error as Error).message}`,
                rowsAffected: 0
            };
        }
    }
}