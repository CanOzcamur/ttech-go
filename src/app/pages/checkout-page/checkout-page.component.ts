import { Component, OnInit } from '@angular/core';
import { CheckoutDataService } from 'src/app/services/checkout-data.service';
import { Checkout } from 'src/app/classes/checkout';
import { Package } from 'src/app/classes/package';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  packages: Package[];
  checkout: Checkout;

  constructor(private checkoutDataService: CheckoutDataService) { }

  ngOnInit() {
    this.checkoutDataService.currentMessage.subscribe(message => this.checkout = message);
    if(this.checkout != null)
    this.packages = this.checkout.packages;
  }
}
