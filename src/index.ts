import * as binance from './chains/binance';
import * as ethereum from './chains/ethereum';
import * as polygon from './chains/polygon';
import * as ropsten from './chains/ropsten';

const chainID = {
  1: ethereum,
  3: ropsten,
  56: binance,
  137: polygon,
};

const networks = {
  binance,
  ethereum,
  polygon,
  ropsten,
};

export {
  chainID,
  networks,
};
