import { Component} from '@angular/core';
import { BolicheServiceService } from "src/app/boliche-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'Boliche';
  quadro: number[];
  dados = {
      quadro:[],
      pinos:0,
      pontos: 0
  };
  descricao = "";
  jogadas=[];


  constructor(private bolicheService: BolicheServiceService) {
 
    this.dados.quadro=this.quadro;
    this.criarJogadas(this.quadro);
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

    let quadro = this.criarQuadro();
    for(let i=0; i < array.length ; i++){
      if(i < array.length -1){
        if(this.cheio(quadro)){
          quadro=this.criarQuadro();
          quadro.push(array[i]);
          if(this.isStrike(quadro)){
            this.jogadas.push(quadro);
            quadro=this.criarQuadro();
          }else if(!this.cheio(quadro)){
            quadro.push(array[i+1]);
            this.jogadas.push(quadro);
            if(this.cheio(quadro)){
              quadro=this.criarQuadro();
            }
          }
        }else {
          this.jogadas.push();
          quadro.push(array[i]);
          if(!this.cheio(quadro)){
            quadro.push(array[i+1]);
          }
        }
        
      }else{
        quadro.push(array[i]);
        this.jogadas.push(quadro);
        quadro=[]; 
      }      
    }
  }

  criarQuadro():Array<number>{
    return  [];
  }
  
  cheio(quadro:number[]):boolean{
    if(quadro.length===2){
      return true;
    }return false;
  }

  isSpare(quadro:number[]):boolean{
    if(quadro[0]+quadro[1]===10){
      return true;
    }return false;
  }

  isStrike(quadro:number[]):boolean{
    if(quadro[0]===10){
      return true;
    }return false;
  }

  getDescricao(quadro:number[]):string{
    if(this.isStrike(quadro)){
      return 'Strike';
    }else if(quadro.length==2){
      if(this.isSpare(quadro)){
        return 'Spare';
      }else{
        return "Normal";
      }
    }    
    return "";
  }




}

