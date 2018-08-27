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
  
  jogadas=[];


  constructor(private bolicheService: BolicheServiceService) {
 
    this.dados.quadro=this.quadro;
    this.criarJogadas([]);
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

  criarJogadas(array:number[]):void{

    let quadro:number[];
    for(let i=0; i < array.length ; i=+2){
      if(array[i+1]){
        quadro.push(array[i]);
        quadro.push(array[i+1]);
        this.jogadas.push(quadro);
        quadro=[];        
      }else{
        quadro.push(array[i]);
        this.jogadas.push(quadro);
        quadro=[]; 
      }
      
    }

  }
   

}

