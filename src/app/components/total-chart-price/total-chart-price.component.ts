import { Component, OnInit, Input } from '@angular/core';
import { CheckoutDataService } from 'src/app/data/checkout-data.service';
import { Checkout } from 'src/app/classes/checkout';
import { PackagePageService } from 'src/app/pages/package-page/package-page.service';
import { Product } from 'src/app/classes/product';
import { TotalChartPriceService } from './total-chart-price.service';
import { ApiResponse } from 'src/app/classes/ApiResponse';
import { ApiRequest } from "src/app/classes/ApiRequest";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/classes/user';
import { Package } from 'src/app/classes/package';
@Component({
  selector: 'app-total-chart-price',
  templateUrl: './total-chart-price.component.html',
  styleUrls: ['./total-chart-price.component.css']
})
export class TotalChartPriceComponent implements OnInit {
  checkout: Checkout;
  products: Product;
  packages: Package[] = [];
  totalAmount: number = 0;
  requestData: ApiRequest = {
    subscriber: {} as User,
    packages: []
  };
  show: boolean = false;
  phoneNumber: string;

  constructor(private checkoutDataService: CheckoutDataService, private packagePageService: PackagePageService, private totalChartPrice: TotalChartPriceService, private modalService: NgbModal) { }

  ngOnInit() {
    this.checkoutDataService.currentMessage.subscribe(message => {
      this.checkout = message;

      if (this.checkout == null) {
        this.show = false;
      } else if (this.checkout.packages.length == 0) {
        this.show = false
      } else {
        this.show = true;
        this.getProducts();
      }
    });
  }

  calculateTotalAmountAndPackages() {
    this.products.data.packages.forEach((serviceElement) => {
      this.checkout.packages.forEach((checkoutElement) => {
        if (serviceElement.id === checkoutElement.id) {
          this.totalAmount += serviceElement.amount;
          this.packages.push(serviceElement);
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
        this.packages = [];
        this.calculateTotalAmountAndPackages();
      });
  }

  purchaseOrder(successOrder, failOrder) {
    this.requestData.subscriber = this.products.data.subscriber;
    this.requestData.packages = this.packages;

    this.totalChartPrice.postCheckout(this.requestData).subscribe((response: ApiResponse) => {
      if (response.returnCode == 0) {
        console.log(response.returnMsg);
        this.phoneNumber = localStorage.getItem("phoneNumber");
        localStorage.clear();
        localStorage.setItem("phoneNumber", this.phoneNumber);
        this.orderStatus(successOrder);
      } else {
        this.orderStatus(failOrder);
      }
    });
  }

  openDocumentDialog(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openContractText(content) {
    this.modalService.dismissAll();
    this.modalService.open(content, { size: 'xl' });
  }

  orderStatus(content) {
    this.modalService.dismissAll();
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }
}
