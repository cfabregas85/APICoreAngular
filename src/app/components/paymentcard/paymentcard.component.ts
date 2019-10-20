import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

@Component({
  selector: 'app-paymentcard',
  templateUrl: './paymentcard.component.html',
  styleUrls: ['./paymentcard.component.css']
})
export class PaymentcardComponent implements OnInit {

  MM: any[] = [];
  YY: any[] = [];

  constructor(private servicePayment:PaymentService,
  private toastr: ToastrService) {      
   }

  ngOnInit() {
    this.resetForm();
    of(this.getMonths()).subscribe(mm => {
      this.MM = mm;
    }); 
    
    of(this.getYears()).subscribe(yy => {
      this.YY = yy;
    }); 
  }

  resetForm(form? :NgForm){   

    if (form != null) {
      form.resetForm();
    }else{
      this.servicePayment.formData = {
        cardId: 0,
        cardOwnerName: '',
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        cvv: '',
      }
    }
  }

  onSubmit(form :NgForm){       
    if ( this.servicePayment.formData.cardId == 0) {      
      this.insertPayment();
      //console.log(form.value);
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

   // 
   getMonths() {
    return [
      { value: '1', name: 'January 01' },
      { value: '2', name: 'February 02' },
      { value: '3', name: 'March 03' },
      { value: '4', name: 'April 04' },
      { value: '5', name: 'May 05' },
      { value: '6', name: 'June 06' },
      { value: '7', name: 'July 07' },
      { value: '8', name: 'August 08' },
      { value: '9', name: 'September 09' },
      { value: '10', name: 'October 10' },
      { value: '11', name: 'November 11' },
      { value: '12', name: 'December 12' }
      
    ];
  }

    getYears() {
      return [
      { value: '19', name: '2019' },
      { value: '22', name: '2020' },
      { value: '21', name: '2021' },
      { value: '22', name: '2022' },
      { value: '23', name: '2023' },
      { value: '24', name: '2024' },
      { value: '25', name: '2025' },
      { value: '26', name: '2026' }
      ];
    }


}
