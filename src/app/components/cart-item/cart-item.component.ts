import { Component, OnInit, Input } from '@angular/core';
import { Package } from 'src/app/classes/package';
import { Checkout } from 'src/app/classes/checkout';
import { CheckoutDataService } from 'src/app/services/checkout-data.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() childPackage: Package;
  checkout: Checkout;
  constructor(private checkoutDataService: CheckoutDataService) { }

  ngOnInit() {
    this.checkoutDataService.currentMessage.subscribe(message => this.checkout = message);
  }

  deletePackageFromCheckout(paket:Package){
    this.checkout.packages.forEach( (item, index) => {
      if(item === paket) 
        this.checkout.packages.splice(index,1);
        this.checkoutDataService.changeMessage(this.checkout);
    });
  }

}
