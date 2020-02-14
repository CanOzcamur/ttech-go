import { Component, OnInit } from '@angular/core';
import { CheckoutDataService } from 'src/app/data/checkout-data.service';
import { Checkout } from 'src/app/classes/checkout';
import { CheckoutPageService } from './checkout-page.service';
import { Package } from 'src/app/classes/package';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  packages: Package[];
  checkout: Checkout;

  constructor(private checkoutDataService: CheckoutDataService, private checkoutPageService: CheckoutPageService) { }

  ngOnInit() {
    this.checkoutDataService.currentMessage.subscribe(message => this.checkout = message);
    this.packages = this.checkout.packages;
  }

  checkoutPackages() {
    this.checkoutPageService.postCheckout(this.checkout);
  }

}
