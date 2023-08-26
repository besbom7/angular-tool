import { Component } from '@angular/core';
import {ShareService} from "../share-service";

@Component({
  selector: 'app-app-component',
  templateUrl: './app-component.component.html',
  styleUrls: ['./app-component.component.scss']
})
export class AppComponentComponent {
  constructor(private shareService : ShareService) {
  }
  public setValue(value : any){
    this.shareService.setValue(value);
  }
}
