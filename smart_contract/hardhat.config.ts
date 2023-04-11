import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: '0.8.0',
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      // replace this with your own test address
      accounts: ['a425b0749cfd5b240a4d8fc7dfb4fd3e7e3e00ad1b0d5ba709f459cd3205bde8'],
    }
  }
}

export default config;