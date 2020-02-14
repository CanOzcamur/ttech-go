export class ApiResponse {
    returnCode: number;
    returnMsg: string;
    data: string;

    constructor(returnCode: number, returnMsg: string, data: string) {
        this.returnCode = returnCode;
        this.returnMsg = returnMsg;
        this.data = data;
    }
}
