import { UserModel } from "../models/userModel.js";
import { ProcessResult } from "../types/ProcessResult.js";
import { User } from "../types/User.js";

export class UserController {
    static async newUser(user: User): Promise<ProcessResult> {
        try {
            const result = await UserModel.saveNewUser(user);
            return result;
        } catch (error: any) {
            if (error.code === "23505") {
                const columnMatch = error.detail.match(/Key \((.*?)\)=/);
                const columnName = columnMatch ? columnMatch[1] : 'campo';
                return { success: false, message: `El ${columnName} ya existe en la base de datos`, rowsAffected: 0 };
            }
            return error;
        }
    }

    static async getAllUsers(): Promise<ProcessResult> {
        try {
            const result = await UserModel.getUsers();
            return result;
        } catch (error: any) {
            return error;
        }
    }

    static async getUser(id: string): Promise<ProcessResult> {
        try {
            const result = await UserModel.findUserById(id);
            return result;
        } catch (error: any) {
            return error;
        }
    }

    static async deleteUser(id: string): Promise<ProcessResult> {
        try {
            const result = await UserModel.deleteUserById(id);
            return result;
        } catch (error: any) {
            return error;
        }
    }
}