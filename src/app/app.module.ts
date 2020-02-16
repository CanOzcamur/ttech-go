import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PackagePageComponent } from './pages/package-page/package-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CheckoutDataService } from './data/checkout-data.service';
import { PackageCardComponent } from './components/package-card/package-card.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { TotalChartPriceComponent } from './components/total-chart-price/total-chart-price.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
export function setupLocalStorageFactory(checkoutDataService: CheckoutDataService): Function {

  if (localStorage.getItem('checkout') !== null) {
    checkoutDataService.changeMessage(JSON.parse(localStorage.getItem('checkout')));
  }
  return () => { };
}

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    PackagePageComponent,
    CheckoutPageComponent,
    PageNotFoundPageComponent,
    NavbarComponent,
    PackageCardComponent,
    CartItemComponent,
    TotalChartPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MDBBootstrapModule
  ],
  providers: [CheckoutDataService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupLocalStorageFactory,
      deps: [CheckoutDataService],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
