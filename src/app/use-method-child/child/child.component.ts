import { Component , Input , OnInit} from '@angular/core';
import {Subject} from "rxjs";
//solution 3 ***
import {StateService} from "../state-service";
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements  OnInit{

  //solution 3 ***
  constructor(private stateService : StateService) {
  }
  saveState(){
    console.log("save child");
    document.getElementById("title-text")!.innerText = "save child";
  }
  //solution 2 ***
  // @Input() state! : Subject<any>;

  ngOnInit(): void {
    //solution 2 ***
    // this.state.subscribe(e => {
    //   this.saveState();
    // })

    //solution 3 ***
    this.stateService.state.subscribe(d => {
      this.saveState();
    })


  }





}
