import { Package } from './package';
import { User } from './user';

export class Data {
    subscriber: User;
    packages: Package[];

    constructor(subscriber: User, packages: Package[]) {
        this.subscriber = subscriber;
        this.packages = packages;
    }
}
