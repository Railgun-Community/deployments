import { chainConfig as binance } from './chains/binance';
import { chainConfig as ethereum } from './chains/ethereum';
import { chainConfig as goerli } from './chains/goerli';
import { chainConfig as mumbai } from './chains/mumbai';
import { chainConfig as polygon } from './chains/polygon';

import type { ABIs } from './types';

import { abi as delegator } from './abi/delegator';
import { abi as implementation } from './abi/implementation';
import { abi as proxy } from './abi/proxy';
import { abi as proxyAdmin } from './abi/proxyAdmin';
import { abi as rail } from './abi/rail';
import { abi as staking } from './abi/staking';
import { abi as voting } from './abi/voting';
import { abi as treasuryImplementation } from './abi/treasuryImplementation';
import { abi as treasuryProxy } from './abi/treasuryProxy';
import { abi as governorRewardsImplementation } from './abi/governorRewardsImplementation';
import { abi as governorRewardsProxy } from './abi/governorRewardsProxy';

const abis: ABIs = {
  delegator,
  implementation,
  proxy,
  proxyAdmin,
  rail,
  staking,
  voting,
  treasuryImplementation,
  treasuryProxy,
  governorRewardsImplementation,
  governorRewardsProxy,
};

const chainID = {
  1: ethereum,
  5: goerli,
  56: binance,
  137: polygon,
  80001: mumbai,
} as const;

const name = {
  binance,
  ethereum,
  goerli,
  mumbai,
  polygon,
} as const;

const chainConfigs = {
  ...chainID,
  ...name,
};

export { chainConfigs, abis };
