import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'

import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import {MatButtonModule} from '@angular/material/button';
import { AddsegmentComponent } from './layout/sidebar/addsegment/addsegment.component';
import { SegmentService } from './segment.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { HttpClientModule } from '@angular/common/http'
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AddlistComponent } from './layout/segments/add-list/addlist.component';
import { ListSegmentsComponent } from './layout/segments/list-segments/list-segments.component';

@NgModule({
  declarations: [
    AppComponent,
    AddsegmentComponent,
    AddlistComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: SidebarComponent},
      {path: "addsegment", component: AddsegmentComponent},
      {path: "addlist", component: AddlistComponent},
      {path: "listsegment", component: ListSegmentsComponent},
      {path: "sidebar", component: SidebarComponent}
    ]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PickerModule,
    EmojiModule
  ],
  providers: [SegmentService],
  bootstrap: [AppComponent],
  entryComponents:[AddsegmentComponent]
})
export class AppModule { }
