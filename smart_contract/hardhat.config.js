
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/IHJDoojqvj7VYMp-eVrSC8qCT7-ztvIx",
      accounts: ["f84b7e9fa73b1893ad62ac408359458e40ef562b8832cbf86f55f40d4218de38"]
    }
  }
};

