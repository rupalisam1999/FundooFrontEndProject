import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpassword!:FormGroup;
  submitted=false;

  constructor(private formBuilder:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.forgotpassword = this.formBuilder.group({ 
      Email: ['', [Validators.required, Validators.email]],
  });
}
OnSubmit(){
  
  console.log("inside submit")
  if (this.forgotpassword.valid) {
    console.log("valid data", this.forgotpassword.value);
    let data = {

      Email: this.forgotpassword.value.Email,

      
    }
    //console.log("helllooo")
    this.user.Forgotpassword(data).subscribe((res: any) => {
      console.log(res);
    })
  }
  else {
    console.log("Invalid data", this.forgotpassword.value);
  }
}


}
