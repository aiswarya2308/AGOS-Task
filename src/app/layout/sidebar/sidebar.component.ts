import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddsegmentComponent } from './addsegment/addsegment.component';
import { SegmentService } from '../../segment.service';
import { HttpClient } from '@angular/common/http'

export class Segment{
  name: any;
  icon: any;
  description: any;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  name = 'Angular';
  selectedEmoji:any;
  

  select($event: any)
  {
    this.selectedEmoji = $event.emoji;
  }


  list: Segment[] = [];
  constructor(private _service: SegmentService, private dialog: MatDialog, private http: HttpClient) { }
  searchKey: any;
  ngOnInit(): void {
  }

  openModel(){
    this._service.form.reset();
    this._service.AddSegment({text:"passing data from parent component"}).subscribe(res=> {
      console.log(res);
      return this.list;
    });
  }
  onSearchClear(){
    this.searchKey = "";
  }

}
