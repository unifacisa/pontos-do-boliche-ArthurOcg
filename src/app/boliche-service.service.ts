import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BolicheServiceService {

  
  constructor() { }



  calcularPontos(jogadas:number[]){
    let result = 0;
    jogadas.forEach(element => {
      result+=element;
    });
    return result;
  }
 
  soma(x:number, y:number): number{
    return x+y;
  }

  isStrike(jogadas: number[], i) : boolean {
    return jogadas[i] === 10;
  }

  isSpare(jogadas: number[], i) : boolean {
    if(i<jogadas.length -1){
      return (jogadas[i] + jogadas[i + 1]) === 10;
    }
    
  }

}
