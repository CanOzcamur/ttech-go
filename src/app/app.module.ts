import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PackagePageComponent } from './pages/package-page/package-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    PackagePageComponent,
    CheckoutPageComponent,
    PageNotFoundPageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
