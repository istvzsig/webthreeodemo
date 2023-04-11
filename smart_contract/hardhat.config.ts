import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: '0.8.0',
  networks: {
    localhost: {
      url: 'http://localhost:8545',
      accounts: ['0xf395ec4903f9592c33bc9c5002761e5dd5c78b7a41297f594f6c2e9fce8509e0'],
    }
  }
}

export default config;