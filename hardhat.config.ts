import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "@openzeppelin/hardhat-upgrades";


// Default Hardhat Account #0
const privateKey = process.env.PRIVATE_KEY || "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const etherscanApikey = process.env.POLYGONSCAN_API_KEY || "";
const optimismScanApiKey = process.env.OPTIMISMSCAN_API_KEY || "";

const alchemyApiKey = process.env.ALCHEMY_API_KEY || "";
const alchemyApiKeyMumbai = process.env.ALCHEMY_API_KEY_MUMBAI;
const alchemyApiKeyOptimism = process.env.ALCHEMY_API_KEY_OPTIMISM || "";
const alchemyApiKeyOptimismSepolia = process.env.ALCHEMY_API_KEY_OPTIMISM_SEPOLIA || "";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: [privateKey],
    },
    polygonMumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${alchemyApiKeyMumbai}`,
      accounts: [privateKey],
    },
    optimisticEthereum: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${alchemyApiKeyOptimism}`,
      accounts: [privateKey],
    },
    optimisticSepolia: {
      url: `https://opt-sepolia.g.alchemy.com/v2/${alchemyApiKeyOptimismSepolia}`,
      accounts: [privateKey],
    },
  },
  etherscan: {
    apiKey: {
      polygon: etherscanApikey,
      polygonMumbai: etherscanApikey,
      optimisticEthereum: optimismScanApiKey,
      optimisticSepolia: optimismScanApiKey
    },
    customChains: [
      {
        network: "optimisticSepolia",
        chainId: 11155420,
        urls: {
          apiURL: "https://api-sepolia-optimistic.etherscan.io/api",
          browserURL: "https://sepolia-optimism.etherscan.io"
        }
      }
    ]
  }//,
  // sourcify: {
  //   // Disabled by default
  //   // Doesn't need an API key
  //   enabled: true
  // }
};

export default config;