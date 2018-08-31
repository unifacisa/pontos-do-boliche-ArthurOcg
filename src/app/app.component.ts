import { Component } from '@angular/core';
import { BolicheServiceService } from "src/app/boliche-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Boliche';
  quadro: number[] = [];
  dados = {
    quadro: [],
    pinos: 0,
    pontos: 0
  };
  descricao = "";
  jogadas = [];


  constructor(private bolicheService: BolicheServiceService) {
    this.dados.quadro = this.quadro;

  }




  ngOnInit(): void {
    
   
  }

  onSubmit(): void {

    console.log(this.dados.pinos);
    console.log(this.quadro);
    this.quadro.push(this.dados.pinos);
    console.log(this.quadro);
    this.dados.pinos = 0;
    this.dados.pontos = this.bolicheService.calcularPontos(this.quadro);
    this.criarJogadas(this.quadro);
    console.log(this.jogadas);

  }

  criarJogadas(pontos: number[]): void {

    let quadro = this.criarQuadro();
    for (let i = 0; i <= pontos.length; i+=2) {
      if (i < pontos.length - 1) {
        if (!this.cheio(quadro)) {
          quadro.push(pontos[i]);
          if(quadro.length === 1 && !this.isStrike(quadro)){
            quadro.push(pontos[i+1]);
            this.jogadas.push(quadro);
          }else if (this.isSpare(quadro) || this.isStrike(quadro)) {
            this.jogadas.push(quadro);
            quadro = this.criarQuadro();
          }          
        } else {
          quadro = this.criarQuadro();
          quadro.push(pontos[i]);
        }
      }
    }
  }

  criarQuadro(): Array<number> {
    return new Array<number>();
  }

  cheio(quadro: number[]): boolean {
    if (quadro.length === 2) {
      return true;
    } return false;
  }

  isSpare(quadro: number[]): boolean {
    if (quadro[0] + quadro[1] === 10) {
      return true;
    } return false;
  }

  isStrike(quadro: number[]): boolean {
    if (quadro[0] === 10) {
      return true;
    } return false;
  }

  getDescricao(quadro: number[]): string {
    if (this.isStrike(quadro)) {
      return 'Strike';
    } else if (quadro.length == 2) {
      if (this.isSpare(quadro)) {
        return 'Spare';
      } else {
        return "Normal";
      }
    }
    return "";
  }




}

