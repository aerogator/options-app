import { TestBed } from '@angular/core/testing';

import { OptionChainService } from './option-chain.service';

describe('OptionChainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptionChainService = TestBed.get(OptionChainService);
    expect(service).toBeTruthy();
  });
});
