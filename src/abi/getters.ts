import type { ABIFragment } from '../types';

const abi: ABIFragment[] = [
  {
    inputs: [
      {
        internalType: 'contract Staking',
        name: '_staking',
        type: 'address',
      },
      {
        internalType: 'contract GovernorRewards',
        name: '_governorRewards',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
    ],
    name: 'getAccountSnapshots',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'interval',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'votingPower',
            type: 'uint256',
          },
        ],
        internalType: 'struct Staking.AccountSnapshot[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: '_tokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_startingInterval',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_endingInterval',
        type: 'uint256',
      },
    ],
    name: 'getClaimed',
    outputs: [
      {
        internalType: 'bool[]',
        name: '',
        type: 'bool[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getGlobalsSnapshots',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'interval',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalVotingPower',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalStaked',
            type: 'uint256',
          },
        ],
        internalType: 'struct Staking.GlobalsSnapshot[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export { abi };
