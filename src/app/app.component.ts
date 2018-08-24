import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'Boliche';
  quadro = [];
  pinos = 0;
  pontos = 0;

  ngOnInit(): void {
    
  }

  jogar(): void{

    this.quadro.push(this.pinos);

  }

  calcularPontos(){

  }

}

