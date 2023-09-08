import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {

  counter:number = 2;

  decr(){
    this.counter++
  };

  ecr(){
    this.counter--
  };

}


