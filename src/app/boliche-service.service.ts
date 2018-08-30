import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BolicheServiceService {
  static LIMITE = 10;

  constructor() { }



  calcularPontos(jogadas: number[]) {
    let result = 0;
    let quadros = 0;

    for (let index = 0; index < jogadas.length && quadros < BolicheServiceService.LIMITE; quadros++) {
      result += this.somaPontosQuadro(jogadas,index);
      let proxQuadro = this.getProximoQuadro(jogadas, index);

      if (proxQuadro < jogadas.length - 1) {
        if (this.isStrike(jogadas, index)) {
          result += jogadas[proxQuadro] + jogadas[proxQuadro + 1];
        } else if (this.isSpare(jogadas, index)) {
          result += jogadas[proxQuadro];
        }
      }

      index = proxQuadro;
    }
    
    return result;
  }

  somaPontosQuadro(quadro: number[], i): number {
    if (this.isStrike(quadro, i)) {
      return quadro[i];
    } else if (i < quadro.length - 1) {
      return quadro[i] + quadro[i + 1];
    }
    //quando só tem um lançamento
    return quadro[i];
  }

  isStrike(jogadas: number[], i): boolean {
    return jogadas[i] === 10;
  }

  isSpare(jogadas: number[], i): boolean {
    if (i < jogadas.length - 1) {
      return (jogadas[i] + jogadas[i + 1]) === 10;
    }

  }
  // retorna indice do inicio do quadro
  getProximoQuadro(jogadas: number[], i): number {
    if (this.isStrike(jogadas, i)) {
      return i + 1;
    }
    return i + 2;
  }

}
