import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdServiceService {

  constructor() { }
  gettoken(){  
    return !!localStorage.getItem("token");  
    }  
}
