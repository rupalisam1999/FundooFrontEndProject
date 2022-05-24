import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/noteService/note.service';
import { ArchiveComponent } from '../archive/archive.component';
import { DisplayComponent } from '../display/display.component';
import { GetALLNotesComponent } from '../get-allnotes/get-allnotes.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId:any;
  data:any;
  isArchive:any;
  isTrash:any;
 
  @Input()notedata:any;
  @Output() ArchiveEvent = new  EventEmitter<string>();
  @Output() trashEvent = new  EventEmitter<string>();
  @Output() deleteEvent = new  EventEmitter<string>();

  isTrashComponent= false;
  isDisplayComponent= false;
  isArchiveComponent=false;
  
  
  
  colorArray = [{Colorcode:"white", name:"White"},{Colorcode:"#f28b82", name:"Red"},{Colorcode:"#fbbc04", name:"Orange"},{Colorcode:"#fff475", name:"Yellow"},{Colorcode:"#ccff90", name:"Green"},{Colorcode:"#a7ffeb", name:"Teel"},
  {Colorcode:"#cbf0f8", name:"Blue"},{Colorcode:"#aecbfa", name:"Dark-Blue"},{Colorcode:"#d7aefb", name:"Purple"},{Colorcode:"#fdcfe8", name:"Pink"},{Colorcode:"#e6c9a8", name:"Brown"},{Colorcode:"#e8eaed", name:"Gray"}];
  


  constructor(private note : NoteService,private snackBar:MatSnackBar,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.isArchive = this.notedata.isArchive;
    // this.isTrash = this.notedata.isTrash;
    let SelComp = this.route.snapshot.component;

    if(SelComp==GetALLNotesComponent)
    {
      this.isDisplayComponent=true;
    }

    if(SelComp==TrashComponent)
    {
      this.isTrashComponent=true;
    }

    if(SelComp==ArchiveComponent)
    {
      this.isArchiveComponent=true;
    }
  }

   

  
  archive(note:any) {
    this.isArchive=false;
    this.note.archieveNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response);
      this.ArchiveEvent.emit(response)
      if(response.message=true){
        this.snackBar.open('Note Archived succesful', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
      
      else
       {
        this.snackBar.open('Note Unarchived', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
  })
    
  }
Unarchive() {
  let data = {
    isArchived: false,
  }
  this.note.archieveNote(this.notedata.noteId).subscribe((res:any)=>{
    console.log("unarchive a note",res);
   this.ArchiveEvent.emit(res)
  })
}
trash(note:any) {
 // this.isTrash = !note.isTrash;
  this.note.trashNote(this.notedata.noteId,this.data).subscribe((response: any) => {
    console.log(response);
    this.trashEvent.emit(response)
    this.snackBar.open('Note trashed successfully..', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
   }, error=>this.snackBar.open('failed to trash', '', {
    duration: 2000,
    verticalPosition: 'bottom'

  })
  )
    
  }
  deleteNotesPermanantly() {
    this.note.deleteNotesPermanantly(this.notedata.noteId).subscribe((response: any) => {
      console.log("Note Deleted Successfully", response);
       this.deleteEvent.emit(response);

      this.snackBar.open('Note Deleted Successfully', '', {
        duration: 3000,
      
      })
    })
  }
   restoreNotes()
   {
    let data = {
      noteIdList: [this.noteId.noteList],
      isDeleted: false,
     }
   this.note.trashNote(this.noteId.notedata,this.data).subscribe((res:any)=>{
    console.log("note restored",res);
    
    })
   }
   changeColor(color:any){
    console.log(color);

    this.note.changeColor(this.notedata.noteId,color).subscribe((response: any) => {
      console.log(response);
      
      this.trashEvent.emit(response)
      this.snackBar.open('Color changed successfully..', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
    //  }, error=>this.snackBar.open('failed to change color', '', {
    //   duration: 2000,
    //   verticalPosition: 'bottom'

    // })
    )
  }

  
  

}
   


