export class Option {

  contractSymbol: string; //"AAPL190329C00125000"
  strike: number; // 125.0
  currency: string; //"USD"
  lastPrice: number; // 67.91
  change: number; // -3.0899963
  percentChange: number; // -4.3521075
  volume: number; // 9,
  openInterest: number; // 12
  bid: number; // 65.7
  ask: number; // 66.6
  contractSize: string; // "REGULAR"
  expiration: number; // 1553817600
  lastTradeDate: number; // 1553279817
  impliedVolatility: number; // 1.32422212890625
  inTheMoney: boolean; // true

  public bid_ask_split():number {
    return (this.bid + this.ask) / 2.0;
  }
}
