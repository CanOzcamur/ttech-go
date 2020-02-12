import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Checkout } from '../classes/checkout';

@Injectable()
export class CheckoutDataService {

  checkout: Checkout =  null;

//  checkout: Checkout = {
//    packages: [{
//      id: 1,
//      name: "paket",
//      price: 0
//    }]
//  };


  private messageSource = new BehaviorSubject<Checkout>(this.checkout);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(checkout: Checkout) {
    this.messageSource.next(checkout);
    localStorage.setItem('checkout', JSON.stringify(checkout));
  }

  newMessage() {
    this.changeMessage(this.checkout);
    return this.checkout;
  }

}
