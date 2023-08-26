import {Subject , BehaviorSubject} from "rxjs";

export class StateService{
  public state : Subject<any> = new Subject<any>();
}
