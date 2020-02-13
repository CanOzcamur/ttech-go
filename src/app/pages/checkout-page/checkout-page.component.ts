import { Component, OnInit } from '@angular/core';
import { CheckoutDataService } from 'src/app/data/checkout-data.service';
import { Checkout } from 'src/app/classes/checkout';
import { CheckoutPageService } from './checkout-page.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  checkout: Checkout;

  constructor(private checkoutDataService: CheckoutDataService, private checkoutPageService: CheckoutPageService) { }

  ngOnInit() {
    this.checkoutDataService.currentMessage.subscribe(message => this.checkout = message);

  }

  checkoutPackages() {
    this.checkoutPageService.postCheckout(this.checkout);
  }

}
