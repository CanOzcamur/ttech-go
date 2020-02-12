import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PackagePageComponent } from './pages/package-page/package-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found-page/page-not-found-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full'},
  { path: 'user', component: UserPageComponent },
  { path: 'package', component: PackagePageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: '**', component: PageNotFoundPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserPageComponent, PackagePageComponent, CheckoutPageComponent, PageNotFoundPageComponent]
