import { Component, OnInit } from '@angular/core';
import { PackagePageService } from './package-page.service';
import { User } from 'src/app/classes/user';
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
  userPackages: User[];
  packages: Package[];
  checkout: Checkout = {
    packages: []
  };

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
    this.packagePageService.getUser(this.phoneNumber).subscribe(data => {
      this.userPackages = data as User[];
      this.packages = this.userPackages[0].packages;
      localStorage.setItem("userPackages", JSON.stringify(this.userPackages));
    });
  }

  addToCheckout(paket: Package) {
    if (this.checkout.packages.length == 0) {
      this.checkout.packages.push(paket);
      console.log(paket);
    } else {
      console.log("else");
      this.checkout.packages.forEach((element) => {
        console.log(element.id);
        if (element.id !== paket.id) {
          this.checkout.packages.push(paket);
        }
      });
    }
    this.checkoutDataService.changeMessage(this.checkout);
  }
}
