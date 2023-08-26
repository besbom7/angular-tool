import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchMapComponent } from './switch-map/switch-map.component';



@NgModule({
  declarations: [
    SwitchMapComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    SwitchMapComponent
  ]
})
export class SwitchMapModule { }
