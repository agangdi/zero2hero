const { ethers, upgrades } = require("hardhat");

const PROXY = "0x0534E97d2263f37507661dA9B7F75bC03ED554AF";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const TokenV2 = await ethers.getContractFactory("HomeWorkToken2V2");

  console.log("upgrading HomeWorkToken2...");

  await upgrades.upgradeProxy(PROXY, TokenV2);

  console.log("Token upgraded");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
