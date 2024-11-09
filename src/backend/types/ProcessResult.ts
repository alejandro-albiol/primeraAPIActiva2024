export interface ProcessResult {
    success: boolean;
    message: string | Array<string>;
    rowsAffected?: number;
}