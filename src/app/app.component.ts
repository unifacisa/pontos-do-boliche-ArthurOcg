import { Component } from '@angular/core';
import { BolicheServiceService } from 'src/app/boliche-service.service';


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
  descricao = '';
  jogadas = [];
  lista = this.criarQuadro();


  constructor(private bolicheService: BolicheServiceService) {
    this.dados.quadro = this.quadro;

  }




  ngOnInit(): void {
  }

  onSubmit(): void {

    console.log(this.dados.pinos);
    console.log(this.quadro);

    this.quadro.push(this.dados.pinos);

    if (!this.cheio(this.lista)) {
      if (this.lista.length === 1) {
        this.lista.push(this.dados.pinos);
        this.jogadas.push(this.lista);
        this.lista = this.criarQuadro();
      } else {
        this.lista.push(this.dados.pinos);
        if (this.isStrike(this.lista)) {
          this.lista.push(0);
          this.jogadas.push(this.lista);
          this.lista = this.criarQuadro();
        }
      }
    } else {
      this.jogadas.push(this.lista);
      this.lista = this.criarQuadro();
      this.lista.push(this.dados.pinos);
    }
    this.dados.pinos = 0;
    this.dados.pontos = this.bolicheService.calcularPontos(this.quadro);
    console.log(this.jogadas);

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
        return 'Normal';
      }
    }
    return '';
  }




}

