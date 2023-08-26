import { Component , OnInit } from '@angular/core';
import {ajax} from "rxjs/ajax";
import {map, filter, interval, Subscription, Subject} from "rxjs";

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.scss']
})
export class MapFilterComponent implements OnInit{

  ngOnInit(): void {
      this.map();
      this.filter();
      this.Multicast();
  }

  public map(){
    const request$ = ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1");
    request$.pipe(map ((d : any) => d.title)).subscribe(res => {
      // log for see example
    });

    const request$2 = ajax.getJSON("https://jsonplaceholder.typicode.com/todos");
    request$2.pipe(map ((d : any) => d.map((e : any) => e.title))).subscribe(res => {
      // log for see example
    })
  }

  public filter(){
    const request$ = ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1");
    request$.pipe(filter((f : any) => f.title.length > 5)).subscribe(res => {
      // log for see example
    });
  }

  public Multicast(){
    const _interval = interval(1000)

    // //solution not use multicast เวลามีการ subscribe จะเริ่มปล่อยค่าใหม่ทุกครั้งถ้าไม่ใข multicast
    // _interval.subscribe((i : any) => {
    //   console.log("subscribe1 :", i)
    // });
    // setTimeout(() => {
    //   _interval.subscribe((i : any) => {
    //     console.log("subscribe2 :", i)
    //   });
    // },3000);


    //use Multicast
    //ใช้หลักการของ multicast ให้ สร้าง subject หรือ multicast มา subscribe interval และ next multicast เพื่อ
    // ปล่อยค่าออกไป ให้ตัวอื่นๆมา subscribe multicast แทนที่จะไป subscribe interval โดยตรง
    const multicast = new Subject();

    // const multicast = new BehaviorSubject("0"); use for default subject

    _interval.subscribe((d) => {
      multicast.next(d);
    });

    multicast.subscribe(i => {
      console.log("subscribe1 :", i)
    });

    setTimeout(() => {
      multicast.subscribe((i : any) => {
        console.log("subscribe2 :", i)
      });
    },3000);






  }

}
