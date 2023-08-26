import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateString'
})
export class DateStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(!value){
        return "";
    }
    if(value == "A"){
      return "Apple"
    }else if(value == "B"){
      return "Banana"
    }else if(value == "C"){
      return "Coconut"
    }else{
      return "Empty";
    }
  }

}
