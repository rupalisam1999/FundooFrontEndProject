import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/dataService/data.service';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  
  filteredSting:string = '';
  titleSearch:string = '';
  
  @Input() receivedNoteList:any;
  
  @Output() DisplayEvent = new EventEmitter<string>();
 

  constructor(public dialog: MatDialog,private data:DataService) { }

  ngOnInit(): void {
  this.data.currentMessage.subscribe(message  => {
    console.log(message)
    this.titleSearch=message
  } )


  }
 
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '300px',
      height:'auto',
      data:note,
      panelClass: 'my-custom-dialog-class'
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.DisplayEvent.emit("Hello")
      
      
    });
   
  }
  DisplayMessage(event:any){
    this.DisplayEvent.emit("Hello")
  }
 
  
  

}
