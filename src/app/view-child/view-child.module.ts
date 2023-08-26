import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChildComponent } from './view-child/view-child.component';



@NgModule({
  declarations: [
    ViewChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewChildComponent
  ]
})
export class ViewChildModule { }
