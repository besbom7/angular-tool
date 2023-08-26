import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { DateStringPipe } from './date-string.pipe';
import { DateConvertPipe } from './date-convert.pipe';



@NgModule({
  declarations: [
    PipeComponentComponent,
    DateStringPipe,
    DateConvertPipe
  ],
  imports: [
    CommonModule
  ],
  exports :[
    PipeComponentComponent
  ]
})
export class PipeModule { }
