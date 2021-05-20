import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSegmentsComponent } from './list-segments/list-segments.component';



@NgModule({
  declarations: [
    ListSegmentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ListSegmentsComponent]
})
export class SegmentsModule { }
