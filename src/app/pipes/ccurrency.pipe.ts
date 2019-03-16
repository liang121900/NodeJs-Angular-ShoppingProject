import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ccurrency'
})
export class CcurrencyPipe implements PipeTransform {


  public constructor(){

  }

  /**
   * <p>Price  : {{price | currency :"URO"}}</p> ...
   * @param value - the value which you want to pipe
   * @param args 
   */
  transform(value: number, place: number=2): any {
    //All the mapping between difference current we can have into database 
    return  'Rs. ' +(value*76).toFixed(place);
  }

}
