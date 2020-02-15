import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRequest } from 'src/app/classes/ApiRequest';

@Injectable({
  providedIn: 'root'
})
export class TotalChartPriceService {

  constructor(private httpClient: HttpClient) { }

  postCheckout(requestData: ApiRequest) {
   // return this.httpClient.post("/api/submit", checkout);
    return this.httpClient.post("/api/submit", requestData);
  }
}
