import { Component , OnInit , ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import {StateService} from "../state-service";
//solution 1 ****
// import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements  OnInit{
  //solution 1 ****
  // @ViewChild(ChildComponent) child! : ChildComponent;

  //solution 2 ****
  // public state : Subject<any> = new Subject<any>();

  constructor(private stateService : StateService) {
  }

  ngOnInit(): void {
    //solution 1 ****
    // setTimeout(() => {
    //   this.child.saveState();
    // } , 1000)

    //solution 2 ****
    // setTimeout(() => {
    //   this.state.next("test");
    // },10)

    setTimeout(() => {
      this.stateService.state.next("");
    },10)
  }
}
