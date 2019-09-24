import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-paymentcard',
  templateUrl: './paymentcard.component.html',
  styleUrls: ['./paymentcard.component.css']
})
export class PaymentcardComponent implements OnInit {

  constructor(private servicePayment:PaymentService,
  private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form? :NgForm){   

    if (form != null) {
      form.resetForm();
    }else{
      this.servicePayment.formData={
        PMId: 0,
        CardOwnerName: '',
        CardNumber: '',
        ExpirationDate: '',
        CVV: '',
    }
    }
  }

  onSubmit(form :NgForm){   
    if ( this.servicePayment.formData.PMId == 0) {      
       this.insertPayment();
     }
     else{
         this.updatedPayment();
     }
     this.resetForm(form);
   }
   // Insert Payment
   insertPayment(){
    this.servicePayment.PostPaymentDetail().subscribe(
      res=>{        
        this.toastr.success('Success', 'Payment');
        this.servicePayment.GetAllPayment();
      },
      err=>{
        console.log(err);

      });
   }
   // Updated Payment
   updatedPayment(){
    this.servicePayment.PutPaymentDetail().subscribe(
      res=>{        
        this.toastr.info('Success', 'Payment');
        this.servicePayment.GetAllPayment();
      },
      err=>{
        console.log(err);

      });
   }
}
