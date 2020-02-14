import { Component, OnInit, Input } from '@angular/core';
import { Package } from 'src/app/classes/package';
import { Checkout } from 'src/app/classes/checkout';
import { CheckoutDataService } from 'src/app/data/checkout-data.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() childProduct: Package;
  checkout: Checkout;
  constructor(private checkoutDataService: CheckoutDataService) { }

  ngOnInit() {
    this.checkoutDataService.currentMessage.subscribe(message => this.checkout = message);
  }

  deletePackageFromCheckout(paket:Package){
    const index: number = this.checkout.packages.indexOf(paket);
    this.checkout.packages = this.checkout.packages.splice(index,1);
    this.checkoutDataService.changeMessage(this.checkout);
  }

}
