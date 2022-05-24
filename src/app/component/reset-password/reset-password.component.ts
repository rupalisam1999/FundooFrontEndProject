import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword!:FormGroup;
  submitted=false;
  token:any;

  constructor(private formBuilder:FormBuilder,private user:UserService,private activeRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.resetPassword = this.formBuilder.group({ 
      Password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required]
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
  OnSubmit(){
    console.log("inside submit")
    if (this.resetPassword.valid) {
      console.log("valid data", this.resetPassword.value);
      let data = {
  
        
        Password:this.resetPassword.value.Password,
        confirmpassword: this.resetPassword.value.confirmpassword
        
      }
      //console.log("helllooo")
      this.user.Resetpassword(data,this.token).subscribe((res: any) => {
        console.log(res);
      })
    }
    else {
      console.log("Invalid data", this.resetPassword.value);
    }
  }
  }



