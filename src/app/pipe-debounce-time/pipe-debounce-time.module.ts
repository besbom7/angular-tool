import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDebounceTimeComponent } from './pipe-debounce-time/pipe-debounce-time.component';



@NgModule({
  declarations: [
    PipeDebounceTimeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipeDebounceTimeComponent
  ]
})
export class PipeDebounceTimeModule { }
