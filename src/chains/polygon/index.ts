import { abi as delegator } from '../global/abi/delegator';
import { abi as implementation } from './abi/implementation';
import { abi as proxy } from '../global/abi/proxy';
import { abi as proxyAdmin } from '../global/abi/proxyAdmin';
import { abi as rail } from './abi/rail';
import { abi as staking } from '../global/abi/staking';
import { abi as treasury } from '../global/abi/treasury';
import { abi as voting } from './abi/voting';

const abi = {
  delegator,
  implementation,
  proxy,
  proxyAdmin,
  rail,
  staking,
  treasury,
  voting,
};

const addresses = {
  delegator: '0x5f67441090FbDf57F1D9f28dd65a29b0bB3E83a7',
  implementation: '',
  proxy: '0x61ca7a0346a10cea849910C29617ac316461AD76',
  proxyAdmin: '0x3c53C163C2EcE58470ee219E647f18D133885C3A',
  rail: '0x92A9C92C215092720C731c96D4Ff508c831a714f',
  staking: '0x9AC2bA4bf7FaCB0bbB33447e5fF8f8D63B71dDC1',
  treasury: '0x7C956dB76b4Bd483F96fcE6beA3615f263aFD333',
  voting: '0x707C42119a0a4bC5B60ba140b39FA08ADF1EFb61',
};

export {
  abi,
  addresses,
};
