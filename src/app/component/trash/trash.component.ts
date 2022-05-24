import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteList:any;
  @Output() trashEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes(){
    this.note.getAllNotes().subscribe((response:any)=>{
      console.log(response.data);
      this.noteList=response.data;
      this.noteList.reverse();
      this.noteList = this.noteList.filter((object:any)=>{
        return  object.isTrash===true
      })
    }
  )}
  
  trashMessage(event:any){
    this.getAllNotes();
  }
  deleteMessage(event:any){
    this.getAllNotes();
  }
}


