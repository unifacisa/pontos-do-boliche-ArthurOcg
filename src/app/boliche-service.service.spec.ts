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
});
