import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserInfo } from '../../models/userInfo.model.';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new UserInfo();
  form:FormGroup;

  constructor(private _loginService: LoginService, private router:Router) {}

  ngOnInit() {
     //Form  Validation
     this.form = new FormGroup({        
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',Validators.required)        
    })
  };
  
  SaveData(){

    this.user = {
       id: null,
       name :"",
       email: this.form.value.email,
       password: this.form.value.password       
    }
     this._loginService.login(this.user)
     .subscribe(res =>{
         this.router.navigateByUrl('/card');
          console.log(res);

     },
      error=>{
        console.log(error);
      });    
    console.log(this.form);
  }

}
