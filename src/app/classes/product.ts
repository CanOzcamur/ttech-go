import { Data } from './data';

export class Product {
    returnCode: number;
    returnMsg: string;
    data: Data;

    constructor(returnCode: number, returnMsg: string, data: Data) {
        this.returnCode = returnCode;
        this.returnMsg = returnMsg;
        this.data = data
    }
}
