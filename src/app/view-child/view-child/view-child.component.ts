import { Component , OnInit , AfterViewInit , AfterViewChecked ,ViewChild , ElementRef} from '@angular/core';
import {BehaviorSubject} from "rxjs";
@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements  OnInit{

  onShow : boolean = false;
  @ViewChild("divTest" , {read :ElementRef<HTMLDivElement>}) set divTest(el : ElementRef<HTMLDivElement>){
    this.divTest$.next(el);
  }

  get _divTest(){
    return this.divTest$.value;
  }

  //Observible ใช้สำหรับปล่อยค่า
  divTest$ = new BehaviorSubject<ElementRef<HTMLDivElement> | undefined>(undefined);

  ngOnInit(): void {
    this.divTest$.subscribe(res => {
      if(res){
          res.nativeElement.style.fontSize = '50px';
          res.nativeElement.style.color = "red";
      }
      console.log(this._divTest);
    })
  }

}
