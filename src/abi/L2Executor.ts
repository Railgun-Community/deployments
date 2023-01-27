import type { ABIFragment } from '../types';

const abi: ABIFragment[] = [
  {
    inputs: [],
    name: 'DELEGATOR',
    outputs: [
      {
        internalType: 'contract Delegator',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'callContract',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        internalType: 'struct IL2Executor.Action[]',
        name: '_actions',
        type: 'tuple[]',
      },
    ],
    name: 'createTask',
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
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_task',
        type: 'uint256',
      },
    ],
    name: 'executeTask',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_tasks',
        type: 'uint256',
      },
    ],
    name: 'getActions',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'callContract',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        internalType: 'struct IL2Executor.Action[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export { abi };
