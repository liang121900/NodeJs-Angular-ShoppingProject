import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Slider } from '../model/slider';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<Slider>(null); 
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: Slider) {
    console.log("changeMessage being called!");
    this.messageSource.next(message);
    console.log("This is your messageSource which has been changed!");
    console.log(this.messageSource.getValue());
  }
}
