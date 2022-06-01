import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  private info = new Subject<any>();
  public store = this.info.asObservable();


  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  nextDataUpdate(text:any){
    this.info.next(text);
  }
}

