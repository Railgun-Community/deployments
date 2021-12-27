const abi = [{ inputs: [{ internalType: 'contract Staking', name: '_stakingContract', type: 'address' }, { internalType: 'contract Delegator', name: '_delegator', type: 'address' }], stateMutability: 'nonpayable', type: 'constructor' }, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'uint256', name: 'id', type: 'uint256',
  }],
  name: 'Execution',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'uint256', name: 'id', type: 'uint256',
  }, {
    indexed: true, internalType: 'address', name: 'proposer', type: 'address',
  }],
  name: 'Proposal',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'uint256', name: 'id', type: 'uint256',
  }, {
    indexed: true, internalType: 'address', name: 'sponsor', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256',
  }],
  name: 'Sponsorship',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'uint256', name: 'id', type: 'uint256',
  }, {
    indexed: true, internalType: 'address', name: 'sponsor', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256',
  }],
  name: 'SponsorshipRevocation',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'uint256', name: 'id', type: 'uint256',
  }],
  name: 'VoteCall',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'uint256', name: 'id', type: 'uint256',
  }, {
    indexed: true, internalType: 'address', name: 'voter', type: 'address',
  }, {
    indexed: false, internalType: 'bool', name: 'affirmative', type: 'bool',
  }, {
    indexed: false, internalType: 'uint256', name: 'votes', type: 'uint256',
  }],
  name: 'VoteCast',
  type: 'event',
}, {
  inputs: [], name: 'DELEGATOR_CONTRACT', outputs: [{ internalType: 'contract Delegator', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'EXECUTION_END_OFFSET', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'EXECUTION_START_OFFSET', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'PROPOSAL_SPONSOR_THRESHOLD', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'QUORUM', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'SPONSOR_WINDOW', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'STAKING_CONTRACT', outputs: [{ internalType: 'contract Staking', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'VOTING_NAY_END_OFFSET', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'VOTING_START_OFFSET', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'VOTING_YAY_END_OFFSET', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }], name: 'callVote', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'string', name: '_proposalDocument', type: 'string' }, {
    components: [{ internalType: 'address', name: 'callContract', type: 'address' }, { internalType: 'bytes', name: 'data', type: 'bytes' }, { internalType: 'uint256', name: 'value', type: 'uint256' }], internalType: 'struct Voting.Call[]', name: '_actions', type: 'tuple[]',
  }],
  name: 'createProposal',
  outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }], name: 'executeProposal', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
  name: 'getActions',
  outputs: [{
    components: [{ internalType: 'address', name: 'callContract', type: 'address' }, { internalType: 'bytes', name: 'data', type: 'bytes' }, { internalType: 'uint256', name: 'value', type: 'uint256' }], internalType: 'struct Voting.Call[]', name: '', type: 'tuple[]',
  }],
  stateMutability: 'view',
  type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }, { internalType: 'address', name: '_account', type: 'address' }], name: 'getSponsored', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }, { internalType: 'address', name: '_account', type: 'address' }], name: 'getVotes', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'proposals', outputs: [{ internalType: 'address', name: 'proposer', type: 'address' }, { internalType: 'string', name: 'proposalDocument', type: 'string' }, { internalType: 'uint256', name: 'publishTime', type: 'uint256' }, { internalType: 'uint256', name: 'voteCallTime', type: 'uint256' }, { internalType: 'uint256', name: 'sponsorship', type: 'uint256' }, { internalType: 'bool', name: 'executed', type: 'bool' }, { internalType: 'uint256', name: 'yayVotes', type: 'uint256' }, { internalType: 'uint256', name: 'nayVotes', type: 'uint256' }, { internalType: 'uint256', name: 'sponsorInterval', type: 'uint256' }, { internalType: 'uint256', name: 'votingInterval', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'proposalsLength', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }, { internalType: 'uint256', name: '_amount', type: 'uint256' }, { internalType: 'uint256', name: '_hint', type: 'uint256' }], name: 'sponsorProposal', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }, { internalType: 'uint256', name: '_amount', type: 'uint256' }], name: 'unsponsorProposal', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }, { internalType: 'uint256', name: '_amount', type: 'uint256' }, { internalType: 'bool', name: '_affirmative', type: 'bool' }, { internalType: 'uint256', name: '_hint', type: 'uint256' }], name: 'vote', outputs: [], stateMutability: 'nonpayable', type: 'function',
}];

export {
  abi,
};
