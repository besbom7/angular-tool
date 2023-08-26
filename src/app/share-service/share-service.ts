import {Subject , Observable , BehaviorSubject} from "rxjs";

export class ShareService{

  constructor() {
  }
  public value : any = "";
  private state = new BehaviorSubject(this.value);
  public currentValue = this.state.asObservable();
  public setValue(value:any){
    this.state.next(value);
  }

}
