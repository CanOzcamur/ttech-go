export class User {

    id: number;
    msisdn: string;
    name: string;
    surname: string;
    corporate: boolean;

    constructor(id: number, name: string, msisdn: string, surname: string, corporate: boolean) {
        this.id = id;
        this.name = name;
        this.msisdn = msisdn;
        this.surname = surname;
        this.corporate = corporate;
    }
}
