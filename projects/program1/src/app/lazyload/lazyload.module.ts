import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LazyloadRoutingModule } from './lazyload-routing.module';
import { LazyloadComponent } from './lazyload.component';


@NgModule({
  declarations: [
    LazyloadComponent
  ],
  imports: [
    CommonModule,
    LazyloadRoutingModule,
    FormsModule
  ]
})
export class LazyloadModule { }
