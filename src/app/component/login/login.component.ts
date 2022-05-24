import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/userService/user.service';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  
  

  constructor(private formBuilder: FormBuilder, private user: UserService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
 
  OnSubmit() {
    this.submitted = true;
    console.log("inside submit")
    if (this.loginForm.valid) {
      console.log("valid data", this.loginForm.value);
      let data = {

        Email: this.loginForm.value.Email,

        Password: this.loginForm.value.Password,
      }
      //console.log("helllooo")
      this.user.login(data).subscribe((res: any) => {
        console.log(res.message);
       localStorage.setItem('token',res.message);
       this.snackBar.open('login Successfull  !','',{
        duration: 5000,
      });
      
    },error => {
     this.snackBar.open('Please enter correct data','',{
       duration: 2000,
     });
       
      })
    }
    else {
      console.log("Invalid data", this.loginForm.value);
    }
  }
}

