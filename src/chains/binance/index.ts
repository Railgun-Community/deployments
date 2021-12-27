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
  delegator: '0x4A7532f58259524251D7df1052762dc23c98Bae7',
  implementation: '',
  proxy: '0xCe567352AeE08F11682B71D58685eb9b01ea045a',
  proxyAdmin: '0x3bb38Cd4c801cb0bEd481Bc3fC4b14B06D81C5D2',
  rail: '0x3F847b01d4d498a293e3197B186356039eCd737F',
  staking: '0x753f0F9BA003DDA95eb9284533Cf5B0F19e441dc',
  treasury: '0x19B620929f97b7b990801496c3b361CA5dEf8C71',
  voting: '0x569C15b356D3bA9c9f407945b12C867f7C3608C9',
};

export {
  abi,
  addresses,
};
