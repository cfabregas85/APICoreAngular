import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { PaymentDetail } from '../../models/payment.model';
import { ToastrService } from 'ngx-toastr';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {

  constructor(private servicePayment:PaymentService,private toastr: ToastrService) { }

  ngOnInit() {
    this.servicePayment.GetAllPayment();
    console.log(this.servicePayment.GetAllPayment());
  }

  EditPayment(p:Card){      
       this.servicePayment.formData= Object.assign({},p);
       console.log( this.servicePayment.formData);
  }

  DeletePayment(CardId:string){
    if (confirm('Are you sure to delete this record ?')) {  
      
      console.log(CardId);
    
    this.servicePayment.DeletePaymentDetail(CardId).subscribe(
     res =>{
        this.servicePayment.GetAllPayment(); 
        this.toastr.warning('Card # : ' + res + ' has been deleted successfully', 'Card');       
       },
      err =>{
         console.log(err);
       }
    )
  }
  }

}
