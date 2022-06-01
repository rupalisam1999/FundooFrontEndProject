import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from
'@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/dataService/data.service';
//import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

 
  title:any;
  description:any;
  noteId:any;
  color:any
  
  constructor( private note:NoteService,private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}
  ngOnInit(): void {
    this.title=this.data.title;
    this.description=this.data.description;
    
   console.log(this.data)
  
  }
  

  onNoClick(): void {

     let data=
    {
      
      title:this.title,
      description:this.description,
      "bgColor": "string",
      
      "registerdDate": "2022-05-17T15:08:53.725Z",
      "modifiedDate": "2022-05-17T15:08:53.725Z"
    }
    this.note.updateService(data,this.data.noteId).subscribe((res:any)=>
    {
      console.log("update response=",res);
      
      this.snackBar.open('Update Note Successfully..!','',{
        duration: 2000,
      });
      
    },error => {
     this.snackBar.open('Please enter correct data','',{
       duration: 2000,
     });
     
     
    })
    this.dialogRef.close();
    
  }
  
 
  

  
  }


