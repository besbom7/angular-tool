import {AfterViewInit, Component , OnDestroy} from '@angular/core';
import {Service} from "../service/service";
import {BehaviorSubject} from "rxjs";
@Component({
  selector: 'app-lazyload2',
  templateUrl: './lazyload2.component.html',
  styleUrls: ['./lazyload2.component.scss']
})
export class Lazyload2Component implements AfterViewInit , OnDestroy{
  constructor(private service : Service) {

  }

  value : any = "";

  ngAfterViewInit(): void {
    this.value = this.service.storeComponent2.value;
    console.log(this.service.storeComponent1.value);
  }

  ngOnDestroy(): void {
    this.service.storeComponent2.next(this.value);
  }
}
