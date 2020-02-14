import { Package } from './package';
import { Product } from './product';

export class Data {
    packages: Package[];

    constructor(packages: Package[]) {
        this.packages = packages;
    }
}
