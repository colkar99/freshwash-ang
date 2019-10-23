import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { SignUpComponent } from './core/sign-up/sign-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './core/navbar/navbar.component';
import { UserHomeComponent } from './order/user-home/user-home.component';
import { OneTimeWashComponent } from './order/one-time-wash/one-time-wash.component';
import { MonthlySubscriptionComponent } from './order/monthly-subscription/monthly-subscription.component';
import { YearlySubscriptionComponent } from './order/yearly-subscription/yearly-subscription.component';
import { BookingModelComponent } from './shared/components/booking-model/booking-model.component';
import { MyOrdersComponent } from './order/my-orders/my-orders.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserComponent } from './admin/components/user/user.component';
import { ManageUserComponent } from './admin/components/user/manage-user/manage-user.component';
import { OrderComponent } from './admin/components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    NavbarComponent,
    UserHomeComponent,
    OneTimeWashComponent,
    MonthlySubscriptionComponent,
    YearlySubscriptionComponent,
    BookingModelComponent,
    MyOrdersComponent,
    AdminHomeComponent,
    UserComponent,
    ManageUserComponent,
    OrderComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents:[BookingModelComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
