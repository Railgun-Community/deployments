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
  delegator: '0xb6d513f6222ee92fff975e901bd792e2513fb53b',
  implementation: '0xc6368d9998ea333b37eb869f4e1749b9296e6d09',
  proxy: '0xbf0Af567D60318f66460Ec78b464589E3f9dA48e',
  proxyAdmin: '0x4f8e20f55f879bee7bc010bd6bd2138b34ac65c8',
  rail: '0xe76c6c83af64e4c60245d8c7de953df673a7a33d',
  staking: '0xee6a649aa3766bd117e12c161726b693a1b2ee20',
  treasury: '0xc851fbe0f07a326ce0326ccc70c2a62732e74d6c',
  voting: '0xfc4b580c9bda2eef4e94d9fb4bcb1f7a61660cf9',
};

export {
  abi,
  addresses,
};
