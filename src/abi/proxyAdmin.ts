import type { ABIFragment } from '../types';

const abi: ABIFragment[] = [
  {
    inputs: [{ internalType: 'address', name: '_admin', type: 'address' }],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract PausableUpgradableProxy',
        name: '_proxy',
        type: 'address',
      },
    ],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract PausableUpgradableProxy',
        name: '_proxy',
        type: 'address',
      },
      { internalType: 'address', name: '_newOwner', type: 'address' },
    ],
    name: 'transferProxyOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract PausableUpgradableProxy',
        name: '_proxy',
        type: 'address',
      },
    ],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract PausableUpgradableProxy',
        name: '_proxy',
        type: 'address',
      },
      { internalType: 'address', name: '_newImplementation', type: 'address' },
    ],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export { abi };
