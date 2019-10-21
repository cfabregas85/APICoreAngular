import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaymentdetailComponent } from './components/paymentdetail/paymentdetail.component';
import { LoginGuardsGuard } from './services/guards/login-guards.guard';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'card', component: PaymentdetailComponent, canActivate:[LoginGuardsGuard]},
  { path: '', pathMatch:'full',redirectTo:'login'},
  { path: '**', pathMatch:'full',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
