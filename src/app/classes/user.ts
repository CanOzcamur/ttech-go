import { Package } from './package';

export class User {
    id: number;
    name: string;
    phone: string;
    packages: Package[];

    constructor(id: number, name: string, phone: string, packages: Package[]) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.packages = packages;
    }
}
