import {Component, Output, Input, EventEmitter, OnInit} from '@angular/core';
import {debounceTime , Subject} from 'rxjs';

@Component({
  selector: 'app-pipe-debounce-time',
  templateUrl: './pipe-debounce-time.component.html',
  styleUrls: ['./pipe-debounce-time.component.scss']
})
export class PipeDebounceTimeComponent implements OnInit{

  @Output() EventInput = new EventEmitter();
  @Output() EventSearch = this.EventInput.pipe(debounceTime(400));

  searchData(value : any){
    this.EventInput.emit(value);
    this.subject.next(value);
  }

  //create subject
  public subject = new Subject();

  ngOnInit(): void {
    this.subject.pipe(debounceTime(400)).subscribe(d => {
      console.log(d);
    })
  }



  //exemple for use component
  //<app-pipe-debounce-time (EventSearch)="onSearch($event)" ></app-pipe-debounce-time>
}
