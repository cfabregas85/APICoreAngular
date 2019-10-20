import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

 formData:Card;
 listCard: Card[];
 readonly rootUrl='https://localhost:44393/api/card'

  constructor(private http:HttpClient) { }

  GetAllPayment(){
    return this.http.get(this.rootUrl).toPromise()
    .then(res => this.listCard = res as Card[]);
  } 

  PostPaymentDetail(){
    console.log(this.formData);
    return  this.http.post(this.rootUrl,this.formData);
  }

  PutPaymentDetail(){
    return  this.http.put(this.rootUrl+'/'+this.formData.cardId,this.formData);
  }
  
  DeletePaymentDetail(id){
    return  this.http.delete(this.rootUrl+'/'+ id);
  }

  
}



