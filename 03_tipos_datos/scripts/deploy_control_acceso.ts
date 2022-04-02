// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {

  // We get the contract to deploy
  const ControlAcceso = await ethers.getContractFactory("ControlAcceso");
  const controlAcceso = await ControlAcceso.deploy();

  await controlAcceso.deployed();

  console.log("Desplegado ControlAcceso en la dirección:", controlAcceso.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
