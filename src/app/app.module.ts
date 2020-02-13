import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PackagePageComponent } from './pages/package-page/package-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CheckoutDataService } from './data/checkout-data.service';
import { PackageCardComponent } from './components/package-card/package-card.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { TotalChartPriceComponent } from './components/total-chart-price/total-chart-price.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    PackagePageComponent,
    CheckoutPageComponent,
    PageNotFoundPageComponent,
    NavbarComponent,
    FooterComponent,
    PackageCardComponent,
    CartItemComponent,
    TotalChartPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CheckoutDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
