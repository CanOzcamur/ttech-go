import { Package } from './package';
import { Subscriber } from './subscriber';

export class Product {
    subscriber: Subscriber;
    packages: Package[];

    constructor(subscriber: Subscriber, packages: Package[]) {
        this.subscriber = subscriber;
        this.packages = packages
    }
}
