export class Package {
    id: number;
    name: string;
    description: string
    amount: number;
    expiryDate: Date;

    constructor(id: number, name: string, description: string, amount: number, expiryDate: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.expiryDate = expiryDate;
    }
}
