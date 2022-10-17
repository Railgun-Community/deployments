import type { ABIFragment } from '../types';

const abi: ABIFragment[] = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'AddToBlacklist',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'treeNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startPosition',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'hash',
        type: 'uint256[]',
      },
      {
        components: [
          {
            internalType: 'uint256[4]',
            name: 'ciphertext',
            type: 'uint256[4]',
          },
          {
            internalType: 'uint256[2]',
            name: 'ephemeralKeys',
            type: 'uint256[2]',
          },
          { internalType: 'uint256[]', name: 'memo', type: 'uint256[]' },
        ],
        indexed: false,
        internalType: 'struct CommitmentCiphertext[]',
        name: 'ciphertext',
        type: 'tuple[]',
      },
    ],
    name: 'CommitmentBatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'depositFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'withdrawFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'nftFee',
        type: 'uint256',
      },
    ],
    name: 'FeeChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'treeNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startPosition',
        type: 'uint256',
      },
      {
        components: [
          { internalType: 'uint256', name: 'npk', type: 'uint256' },
          {
            components: [
              {
                internalType: 'enum TokenType',
                name: 'tokenType',
                type: 'uint8',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              { internalType: 'uint256', name: 'tokenSubID', type: 'uint256' },
            ],
            internalType: 'struct TokenData',
            name: 'token',
            type: 'tuple',
          },
          { internalType: 'uint120', name: 'value', type: 'uint120' },
        ],
        indexed: false,
        internalType: 'struct CommitmentPreimage[]',
        name: 'commitments',
        type: 'tuple[]',
      },
      {
        indexed: false,
        internalType: 'uint256[2][]',
        name: 'encryptedRandom',
        type: 'uint256[2][]',
      },
    ],
    name: 'GeneratedCommitmentBatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'treeNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'nullifier',
        type: 'uint256[]',
      },
    ],
    name: 'Nullifiers',
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
        name: 'token',
        type: 'address',
      },
    ],
    name: 'RemoveFromBlacklist',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'treasury',
        type: 'address',
      },
    ],
    name: 'TreasuryChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'nullifiers',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'commitments',
        type: 'uint256',
      },
      {
        components: [
          { internalType: 'string', name: 'artifactsIPFSHash', type: 'string' },
          {
            components: [
              { internalType: 'uint256', name: 'x', type: 'uint256' },
              { internalType: 'uint256', name: 'y', type: 'uint256' },
            ],
            internalType: 'struct G1Point',
            name: 'alpha1',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
              { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
            ],
            internalType: 'struct G2Point',
            name: 'beta2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
              { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
            ],
            internalType: 'struct G2Point',
            name: 'gamma2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
              { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
            ],
            internalType: 'struct G2Point',
            name: 'delta2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256', name: 'x', type: 'uint256' },
              { internalType: 'uint256', name: 'y', type: 'uint256' },
            ],
            internalType: 'struct G1Point[]',
            name: 'ic',
            type: 'tuple[]',
          },
        ],
        indexed: false,
        internalType: 'struct VerifyingKey',
        name: 'verifyingKey',
        type: 'tuple',
      },
    ],
    name: 'VerifyingKeySet',
    type: 'event',
  },
  {
    inputs: [],
    name: 'SNARK_BYPASS',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ZERO_VALUE',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address[]', name: '_tokens', type: 'address[]' }],
    name: 'addToBlacklist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'vector', type: 'uint256' }],
    name: 'addVector',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint120', name: '_depositFee', type: 'uint120' },
      { internalType: 'uint120', name: '_withdrawFee', type: 'uint120' },
      { internalType: 'uint256', name: '_nftFee', type: 'uint256' },
    ],
    name: 'changeFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address payable', name: '_treasury', type: 'address' },
    ],
    name: 'changeTreasury',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'checkSafetyVectors',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'depositFee',
    outputs: [{ internalType: 'uint120', name: '', type: 'uint120' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint256', name: 'npk', type: 'uint256' },
          {
            components: [
              {
                internalType: 'enum TokenType',
                name: 'tokenType',
                type: 'uint8',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              { internalType: 'uint256', name: 'tokenSubID', type: 'uint256' },
            ],
            internalType: 'struct TokenData',
            name: 'token',
            type: 'tuple',
          },
          { internalType: 'uint120', name: 'value', type: 'uint120' },
        ],
        internalType: 'struct CommitmentPreimage[]',
        name: '_notes',
        type: 'tuple[]',
      },
      {
        internalType: 'uint256[2][]',
        name: '_encryptedRandom',
        type: 'uint256[2][]',
      },
    ],
    name: 'generateDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint136', name: '_amount', type: 'uint136' },
      { internalType: 'bool', name: '_isInclusive', type: 'bool' },
      { internalType: 'uint120', name: '_feeBP', type: 'uint120' },
    ],
    name: 'getFee',
    outputs: [
      { internalType: 'uint120', name: '', type: 'uint120' },
      { internalType: 'uint120', name: '', type: 'uint120' },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'enum TokenType', name: 'tokenType', type: 'uint8' },
          { internalType: 'address', name: 'tokenAddress', type: 'address' },
          { internalType: 'uint256', name: 'tokenSubID', type: 'uint256' },
        ],
        internalType: 'struct TokenData',
        name: '_tokenData',
        type: 'tuple',
      },
    ],
    name: 'getTokenField',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_nullifiers', type: 'uint256' },
      { internalType: 'uint256', name: '_commitments', type: 'uint256' },
    ],
    name: 'getVerificationKey',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'artifactsIPFSHash', type: 'string' },
          {
            components: [
              { internalType: 'uint256', name: 'x', type: 'uint256' },
              { internalType: 'uint256', name: 'y', type: 'uint256' },
            ],
            internalType: 'struct G1Point',
            name: 'alpha1',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
              { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
            ],
            internalType: 'struct G2Point',
            name: 'beta2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
              { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
            ],
            internalType: 'struct G2Point',
            name: 'gamma2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
              { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
            ],
            internalType: 'struct G2Point',
            name: 'delta2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256', name: 'x', type: 'uint256' },
              { internalType: 'uint256', name: 'y', type: 'uint256' },
            ],
            internalType: 'struct G1Point[]',
            name: 'ic',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct VerifyingKey',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint16', name: 'treeNumber', type: 'uint16' },
          {
            internalType: 'enum WithdrawType',
            name: 'withdraw',
            type: 'uint8',
          },
          { internalType: 'address', name: 'adaptContract', type: 'address' },
          { internalType: 'bytes32', name: 'adaptParams', type: 'bytes32' },
          {
            components: [
              {
                internalType: 'uint256[4]',
                name: 'ciphertext',
                type: 'uint256[4]',
              },
              {
                internalType: 'uint256[2]',
                name: 'ephemeralKeys',
                type: 'uint256[2]',
              },
              { internalType: 'uint256[]', name: 'memo', type: 'uint256[]' },
            ],
            internalType: 'struct CommitmentCiphertext[]',
            name: 'commitmentCiphertext',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct BoundParams',
        name: '_boundParams',
        type: 'tuple',
      },
    ],
    name: 'hashBoundParams',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'uint256', name: 'npk', type: 'uint256' },
          {
            components: [
              {
                internalType: 'enum TokenType',
                name: 'tokenType',
                type: 'uint8',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              { internalType: 'uint256', name: 'tokenSubID', type: 'uint256' },
            ],
            internalType: 'struct TokenData',
            name: 'token',
            type: 'tuple',
          },
          { internalType: 'uint120', name: 'value', type: 'uint120' },
        ],
        internalType: 'struct CommitmentPreimage',
        name: '_commitmentPreimage',
        type: 'tuple',
      },
    ],
    name: 'hashCommitment',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_left', type: 'uint256' },
      { internalType: 'uint256', name: '_right', type: 'uint256' },
    ],
    name: 'hashLeftRight',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address payable', name: '_treasury', type: 'address' },
      { internalType: 'uint120', name: '_depositFee', type: 'uint120' },
      { internalType: 'uint120', name: '_withdrawFee', type: 'uint120' },
      { internalType: 'uint256', name: '_nftFee', type: 'uint256' },
      { internalType: 'address', name: '_owner', type: 'address' },
    ],
    name: 'initializeRailgunLogic',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'merkleRoot',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nftFee',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' },
    ],
    name: 'nullifiers',
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
    inputs: [{ internalType: 'address[]', name: '_tokens', type: 'address[]' }],
    name: 'removeFromBlacklist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'vector', type: 'uint256' }],
    name: 'removeVector',
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
    inputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' },
    ],
    name: 'rootHistory',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_nullifiers', type: 'uint256' },
      { internalType: 'uint256', name: '_commitments', type: 'uint256' },
      {
        components: [
          { internalType: 'string', name: 'artifactsIPFSHash', type: 'string' },
          {
            components: [
              { internalType: 'uint256', name: 'x', type: 'uint256' },
              { internalType: 'uint256', name: 'y', type: 'uint256' },
            ],
            internalType: 'struct G1Point',
            name: 'alpha1',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
              { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
            ],
            internalType: 'struct G2Point',
            name: 'beta2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
              { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
            ],
            internalType: 'struct G2Point',
            name: 'gamma2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
              { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
            ],
            internalType: 'struct G2Point',
            name: 'delta2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256', name: 'x', type: 'uint256' },
              { internalType: 'uint256', name: 'y', type: 'uint256' },
            ],
            internalType: 'struct G1Point[]',
            name: 'ic',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct VerifyingKey',
        name: '_verifyingKey',
        type: 'tuple',
      },
    ],
    name: 'setVerificationKey',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'snarkSafetyVector',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'tokenBlacklist',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  { internalType: 'uint256', name: 'x', type: 'uint256' },
                  { internalType: 'uint256', name: 'y', type: 'uint256' },
                ],
                internalType: 'struct G1Point',
                name: 'a',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
                  { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
                ],
                internalType: 'struct G2Point',
                name: 'b',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256', name: 'x', type: 'uint256' },
                  { internalType: 'uint256', name: 'y', type: 'uint256' },
                ],
                internalType: 'struct G1Point',
                name: 'c',
                type: 'tuple',
              },
            ],
            internalType: 'struct SnarkProof',
            name: 'proof',
            type: 'tuple',
          },
          { internalType: 'uint256', name: 'merkleRoot', type: 'uint256' },
          { internalType: 'uint256[]', name: 'nullifiers', type: 'uint256[]' },
          { internalType: 'uint256[]', name: 'commitments', type: 'uint256[]' },
          {
            components: [
              { internalType: 'uint16', name: 'treeNumber', type: 'uint16' },
              {
                internalType: 'enum WithdrawType',
                name: 'withdraw',
                type: 'uint8',
              },
              {
                internalType: 'address',
                name: 'adaptContract',
                type: 'address',
              },
              { internalType: 'bytes32', name: 'adaptParams', type: 'bytes32' },
              {
                components: [
                  {
                    internalType: 'uint256[4]',
                    name: 'ciphertext',
                    type: 'uint256[4]',
                  },
                  {
                    internalType: 'uint256[2]',
                    name: 'ephemeralKeys',
                    type: 'uint256[2]',
                  },
                  {
                    internalType: 'uint256[]',
                    name: 'memo',
                    type: 'uint256[]',
                  },
                ],
                internalType: 'struct CommitmentCiphertext[]',
                name: 'commitmentCiphertext',
                type: 'tuple[]',
              },
            ],
            internalType: 'struct BoundParams',
            name: 'boundParams',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256', name: 'npk', type: 'uint256' },
              {
                components: [
                  {
                    internalType: 'enum TokenType',
                    name: 'tokenType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'address',
                    name: 'tokenAddress',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'tokenSubID',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct TokenData',
                name: 'token',
                type: 'tuple',
              },
              { internalType: 'uint120', name: 'value', type: 'uint120' },
            ],
            internalType: 'struct CommitmentPreimage',
            name: 'withdrawPreimage',
            type: 'tuple',
          },
          { internalType: 'address', name: 'overrideOutput', type: 'address' },
        ],
        internalType: 'struct Transaction[]',
        name: '_transactions',
        type: 'tuple[]',
      },
    ],
    name: 'transact',
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
    inputs: [],
    name: 'treasury',
    outputs: [{ internalType: 'address payable', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'treeNumber',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  { internalType: 'uint256', name: 'x', type: 'uint256' },
                  { internalType: 'uint256', name: 'y', type: 'uint256' },
                ],
                internalType: 'struct G1Point',
                name: 'a',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
                  { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
                ],
                internalType: 'struct G2Point',
                name: 'b',
                type: 'tuple',
              },
              {
                components: [
                  { internalType: 'uint256', name: 'x', type: 'uint256' },
                  { internalType: 'uint256', name: 'y', type: 'uint256' },
                ],
                internalType: 'struct G1Point',
                name: 'c',
                type: 'tuple',
              },
            ],
            internalType: 'struct SnarkProof',
            name: 'proof',
            type: 'tuple',
          },
          { internalType: 'uint256', name: 'merkleRoot', type: 'uint256' },
          { internalType: 'uint256[]', name: 'nullifiers', type: 'uint256[]' },
          { internalType: 'uint256[]', name: 'commitments', type: 'uint256[]' },
          {
            components: [
              { internalType: 'uint16', name: 'treeNumber', type: 'uint16' },
              {
                internalType: 'enum WithdrawType',
                name: 'withdraw',
                type: 'uint8',
              },
              {
                internalType: 'address',
                name: 'adaptContract',
                type: 'address',
              },
              { internalType: 'bytes32', name: 'adaptParams', type: 'bytes32' },
              {
                components: [
                  {
                    internalType: 'uint256[4]',
                    name: 'ciphertext',
                    type: 'uint256[4]',
                  },
                  {
                    internalType: 'uint256[2]',
                    name: 'ephemeralKeys',
                    type: 'uint256[2]',
                  },
                  {
                    internalType: 'uint256[]',
                    name: 'memo',
                    type: 'uint256[]',
                  },
                ],
                internalType: 'struct CommitmentCiphertext[]',
                name: 'commitmentCiphertext',
                type: 'tuple[]',
              },
            ],
            internalType: 'struct BoundParams',
            name: 'boundParams',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256', name: 'npk', type: 'uint256' },
              {
                components: [
                  {
                    internalType: 'enum TokenType',
                    name: 'tokenType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'address',
                    name: 'tokenAddress',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'tokenSubID',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct TokenData',
                name: 'token',
                type: 'tuple',
              },
              { internalType: 'uint120', name: 'value', type: 'uint120' },
            ],
            internalType: 'struct CommitmentPreimage',
            name: 'withdrawPreimage',
            type: 'tuple',
          },
          { internalType: 'address', name: 'overrideOutput', type: 'address' },
        ],
        internalType: 'struct Transaction',
        name: '_transaction',
        type: 'tuple',
      },
    ],
    name: 'verify',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'string', name: 'artifactsIPFSHash', type: 'string' },
          {
            components: [
              { internalType: 'uint256', name: 'x', type: 'uint256' },
              { internalType: 'uint256', name: 'y', type: 'uint256' },
            ],
            internalType: 'struct G1Point',
            name: 'alpha1',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
              { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
            ],
            internalType: 'struct G2Point',
            name: 'beta2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
              { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
            ],
            internalType: 'struct G2Point',
            name: 'gamma2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
              { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
            ],
            internalType: 'struct G2Point',
            name: 'delta2',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256', name: 'x', type: 'uint256' },
              { internalType: 'uint256', name: 'y', type: 'uint256' },
            ],
            internalType: 'struct G1Point[]',
            name: 'ic',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct VerifyingKey',
        name: '_verifyingKey',
        type: 'tuple',
      },
      {
        components: [
          {
            components: [
              { internalType: 'uint256', name: 'x', type: 'uint256' },
              { internalType: 'uint256', name: 'y', type: 'uint256' },
            ],
            internalType: 'struct G1Point',
            name: 'a',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256[2]', name: 'x', type: 'uint256[2]' },
              { internalType: 'uint256[2]', name: 'y', type: 'uint256[2]' },
            ],
            internalType: 'struct G2Point',
            name: 'b',
            type: 'tuple',
          },
          {
            components: [
              { internalType: 'uint256', name: 'x', type: 'uint256' },
              { internalType: 'uint256', name: 'y', type: 'uint256' },
            ],
            internalType: 'struct G1Point',
            name: 'c',
            type: 'tuple',
          },
        ],
        internalType: 'struct SnarkProof',
        name: '_proof',
        type: 'tuple',
      },
      { internalType: 'uint256[]', name: '_inputs', type: 'uint256[]' },
    ],
    name: 'verifyProof',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawFee',
    outputs: [{ internalType: 'uint120', name: '', type: 'uint120' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'zeros',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
];

export { abi };
