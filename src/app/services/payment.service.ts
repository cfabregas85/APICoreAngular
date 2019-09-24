import { Injectable } from '@angular/core';
import { PaymentDetail } from '../models/payment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

 formData:PaymentDetail;
 listPayment: PaymentDetail[];
 readonly rootUrl='https://localhost:44374/api/PaymentDetails'

  constructor(private http:HttpClient) { }

  GetAllPayment(){
    return this.http.get(this.rootUrl).toPromise()
    .then(res => this.listPayment = res as PaymentDetail[]);
  } 

  PostPaymentDetail(){
    return  this.http.post(this.rootUrl,this.formData);
  }

  PutPaymentDetail(){
    return  this.http.put(this.rootUrl+'/'+this.formData.PMId,this.formData);
  }
  
  DeletePaymentDetail(id){
    return  this.http.delete(this.rootUrl+'/'+ id);
  }

  
}



