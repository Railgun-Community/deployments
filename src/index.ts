import {chainConfig as binance} from './chains/binance';
import {chainConfig as ethereum} from './chains/ethereum';
import {chainConfig as polygon} from './chains/polygon';
import {chainConfig as ropsten} from './chains/ropsten';

import type { ABIs } from './types';

import { abi as delegator } from './abi/delegator';
import { abi as implementation } from './abi/implementation';
import { abi as proxy } from './abi/proxy';
import { abi as proxyAdmin } from './abi/proxyAdmin';
import { abi as rail } from './abi/rail';
import { abi as staking } from './abi/staking';
import { abi as treasury } from './abi/treasury';
import { abi as voting } from './abi/voting';

const abis: ABIs = {
  delegator,
  implementation,
  proxy,
  proxyAdmin,
  rail,
  staking,
  treasury,
  voting,
};

const chainID = {
  1: ethereum,
  3: ropsten,
  56: binance,
  137: polygon,
} as const;

const name = {
  binance,
  ethereum,
  polygon,
  ropsten,
} as const;

const chainConfigs = {
  ...chainID,
  ...name,
}

export {
  chainConfigs,
  abis,
};
