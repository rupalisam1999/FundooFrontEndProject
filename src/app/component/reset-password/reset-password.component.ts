import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword!:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.resetPassword = this.formBuilder.group({ 
      password: ['', [Validators.required, Validators.minLength(6)]],
      cPassword: ['', Validators.required]
    });
  }
  OnSubmit(){
    console.log("inside submit")
  }


}
