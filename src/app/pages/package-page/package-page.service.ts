import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/classes/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagePageService {

  constructor(private httpClient: HttpClient) { }

  getProduct(phoneNumber:string): Observable<Product[]> {
    //return this.httpClient.get<Product[]>("/api/inquiryPackages?msisdn=" + phoneNumber);
    return this.httpClient.get<Product[]>("http://www.mocky.io/v2/5e45210e300000e33c614892");
  }
}
