import { Component, OnInit } from '@angular/core';
import { PackagePageService } from './package-page.service';
import { User } from 'src/app/classes/user';
import { Package } from 'src/app/classes/package';

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrls: ['./package-page.component.css']
})
export class PackagePageComponent implements OnInit {
  phoneNumber: string;
  userPackages: User[];
  packages: Package[];
  flipped = false;

  constructor(private packagePageService: PackagePageService) { }

  ngOnInit() {
    this.phoneNumber = localStorage.getItem("phoneNumber")
    this.packagePageService.getUser(this.phoneNumber).subscribe(data => {
      this.userPackages = data as User[];
      this.packages = this.userPackages[0].packages;
      localStorage.setItem("userPackages", JSON.stringify(this.userPackages));
    });
  }

  flipIt() {
    this.flipped = !this.flipped;
  }

}
