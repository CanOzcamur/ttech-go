import { Package } from './package';

export class Checkout {
    packages: Package[];
    constructor(packages: Package[]) {
        this.packages = packages;
    }
}
