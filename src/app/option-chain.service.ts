import { Injectable } from '@angular/core';
import { OptionChain} from './option-chain';
import { OPTION_CHAIN} from './mock-option-chain';

@Injectable({
  providedIn: 'root'
})

export class OptionChainService {

  constructor() { }

  getOptionChain(stockSymbol: string): OptionChain {
    return new OptionChain(stockSymbol, OPTION_CHAIN.toString());
  }
}
