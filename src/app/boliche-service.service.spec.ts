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

  it('teste de soma', inject([BolicheServiceService], (service: BolicheServiceService) => {
    expect(service.soma(2,1)).toBe(3);
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
    expect(service.calcularPontos([5,5,4],1)).toBe(14);
  }));


});
