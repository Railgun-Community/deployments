# @railgun-community/deployments

Contains deployment configs and artifacts for each chain

## Installation:
`npm install @railgun-community/deployments`

## Usage:
```javascript
const deployment = require('@railgun-community/deployments');

// Get ethereum deployment addresses by network name
console.log(deployment.networks.ethereum.addresses);

// Get ethereum deployment addresses by chainID
console.log(deployment.chainID[1].addresses);

/**
{
  delegator: '...',
  implementation: '...',
  proxy: '...',
  ...
}
*/

// Get abi by network name
console.log(deployment.networks.ethereum.abi.implementation);

// Get abi by chainID
console.log(deployment.chainID[1].abi.implementation);
```
