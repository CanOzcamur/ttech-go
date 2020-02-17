import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/classes/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagePageService {

  constructor(private httpClient: HttpClient) { }

  getProduct(phoneNumber:string): Observable<Product> {
    return this.httpClient.post<Product>("/api/inquiryPackages?msisdn=" + phoneNumber, { title: 'Angular POST Request Example' });
    //return this.httpClient.get<Product>("http://www.mocky.io/v2/5e4534b33000005d3561499a");
  }
}
