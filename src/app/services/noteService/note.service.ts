import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  base=environment.baseUrl;
  token:any;
  noteId:any;
  color:any

  constructor(private httpservice:HttpService) {
    this.token=localStorage.getItem('token')
   }
  addNote(data:any)
  {
    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json' ,
        'Authorization': 'Bearer '+this.token 
           
      })
    }

    return this.httpservice.postService(this.base+'Note/addNote', data, true, header);
  }
  

getAllNotes(){
     let header={
       headers:new HttpHeaders({
         'content-type': 'application/json',
         'Authorization': 'Bearer '+this.token
       })
     }
     return this.httpservice.getService(this.base+'Note/GetAllNotes', true, header)
}
updateService(data:any,noteId:any)
  {
    console.log("token",this.token);

    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json', 
        'Authorization':'Bearer '+this.token    
      })
    }
    return this.httpservice.putService(this.base+`Note/Update/${noteId}`,data,true,header)
  }
  archieveNote( noteId: any) {

    console.log("token", this.token)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.putService(this.base + `Note/ArchieveNote/${noteId}`,{}, true, header)
  }
  trashNote( noteId: any, data:any) {

    console.log("token", this.token)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    return this.httpservice.putService(this.base + `Note/IsTrash/${noteId}`,data, true, header)
  }

  deleteNotesPermanantly( noteId: any) {

    console.log("token", this.token)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpservice.deleteService(this.base + `Note/Delete/${noteId}`,{}, true, header)
  }
  changeColor( noteId: any,color:any) {

    console.log("token", this.token,noteId)

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpservice.putService(this.base+`Note/ChangeColorNote/${noteId}?color=${color}`,{}, true, header)
  }
}
