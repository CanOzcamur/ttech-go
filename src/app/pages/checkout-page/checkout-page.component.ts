import { Component, OnInit } from '@angular/core';
import { CheckoutDataService } from 'src/app/data/checkout-data.service';
import { Checkout } from 'src/app/classes/checkout';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  checkout: Checkout;

  constructor(private checkoutDataService: CheckoutDataService) { }

  ngOnInit() {
    this.checkoutDataService.currentMessage.subscribe(message => this.checkout = message);

  }

}
