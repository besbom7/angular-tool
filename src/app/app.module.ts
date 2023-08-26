import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoremIpsumComponent} from './lorem-component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import {PipeDebounceTimeModule} from './pipe-debounce-time/pipe-debounce-time.module';
import {PipeModule} from './pipe/pipe.module';
import {ViewChildModule} from './view-child/view-child.module';
import {SwitchMapModule} from'./switch-map/switch-map.module';
import {MapFilterModule} from'./map-filter/map-filter.module';
import {ShareServiceModule} from'./share-service/share-service.module';
import {UseMethodChildModule} from'./use-method-child/use-method-child.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoremIpsumComponent,
    ScrollSpyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipeDebounceTimeModule,
    PipeModule,
    ViewChildModule,
    SwitchMapModule,
    HttpClientModule,
    MapFilterModule,
    ShareServiceModule,
    UseMethodChildModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
