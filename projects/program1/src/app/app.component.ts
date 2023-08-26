import {AfterViewInit, Component, OnInit , ChangeDetectorRef} from '@angular/core';
import {Service} from './service/service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(private service : Service , private cd : ChangeDetectorRef , public router : Router) {

  }
  changeTab(type : any){
      this.router.navigate([`/${type}`]);
  }

}
