import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  packageSearch(phoneNumber: string){
    if(phoneNumber != localStorage.getItem('phoneNumber')){
      localStorage.clear();
    }
    
    localStorage.setItem('phoneNumber', phoneNumber);
  }

}
