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
        name: 'caller',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'contractAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4',
      },
    ],
    name: 'GrantPermission',
    type: 'event',
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'contractAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4',
      },
    ],
    name: 'RevokePermission',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'address', name: '_contract', type: 'address' },
      { internalType: 'bytes', name: '_data', type: 'bytes' },
      { internalType: 'uint256', name: '_value', type: 'uint256' },
    ],
    name: 'callContract',
    outputs: [
      { internalType: 'bool', name: 'success', type: 'bool' },
      { internalType: 'bytes', name: 'returnData', type: 'bytes' },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_caller', type: 'address' },
      { internalType: 'address', name: '_contract', type: 'address' },
      { internalType: 'bytes4', name: '_selector', type: 'bytes4' },
    ],
    name: 'checkPermission',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
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
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'bytes4', name: '', type: 'bytes4' },
    ],
    name: 'permissions',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
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
    inputs: [
      { internalType: 'address', name: '_caller', type: 'address' },
      { internalType: 'address', name: '_contract', type: 'address' },
      { internalType: 'bytes4', name: '_selector', type: 'bytes4' },
      { internalType: 'bool', name: '_permission', type: 'bool' },
    ],
    name: 'setPermission',
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
];

export { abi };
