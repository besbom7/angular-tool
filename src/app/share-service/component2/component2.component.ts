import { Component } from '@angular/core';
import {ShareService} from "../share-service";

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {
  public value : any = "";
  constructor(private shareService : ShareService) {
    this.shareService.currentValue.subscribe(d => {
      this.value = d;
    })
  }
}
