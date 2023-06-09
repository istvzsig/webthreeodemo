import { ethers } from "hardhat";

async function main() {
  const Transactions = await ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();
  await transactions.deployed();
  console.log(`Transactions deployed to address: ${transactions.address}`)
}

async function runMain() {
  try {
    await main();
    process.exit(0);
  } catch(error) {
      console.warn(error);
      process.exit(1);
  }
}

runMain();