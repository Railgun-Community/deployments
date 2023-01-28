import { chainConfig as arbitrumGoerli } from './chains/arbitrum-goerli';
import { chainConfig as arbitrum } from './chains/arbitrum';
import { chainConfig as bsc } from './chains/bsc';
import { chainConfig as ethereum } from './chains/ethereum';
import { chainConfig as goerli } from './chains/goerli';
import { chainConfig as mumbai } from './chains/mumbai';
import { chainConfig as polygon } from './chains/polygon';

import type { ABIs, ChainConfig } from './types';

import { abi as L2Executor } from './abi/L2Executor';
import { abi as L1Sender } from './abi/L1Sender';
import { abi as delegator } from './abi/delegator';
import { abi as getters } from './abi/getters';
import { abi as governorRewardsImplementation } from './abi/governorRewardsImplementation';
import { abi as governorRewardsProxy } from './abi/governorRewardsProxy';
import { abi as implementation } from './abi/implementation';
import { abi as proxy } from './abi/proxy';
import { abi as proxyAdmin } from './abi/proxyAdmin';
import { abi as rail } from './abi/rail';
import { abi as staking } from './abi/staking';
import { abi as treasuryImplementation } from './abi/treasuryImplementation';
import { abi as treasuryProxy } from './abi/treasuryProxy';
import { abi as voting } from './abi/voting';

const abis: ABIs = {
  delegator,
  getters,
  governorRewardsImplementation,
  governorRewardsProxy,
  implementation,
  L1Sender,
  L2Executor,
  proxy,
  proxyAdmin,
  rail,
  staking,
  treasuryImplementation,
  treasuryProxy,
  voting,
};

const chainID = {
  1: ethereum,
  5: goerli,
  56: bsc,
  137: polygon,
  42161: arbitrum,
  80001: mumbai,
  421613: arbitrumGoerli,
} as const;

const name = {
  arbitrumGoerli,
  arbitrum,
  bsc,
  ethereum,
  goerli,
  mumbai,
  polygon,
} as const;

const chainConfigs: Record<string, ChainConfig | undefined> = {
  ...chainID,
  ...name,
} as const;

export { chainConfigs, abis };
