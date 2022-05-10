import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base=environment.baseUrl;
   

  constructor(private httpservice:HttpService) { }
  registration(data:any){
    let header={headers:new HttpHeaders({'Content-Type':'application/json'})
    
  }
  console.log(data)
   return this.httpservice.postService(this.base+'User/register',data,false,header)
   
   
   
  }
  login(data:any){
    console.log(data)
    let header={
      headers:new HttpHeaders({
        'content-type': 'application/json'
      })
    } 
    return this.httpservice.postService(this.base+`User/Login/${data.Email}/${data.Password}`, {} ,false,header)

}
Forgotpassword(data:any){
  console.log(data)
  let header={
    headers:new HttpHeaders({
      'content-type': 'application/json'
    })
  } 
  return this.httpservice.postService(this.base+`User/ForgotPassword/${data.Email}`, {} ,true,header)

}
  
}
