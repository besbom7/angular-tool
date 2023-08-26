import { Component , OnInit } from '@angular/core';
import {ServiceService} from "../service.service";
import {Subject , Observable , switchMap , debounceTime , catchError ,of} from "rxjs";
@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit{

  constructor(private service : ServiceService) {
  }

  public subject = new Subject();

  ngOnInit(): void {
    this.subject.pipe(
      switchMap((value : any) => {
        return this.service.getData(value);
      })
    ).subscribe((D) => {
      console.log(D)
    });


    //ใช้ในกรณีมี Error แล้ว switch หยุดทำงาน
    // this.subject.pipe(
    //   debounceTime(400),
    //   switchMap((value : any) => {
    //     return this.service.getData(value).pipe(
    //       catchError(error => {
    //         console.log(error);
    //         return of(null);
    //       })
    //     )
    //   })
    // ).subscribe((D) => {
    //   console.log(D)
    // })

  }

  getData(value : string){
    this.subject.next(value);
  }

}
