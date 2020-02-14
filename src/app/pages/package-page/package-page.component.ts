import { Component, OnInit } from '@angular/core';
import { PackagePageService } from './package-page.service';
import { Product } from 'src/app/classes/product';
import { Package } from 'src/app/classes/package';
import { Checkout } from 'src/app/classes/checkout';
import { CheckoutDataService } from 'src/app/data/checkout-data.service';

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrls: ['./package-page.component.css']
})
export class PackagePageComponent implements OnInit {
  phoneNumber: string;
  products: Product;
  packages: Package[];
  checkout: Checkout = {
    packages: []
  };
  flag: boolean;

  constructor(private packagePageService: PackagePageService, private checkoutDataService: CheckoutDataService) { }

  ngOnInit() {
    this.checkoutDataService.currentMessage.subscribe(message => this.checkout = message);
    if (this.checkout === null) {
      console.log("null");
      this.checkout = {
        packages: []
      };
    }
    this.phoneNumber = localStorage.getItem("phoneNumber")
    this.packagePageService.getProduct(this.phoneNumber).subscribe(data => {
      this.products = data as Product;
      this.packages = this.products.data.packages;
      localStorage.setItem("products", JSON.stringify(this.products));
    });
  }

  addToCheckout(paket: Package) {
    this.flag = true;
    if (this.checkout.packages.length == 0) {
      this.checkout.packages.push(paket);
    } else {
      this.checkout.packages.forEach((element) => {
        if (element.id == paket.id) {
          this.flag = false;
        }
      });

      if (this.flag == true) {
        this.checkout.packages.push(paket);
      }
    }
    this.checkoutDataService.changeMessage(this.checkout);
  }
}
