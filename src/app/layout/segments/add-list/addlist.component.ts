import { Component, Inject, OnInit } from '@angular/core';
import { SegmentService } from '../../../segment.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { HttpClient ,HttpClientModule } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListSegmentsComponent } from '../list-segments/list-segments.component';


@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {
  name = 'Angular';
  selectedEmoji:any;
  

  select($event: any)
  {
    this.selectedEmoji = $event.emoji;
  }
  
  public colors: any[] = [
      {name: 'rgba(207, 223, 255, 1)', color: 'rgba(207, 223, 255, 1)'},
      {name: 'rgba(156, 199, 255, 1)', color: 'rgba(156, 199, 255, 1)'},
      {name: 'rgba(45, 127, 249, 1)', color: 'rgba(45, 127, 249, 1)'},
      {name: 'rgba(0, 103, 255, 1)', color: 'rgba(0, 103, 255, 1)'},
      {name: 'rgba(0, 84, 209, 1)', color: 'rgba(0, 84, 209, 1)'},

      {label: 'rgba(208, 240, 253, 1)', color: 'rgba(208, 240, 253, 1)'},
      {label: 'rgba(119, 209, 243, 1)', color: 'rgba(119, 209, 243, 1)'},
      {label: 'rgba(24, 191, 255, 1)', color: 'rgba(24, 191, 255, 1)'},
      {label: 'rgba(64, 131, 172, 1)', color: 'rgba(64, 131, 172, 1)'},
      {label: 'rgba(11, 118, 183, 1)', color: 'rgba(11, 118, 183, 1)'},
      
      {label: 'rgba(194, 245, 233, 1)', color: 'rgba(194, 245, 233, 1)'},
      {label: 'rgba(114, 221, 195, 1)', color: 'rgba(114, 221, 195, 1)'},
      {label: 'rgba(32, 217, 210, 1)', color: 'rgba(32, 217, 210, 1)'},
      {label: 'rgba(123, 200, 195, 1)', color: 'rgba(123, 200, 195, 1)'},
      {label: 'rgba(6, 160, 155, 1)', color: 'rgba(6, 160, 155, 1)'},
      
      {label: 'rgba(255, 179, 200, 1)', color: 'rgba(255, 179, 200, 1)'},
      {label: 'rgba(255, 140, 173, 1)', color: 'rgba(255, 140, 173, 1)'},
      {label: 'rgba(255, 140, 173, 1)', color: 'rgba(255, 140, 173, 1)'},
      {label: 'rgba(255, 0, 73, 1)', color: 'rgba(255, 0, 73, 1)'},
      {label: 'rgba(218, 2, 64, 1)', color: 'rgba(218, 2, 64, 1)'},

      {label: 'rgba(255, 227, 175, 1)', color: 'rgba(255, 227, 175, 1)'},
      {label: 'rgba(255, 214, 140, 1)', color: 'rgba(255, 214, 140, 1)'},
      {label: 'rgba(255, 197, 92, 1)', color: 'rgba(255, 197, 92, 1)'},
      {label: 'rgba(253, 178, 43, 1)', color: 'rgba(253, 178, 43, 1)'},
      {label: 'rgba(232, 149, 0, 1)', color: 'rgba(232, 149, 0, 1)'},
      
      {label: 'rgba(255, 159, 242, 1)', color: 'rgba(255, 159, 242, 1)'},
      {label: 'rgba(254, 103, 233, 1)', color: 'rgba(254, 103, 233, 1)'},
      {label: 'rgba(246, 56, 220, 1)', color: 'rgba(246, 56, 220, 1)'},
      {label: 'rgba(255, 0, 220, 1)', color: 'rgba(255, 0, 220, 1)'},
      {label: 'rgba(214, 0, 184, 1)', color: 'rgba(214, 0, 184, 1)'},

      {label: 'rgba(255, 181, 152, 1)', color: 'rgba(255, 181, 152, 1)'},
      {label: 'rgba(255, 158, 121, 1)', color: 'rgba(255, 158, 121, 1)'},
      {label: 'rgba(255, 120, 68, 1)', color: 'rgba(255, 120, 68, 1)'},
      {label: 'rgba(255, 71, 0, 1)', color: 'rgba(255, 71, 0, 1)'},
      {label: 'rgba(197, 55, 0, 1)', color: 'rgba(197, 55, 0, 1)'},

      {label: 'rgba(175, 181, 255, 1)', color: 'rgba(175, 181, 255, 1)'},
      {label: 'rgba(142, 150, 255, 1)', color: 'rgba(142, 150, 255, 1)'},
      {label: 'rgba(107, 118, 255, 1)', color: 'rgba(107, 118, 255, 1)'},
      {label: 'rgba(49, 64, 255, 1)', color: 'rgba(49, 64, 255, 1)'},
      {label: 'rgba(0, 19, 255, 1)', color: 'rgba(0, 19, 255, 1)'},
      
      {label: 'rgba(131, 204, 139, 1)', color: 'rgba(131, 204, 139, 1)'},
      {label: 'rgba(97, 199, 108, 1)', color: 'rgba(97, 199, 108, 1)'},
      {label: 'rgba(32, 201, 51, 1)', color: 'rgba(32, 201, 51, 1)'},
      {label: 'rgba(0, 181, 20, 1)', color: 'rgba(0, 181, 20, 1)'},
      {label: 'rgba(51, 138, 23, 1)', color: 'rgba(51, 138, 23, 1)'},
      
      {label: 'rgba(238, 238, 238, 1)', color: 'rgba(238, 238, 238, 1)'},
      {label: 'rgba(204, 204, 204, 1)', color: 'rgba(204, 204, 204, 1)'},
      {label: 'rgba(172, 172, 172, 1)', color: 'rgba(172, 172, 172, 1)'},
      {label: 'rgba(102, 102, 102, 1)', color: 'rgba(102, 102, 102, 1)'},
      {label: 'rgba(68, 68, 68, 1)', color: 'rgba(68, 68, 68, 1)'},
    ];
    

  constructor(private fb: FormBuilder,
    public service: SegmentService, public dialog: MatDialogRef<ListSegmentsComponent>, 
    @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
  }

  
  onClose(){
    this.service.form.reset();
    this.dialog.close();
  }
  onCancel(){
    this.service.form.reset();
    this.dialog.close();
  }
  onSubmit(){
    console.log(this.service);
    
    this.dialog.close(this.service.form.value);
  }
  addForm(addForm: any){
    throw new Error('Method not implemented.');
  }
}
