export interface ProcessResult {
    success: boolean;
    message: string | Array<string>;
    rows_affected?: number;
}