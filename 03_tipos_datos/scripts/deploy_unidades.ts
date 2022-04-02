// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {

  // We get the contract to deploy
  const Unidades = await ethers.getContractFactory("Unidades");
  const unidades = await Unidades.deploy();

  await unidades.deployed();

  console.log("Desplegado Unidades en la dirección:", unidades.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
