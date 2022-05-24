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
  
  
  @Input() receivedNoteList:any;
  @Output() UpdateEvent = new EventEmitter<string>();
  @Output() ArchiveEvent = new EventEmitter<string>();
  @Output() trashEvent = new EventEmitter<string>();
 

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
   // this.subscription = this.data.currentMessage.subscribe(message => this.message = message)


  }
 
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
      data:note,
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.UpdateEvent.emit("Hello")
      
      
    });
   
  }
  archiveMessage(event:any){
    this.ArchiveEvent.emit("Hello")
  }
  trashMessage(event:any){
    this.trashEvent.emit("Hello")
  }
  
  

}
