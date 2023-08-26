import {AfterViewInit, Component, OnInit , OnDestroy} from '@angular/core';
import {Service} from "../service/service";
@Component({
  selector: 'app-lazyload',
  templateUrl: './lazyload.component.html',
  styleUrls: ['./lazyload.component.scss']
})
export class LazyloadComponent implements OnInit , OnDestroy{

    value : any = "";

    constructor(private service : Service) {

    }

  ngOnInit(): void {
    this.value = this.service.storeComponent1.value;
    console.log(this.service.storeComponent2.value);
  }

  public saveState(){
      this.service.storeComponent1.next(this.value);
  }

  ngOnDestroy(): void {
    this.saveState();
  }


}
