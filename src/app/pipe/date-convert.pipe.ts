import { Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateConvert'
})
export class DateConvertPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let date = "";
    if(value){
      let d = moment(new Date(value)).format("DD/MM");
      let y = moment(new Date(value)).format("YYYY");
      date = `${d}/${isNaN(Number(y)) ? "" : Number(y) +543}`;
    }
    return date;
  }

}
