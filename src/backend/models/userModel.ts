import pool from "../config/configDb.js";
import { ProcessResult } from "../types/ProcessResult.js";
import { User } from "../types/User.js";

export class UserModel {
    static async saveNewUser(user: User): Promise<ProcessResult> {
        try {
            const queryString = `INSERT INTO "user" ("user_name", "name", "first_surname", "password", "email") VALUES ($1, $2, $3, $4, $5)`;
            const values = [user.user_name, user.name, user.first_surname, user.password, user.email];
            const result = await pool.query(queryString, values);
            if (result.rowCount && result.rowCount > 0) {
                return {
                    success: true,
                    message: 'User created',
                    rows_affected: result.rowCount
                };
            } else {
                return {
                    success: false,
                    message: 'Failed to create user',
                    rows_affected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error creating user: ${(error as Error).message}`,
                rows_affected: 0
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
                    rows_affected: result.rowCount,
                };
            } else {
                return {
                    success: false,
                    message: 'No users found',
                    rows_affected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error finding users: ${(error as Error).message}`,
                rows_affected: 0
            };
        }
    }

    static async findUserById(id: string): Promise<ProcessResult> {
        try {
            const queryString = `SELECT * FROM "user" WHERE "id" = $1`;
            const result = await pool.query(queryString, [id]);
            if (result.rowCount && result.rowCount > 0) {
                return {
                    success: true,
                    message: result.rows,
                    rows_affected: result.rowCount
                };
            } else {
                return {
                    success: false,
                    message: 'User not found',
                    rows_affected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error finding user: ${(error as Error).message}`,
                rows_affected: 0
            };
        }
    }

    static async deleteUserById(id: string): Promise<ProcessResult> {
        try {
            const queryString = `DELETE FROM "user" WHERE "id" = $1`;
            const result = await pool.query(queryString, [id]);
            
            if (result.rowCount && result.rowCount > 0) {
                return {
                    success: true,
                    message: `User deleted successfully.`,
                    rows_affected: result.rowCount
                };
            } else {
                return {
                    success: false,
                    message: 'User not found',
                    rows_affected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error deleting user: ${(error as Error).message}`
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
                    message: `User updated successfully.`,
                    rows_affected: result.rowCount
                };
            } else {
                return {
                    success: false,
                    message: 'User not found',
                    rows_affected: 0
                };
            }
        } catch (error) {
            return {
                success: false,
                message: `Error updating user: ${(error as Error).message}`,
                rows_affected: 0
            };
        }
    }
}