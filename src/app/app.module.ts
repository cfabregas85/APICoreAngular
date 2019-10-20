import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentdetailComponent } from './components/paymentdetail/paymentdetail.component';
import { PaymentlistComponent } from './components/paymentlist/paymentlist.component';
import { PaymentcardComponent } from './components/paymentcard/paymentcard.component';
import { FormsModule } from "@angular/forms";
import { PaymentService } from './services/payment.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentdetailComponent,
    PaymentlistComponent,
    PaymentcardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
