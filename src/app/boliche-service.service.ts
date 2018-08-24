import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BolicheServiceService {

  constructor() { }


  LIMITE = 10;

  soma(x:number, y:number): number{
    return x+y;
  }


}
