import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/classes/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagePageService {

  constructor(private httpClient: HttpClient) { }

  getUser(phoneNumber:string): Observable<User[]> {
    //return this.httpClient.get<User[]>("/User/" + phoneNumber); http://www.mocky.io/v2/5e442a8d310000a4e03b0587
    return this.httpClient.get<User[]>("http://www.mocky.io/v2/5e443c1f310000a4e03b060d");
  }
}
