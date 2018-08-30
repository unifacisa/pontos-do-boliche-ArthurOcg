import { TestBed, inject } from '@angular/core/testing';

import { BolicheServiceService } from './boliche-service.service';

describe('BolicheServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BolicheServiceService]
    });
  });

  it('should be created', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('teste de soma dos pontos', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.calcularPontos([2,1,4,6,3])).toBe(16);
  }));

  it('teste de spare', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.isSpare([2,1,4,6,3],2)).toBeTruthy;
  }));

  it('teste de spare', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.isSpare([2,1,4,6,3],1)).toBeFalsy;
  }));

  it('teste de spare', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.isSpare([2,1,4,6,3],4)).toBeFalsy;
  }));

  it('teste de spare', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.isSpare([5,5,4],0)).toBeTruthy;
  }));

  it('teste pegar proximo quadro', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.getProximoQuadro([5,5,4],0)).toBe(2);
  }));

  it('teste pegar proximo quadro', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.getProximoQuadro([10,5,4],0)).toBe(1);
  }));

  it('teste somar pontos do quadro', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.somaPontosQuadro([10,5,4],0)).toBe(10);
  }));

  it('teste somar pontos do quadro', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.somaPontosQuadro([1,5,4],0)).toBe(6);
  }));

  it('teste calcular pontos', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.calcularPontos([1,5,4])).toBe(10);
  }));

  it('teste calcular pontos', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.calcularPontos([1,5,4,4])).toBe(14);
  }));

  it('teste calcular pontos strike', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.calcularPontos([10,5,4])).toBe(28);
  }));

  it('teste calcular pontos strike', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.calcularPontos([2,1,10,6,3])).toBe(31);
  }));

  it('teste calcular pontos strike', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.calcularPontos([10,10,10,10,10,10,10,10,10,10,10,10])).toBe(300);
  }));

  it('teste calcular pontos strike', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.calcularPontos([10,10,10])).toBe(50);
  }));

  it('teste calcular pontos spare', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.calcularPontos([2,1,4,6,3,2])).toBe(21);
  }));

  it('teste calcular pontos spare', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.calcularPontos([4,6,5,4])).toBe(24);
  }));

  it('teste calcular pontos spare', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.calcularPontos([5,5,2,2])).toBe(16);
  }));

});
