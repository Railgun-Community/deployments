import { chainConfig as bsc } from './chains/bsc';
import { chainConfig as ethereum } from './chains/ethereum';
import { chainConfig as goerli } from './chains/goerli';
import { chainConfig as mumbai } from './chains/mumbai';
import { chainConfig as polygon } from './chains/polygon';

import type { ABIs, ChainConfig } from './types';

import { abi as arbitrumExecutor } from './abi/arbitrumExecutor';
import { abi as arbitrumSender } from './abi/arbitrumSender';
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
  arbitrumExecutor,
  arbitrumSender,
  delegator,
  getters,
  governorRewardsImplementation,
  governorRewardsProxy,
  implementation,
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
  80001: mumbai,
} as const;

const name = {
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
