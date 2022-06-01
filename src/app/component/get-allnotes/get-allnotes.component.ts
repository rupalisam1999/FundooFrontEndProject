import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-allnotes',
  templateUrl: './get-allnotes.component.html',
  styleUrls: ['./get-allnotes.component.scss']
})
export class GetALLNotesComponent implements OnInit {
  noteList:any;
  gridList:any

  constructor(private note:NoteService) {
   
  }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(){
     this.note.getAllNotes().subscribe((Response:any)=>{
      console.log(Response);
      this.noteList=Response.data;
      this.noteList = this.noteList.filter((object:any)=>{
        return object.isArchive===false && object.isTrash===false 
      })
    })
  }
  
  DisplayMessage(event:any){
    this.getAllNotes();
  }
  
  

}
