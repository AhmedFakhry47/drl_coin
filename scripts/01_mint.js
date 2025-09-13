const hre = require("hardhat");
async function main() {
  const addr = process.env.DRL_ADDR;
  if (!addr) throw new Error("Set DRL_ADDR to your deployed DRL address");
  const [me] = await hre.ethers.getSigners();
  const drl = await hre.ethers.getContractAt("DRLCoin", addr);
  const tx = await drl.mint(me.address, hre.ethers.parseUnits("1000", 18));
  await tx.wait();
  console.log("Minted 1000 DRL to", me.address);
}
main().catch(e => { console.error(e); process.exit(1); });
