require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { RPC_URL, PRIVATE_KEY, CHAIN_ID } = process.env;

module.exports = {
  solidity: {
    version: "0.8.24",
    settings: { optimizer: { enabled: true, runs: 200 } },
  },
  networks: {
    mychain: {
      url: RPC_URL || "http://localhost:8545",
      chainId: CHAIN_ID ? parseInt(CHAIN_ID) : 13371,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    }
  }
};
