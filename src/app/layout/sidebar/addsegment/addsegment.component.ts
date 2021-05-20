import { Component, Inject, OnInit } from '@angular/core';
import { SegmentService } from '../../../segment.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { HttpClient ,HttpClientModule } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addsegment',
  templateUrl: './addsegment.component.html',
  styleUrls: ['./addsegment.component.css']
})
export class AddsegmentComponent implements OnInit {
  name = 'Angular';
  selectedEmoji:any;
  

  select($event: any)
  {
    this.selectedEmoji = $event.emoji;
  }
  
    
    segment: any = {};
  constructor(private service: SegmentService, private fb: FormBuilder,
     public _service: SegmentService, public dialog: MatDialogRef<AddsegmentComponent>, 
     @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    
  }

  onClose(){
    this._service.form.reset();
    this.dialog.close();
  }
  onCancel(){
    this._service.form.reset();
    this.dialog.close();
  }
  onSubmit(){
    console.log(this._service.form);
    if(this._service.form.invalid){
      return;
    }
    this.dialog.close(this._service.form.value);
  }
  addForm(addForm: any){
    throw new Error('Method not implemented.');
  }
}
