import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {

  isShow=false;
  title:any;
  desc:any;
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private note:NoteService,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
 show(){
this.isShow=true;
 }
 close(){
  this.isShow=false;
   console.log(this.title,this.desc);
   let data={
    "title":this.title,
    "description": this.desc,
    "bgColor": "string",
   
    "registerdDate": "2022-05-16T11:05:35.945Z",
    "modifiedDate": "2022-05-16T11:05:35.945Z"

   }
   this.note.addNote(data).subscribe((result:any)=>
   {
     console.log(result);
     
      this.messageEvent.emit("hello")
      this.snackBar.open('Note Added Successfully..!','',{
        duration: 2000,
      });
      
    },error => {
     this.snackBar.open('Please enter correct data','',{
       duration: 2000,
     });
    
   })
  
 }
}
