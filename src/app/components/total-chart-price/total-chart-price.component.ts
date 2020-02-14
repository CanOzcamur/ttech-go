import { Component, OnInit, Input } from '@angular/core';
import { CheckoutDataService } from 'src/app/data/checkout-data.service';
import { Checkout } from 'src/app/classes/checkout';
import { CheckoutPageService } from 'src/app/pages/checkout-page/checkout-page.service';
import { PackagePageService } from 'src/app/pages/package-page/package-page.service';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-total-chart-price',
  templateUrl: './total-chart-price.component.html',
  styleUrls: ['./total-chart-price.component.css']
})
export class TotalChartPriceComponent implements OnInit {
  checkout: Checkout;
  products: Product;
  totalAmount: number = 0;
  constructor(private checkoutDataService: CheckoutDataService, private packagePageService: PackagePageService) { }

  ngOnInit() {
    this.checkoutDataService.currentMessage.subscribe(message => {
      this.checkout = message;
      this.getProducts();
    });
  }

  calculateTotalAmount() {
    this.products.data.packages.forEach((serviceElement) => {
      this.checkout.packages.forEach((checkoutElement) => {
        if (serviceElement.id === checkoutElement.id) {
          this.totalAmount += serviceElement.amount;
        }
      })
    });
  }

  getProducts() {
    this.packagePageService.getProduct(localStorage.getItem("phoneNumber")).subscribe(data => {
      this.products = data as Product;
    },
      (err) => console.error(err),
      () => {
        this.totalAmount = 0;
        this.calculateTotalAmount();
      });
  }

}
