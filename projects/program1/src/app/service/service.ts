import {Subject , BehaviorSubject} from "rxjs";

export class Service {
  public storeComponent1 : BehaviorSubject<any> = new BehaviorSubject<any>("");
  public storeComponent2 : BehaviorSubject<any> = new BehaviorSubject<any>("");
}
