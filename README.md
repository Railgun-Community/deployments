# @railgun-community/deployments

Contains deployment configs and artifacts for each chain

## Installation:
`npm install @railgun-community/deployments`

## Usage:
```javascript
const deployment = require('@railgun-community/deployments');

// Get ethereum deployment details by network name
console.log(deployment.chainConfig.ethereum);

// Get ethereum deployment details by chain ID
console.log(deployment.chainConfig[1]);

/**
{
  delegator: { address, deploymentBlock },
  implementation: '...',
  proxy: '...',
  ...
}
*/

// Get ABIs
console.log(deployment.abis);

/**
{
  delegator: '...',
  implementation: '...',
  proxy: '...',
  ...
}
*/
```
