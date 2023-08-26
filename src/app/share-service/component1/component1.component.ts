import { Component } from '@angular/core';
import {ShareService} from "../share-service";
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {
  public value : any = "";
  constructor(private shareService : ShareService) {
    this.shareService.currentValue.subscribe(d => {
      this.value = d;
    })
  }
}
