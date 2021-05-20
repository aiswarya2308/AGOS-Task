import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSegmentsComponent } from './layout/segments/list-segments/list-segments.component';
import { AddsegmentComponent } from './layout/sidebar/addsegment/addsegment.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const routes: Routes = [
  {path:'', component: ListSegmentsComponent},
  {path:'segments', component:ListSegmentsComponent},
  {path:'addsegment', component:AddsegmentComponent},
  {path:'sidebar', component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
