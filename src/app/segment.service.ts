import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddlistComponent } from './layout/segments/add-list/addlist.component';
import { AddsegmentComponent } from './layout/sidebar/addsegment/addsegment.component';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  constructor(private _http:HttpClient, private dialog: MatDialog) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    Name: new FormControl(''),
    Icon: new FormControl(0),
    Description: new FormControl(''),
    color: new FormControl('')
  });

  public AddSegment(data: any = []): Observable<any>{
    var dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'add-more-pop';
    dialogConfig.data = data;
    let dialogRef: MatDialogRef<AddsegmentComponent>;
    dialogRef = this.dialog.open(AddsegmentComponent, dialogConfig);
    return dialogRef.afterClosed();
  }
 
  public AddSegments(data: any = []): Observable<any>{
    var dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'add-more-pop';
    dialogConfig.data = data;
    let dialogRef: MatDialogRef<AddlistComponent>;
    dialogRef = this.dialog.open(AddlistComponent, dialogConfig);
    return dialogRef.afterClosed();
  }
}
