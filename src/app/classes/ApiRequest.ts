import { User } from './user';
import { Package } from './package';

export class ApiRequest {
    subscriber: User;
    packages: Package[];

    constructor(subscriber: User, packages: Package[]) {
        this.subscriber = subscriber;
        this.packages = packages;
    }
}

