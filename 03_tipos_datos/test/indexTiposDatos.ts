import { expect } from "chai";
import { ethers } from "hardhat";
import {address} from "hardhat/internal/core/config/config-validation";

describe("TiposDatos", function () {
  it("Should define the properties correctly", async function () {
    const TiposDatos = await ethers.getContractFactory("TiposDatos");
    const tiposDatos = await TiposDatos.deploy();
    const deployed = await tiposDatos.deployed();
    expect(await  deployed.booleano(), "Booleano no es true").to.equal(true);
    expect(await  deployed.getEntero(), "Entero no es -1").to.equal(-1);
    expect(await  deployed.enteroSinSigno(), "Entero no es 17").to.equal(17);
    expect(await  deployed.enteroSinSigno256(), "Entero no es 17").to.equal(2000);
    expect(await  deployed.cadena(), "Cadena no es 'Valor Inicial'").to.equal("Valor inicial");
    // console.log(await  deployed.direccion());
    expect(await  deployed.direccion(), "Dirección no es 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266").to.equal('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
    await deployed.setEntero(12);
    expect(await  deployed.getEntero(), "Entero no es 12").to.equal(12);
  });
});
