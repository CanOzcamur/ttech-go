import { Component, OnInit } from '@angular/core';
import { CheckoutDataService } from 'src/app/data/checkout-data.service';
import { Checkout } from 'src/app/classes/checkout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  checkout: Checkout;
  checkoutLength: number = 0;
  constructor(private checkoutDataService: CheckoutDataService) { }

  ngOnInit() {
    this.checkoutDataService.currentMessage.subscribe(message => {
      this.checkout = message
      if (this.checkout != null) {
        this.checkoutLength = this.checkout.packages.length;
      }
    });
  }

}
