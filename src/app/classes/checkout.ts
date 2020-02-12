import { Package } from './package';
import { User } from './user';

export class Checkout {
    packages: Package[];

    constructor(packages: Package[]) {
        this.packages = packages;
    }
}
