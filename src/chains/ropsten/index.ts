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
  delegator: '0x93678B8D4200c72B74F664b98087a8352C09CB75',
  proxy: '0x791532E6155E0F69cEE328B356C8B6A8DaFB9076',
  proxyAdmin: '0xdA832784Bc42eeF237b03e6F5C726F947fd61605',
  rail: '0x9cF8FE5091c82A2e8044A38b76140078d1A8c696',
  staking: '0x44525aB3b9B352FCC24E12734b3765b3CC488Ce6',
  treasury: '0x3a27e52bEa01C59F56EA37765a0eC84e5EC900A0',
  voting: '0xdcBa248aA9110aD1cDcbAD760545efC7097Da67F',
};

export {
  abi,
  addresses,
};
