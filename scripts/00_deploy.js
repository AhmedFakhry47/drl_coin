const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying DRL Coin with:", deployer.address);

  const DRL = await hre.ethers.getContractFactory("DRLCoin");
  const drl = await DRL.deploy(hre.ethers.parseUnits("1000000", 18)); // 1,000,000 DRL
  await drl.waitForDeployment();

  console.log("DRL Coin deployed at:", await drl.getAddress());
}

main().catch((e) => { console.error(e); process.exit(1); });
