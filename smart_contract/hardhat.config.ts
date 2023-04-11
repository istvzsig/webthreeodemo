require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    localhost: {
      url: 'http://localhost:8545',
      accounts: ['0x36411CE1554895d7d858a2594Cb6E28E9C575070'],
    }
  }
}