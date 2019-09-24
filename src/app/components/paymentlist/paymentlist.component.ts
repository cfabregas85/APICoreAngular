import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { PaymentDetail } from '../../models/payment.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {

  constructor(private servicePayment:PaymentService,private toastr: ToastrService) { }

  ngOnInit() {
    this.servicePayment.GetAllPayment();
  }

  EditPayment(p:PaymentDetail){
       this.servicePayment.formData= Object.assign({},p);
  }

  DeletePayment(PMId){
    if (confirm('Are you sure to delete this record ?')) {     
    
    this.servicePayment.DeletePaymentDetail(PMId).subscribe(
      res =>{
        this.servicePayment.GetAllPayment(); 
        this.toastr.warning('Deleted successfully', 'Payment');       
      },
      err =>{
        console.log(err);
      }
    )
  }
  }

}
