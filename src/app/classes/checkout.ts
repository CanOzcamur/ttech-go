import { Package } from './package';
import { User } from './user';

export class Checkout {
    user: User;
    package: Package[];

    constructor(user: User, packages: Package[]) {
        this.user = user;
        this.package = packages;
    }
}
