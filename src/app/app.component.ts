import { Component, OnInit } from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ngOnInit() : void {
    }

    onSearch(value:any){
        console.log(value);
        
    }

}

