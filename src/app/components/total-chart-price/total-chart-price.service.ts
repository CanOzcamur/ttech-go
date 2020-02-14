import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Checkout } from 'src/app/classes/checkout';

@Injectable({
  providedIn: 'root'
})
export class TotalChartPriceService {

  constructor(private httpClient: HttpClient) { }

  postCheckout(checkout: Checkout) {
   // return this.httpClient.post("/api/submit", checkout);
    return this.httpClient.post("https://100.64.25.112/api/submit", checkout);
  }
}
