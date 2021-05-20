import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SegmentService } from '../../../../app/segment.service';
import { HttpClient } from '@angular/common/http'

export class listSegment{
  name: any;
  icon: any;
  color: any;
}

@Component({
  selector: 'app-list-segments',
  templateUrl: './list-segments.component.html',
  styleUrls: ['./list-segments.component.css']
})
export class ListSegmentsComponent implements OnInit {

  name: any;
  icon: any;
  color: any;

  lists: listSegment[] = [];

  constructor(private service: SegmentService, private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
  }

  
  opensModel(){
    this.service.form.reset();
    this.service.AddSegments({text:"passing data from parent component"}).subscribe(res=> {
      console.log(res);
      return this.lists;
    });
  }
}
