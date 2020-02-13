import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Checkout } from 'src/app/classes/checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutPageService {

  constructor(private httpClient: HttpClient) { }

  postCheckout(checkout: Checkout) {
    return this.httpClient.post("/checkout", checkout);
  }
}
