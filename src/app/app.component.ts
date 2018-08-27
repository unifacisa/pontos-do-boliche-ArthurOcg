import { Component} from '@angular/core';
import { BolicheServiceService } from "src/app/boliche-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'Boliche';
  quadro: Array<number> = new Array<number>();
  dados = {
      quadro:[],
      pinos:0,
      pontos: 0
  };
  


  constructor(private bolicheService: BolicheServiceService) {
 
    this.dados.quadro=this.quadro;
  }


  

  ngOnInit(): void {
    
  }

  onSubmit(): void{

    console.log(this.dados.pinos);
    this.quadro.push(this.dados.pinos);
    console.log(this.quadro);
    this.dados.pinos = 0;
    this.dados.pontos = this.bolicheService.calcularPontos(this.quadro);
    
  }
   

}

