import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { AppComponentComponent } from './app-component/app-component.component';
import {ShareService} from "./share-service";


@NgModule({
  declarations: [
    Component1Component,
    Component2Component,
    AppComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    Component1Component,
    Component2Component,
    AppComponentComponent
  ],
  providers : [ShareService]
})
export class ShareServiceModule { }
