import { Component, OnInit, Input } from '@angular/core';
import { CheckoutDataService } from 'src/app/data/checkout-data.service';
import { Checkout } from 'src/app/classes/checkout';
import { PackagePageService } from 'src/app/pages/package-page/package-page.service';
import { Product } from 'src/app/classes/product';
import { TotalChartPriceService } from './total-chart-price.service';
import { ApiResponse } from 'src/app/classes/ApiResponse';
import { ApiRequest } from 'src/app/classes/apiRequest';
import { Data } from 'src/app/classes/data';
import { Subscriber } from 'rxjs';
import { Package } from 'src/app/classes/package';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-total-chart-price',
  templateUrl: './total-chart-price.component.html',
  styleUrls: ['./total-chart-price.component.css']
})
export class TotalChartPriceComponent implements OnInit {
  checkout: Checkout;
  products: Product;
  totalAmount: number = 0;
  request: ApiRequest;
  constructor(private checkoutDataService: CheckoutDataService, private packagePageService: PackagePageService, private totalChartPrice: TotalChartPriceService) { }

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

  purchaseOrder() {
    this.request.subscriber = this.products.data.subscriber;
    this.request.packages = this.products.data.packages

    this.totalChartPrice.postCheckout(this.request).subscribe((response: ApiResponse) => {
      if (response.returnCode === 0) {
        console.log(response.returnMsg);
      }
    });
  }
}
