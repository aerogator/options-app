import { Component, OnInit, Input } from '@angular/core';
import { OptionChainService} from '../option-chain.service';
import {OptionChain} from '../option-chain';

@Component({
  selector: 'app-option-chain',
  templateUrl: './option-chain.component.html',
  styleUrls: ['./option-chain.component.css']
})
export class OptionChainComponent implements OnInit {

  @Input() optionChain: OptionChain;

  constructor(private optionChainService: OptionChainService) { }

  ngOnInit() {
    this.getOptionChain('AAPL');
  }

  getOptionChain(stockSymbol: string): void {
    this.optionChain = this.optionChainService.getOptionChain(stockSymbol);
  }

}
