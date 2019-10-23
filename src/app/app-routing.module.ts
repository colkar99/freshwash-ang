import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { SignUpComponent } from './core/sign-up/sign-up.component';
import { UserHomeComponent } from './order/user-home/user-home.component';
import { MonthlySubscriptionComponent } from './order/monthly-subscription/monthly-subscription.component';
import { OneTimeWashComponent } from './order/one-time-wash/one-time-wash.component';
import { YearlySubscriptionComponent } from './order/yearly-subscription/yearly-subscription.component';
import { MyOrdersComponent } from './order/my-orders/my-orders.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserComponent } from './admin/components/user/user.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'sign-up', component: SignUpComponent},
{path: 'home', component: UserHomeComponent},
{path: 'one-time-wash', component: OneTimeWashComponent},
{path: 'monthly-subscription', component: MonthlySubscriptionComponent},
{path: 'yearly-subscription', component: YearlySubscriptionComponent},
{path: 'my-orders', component: MyOrdersComponent},
{path: 'admin/home', component: AdminHomeComponent, pathMatch:'prefix', children:[
  {path: 'users', component: UserComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
