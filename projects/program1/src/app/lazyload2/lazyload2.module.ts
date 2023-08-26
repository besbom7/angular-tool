import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Lazyload2RoutingModule } from './lazyload2-routing.module';
import { Lazyload2Component } from './lazyload2.component';


@NgModule({
  declarations: [
    Lazyload2Component
  ],
  imports: [
    CommonModule,
    Lazyload2RoutingModule,
    FormsModule
  ]
})
export class Lazyload2Module { }
