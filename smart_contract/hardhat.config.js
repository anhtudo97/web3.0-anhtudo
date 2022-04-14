require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/OuRtKYNGPJKC-JGtDioeKfVnPkEjPFF_',
      accounts: ['f296410e2c111fb9727fc3b6f566a77d74d19568360c26a9293e1b041de4bf30'],
    },
  },
};