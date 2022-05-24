import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http:HttpClient) { }
  postService(url:string,payload:any,token:boolean,httpOptions:any){
    console.log(url,payload)
   return this.http.post(url,payload,token && httpOptions)
  }
  putService(url:string,payload:any,token:boolean,httpOptions:any){
    return this.http.put(url,payload,token && httpOptions)

  }
  getService(url:string,token:boolean,httpOptions:any){
    return this.http.get(url,token && httpOptions)
  }
  deleteService(url:string,data:any,token:boolean,httpOptions:any){
    return this.http.delete(url,token && httpOptions)
  }
}
