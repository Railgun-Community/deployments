import type { ABIFragment } from '../types';

const abi: ABIFragment[] = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_task',
        type: 'uint256',
      },
    ],
    name: 'readyTask',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export { abi };
