import { expect } from "chai";
import { ethers } from "hardhat";
import {address} from "hardhat/internal/core/config/config-validation";

describe("TiposEstructurados", function () {
  it("Should define the properties correctly", async function () {
    const TiposEstructurados = await ethers.getContractFactory("TiposEstructurados");
    const tiposEstructurados = await TiposEstructurados.deploy();
    const deployed = await tiposEstructurados.deployed();
    // probando el tamaño del array
    const listado = await  deployed.getAllItems();
    expect(listado.length, "Listado tiene 2 elementos").to.equal(2);
    // probando primer valor del array
    expect(await  deployed.listadoUints(0), "Primer elemento es 10").to.equal(10);
    // Probando los getter y setter
    await deployed.setListadoByIndex(0,12);
    const dato = await  deployed.getListadoByIndex(0);
    expect(dato, "Dato debe ser 12").to.equal(12);
    // Probar array de direcciones
    const listadoDirecciones = await deployed.getAllAddresses();
    expect(listadoDirecciones.length, "El listado de direcciones debe estar vacío").to.equal(0);
    // metemos una dirección
    await deployed.addHolder('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
    const listadoDireccionesUnaDireccion = await deployed.getAllAddresses();
    expect(listadoDireccionesUnaDireccion.length, "El listado de direcciones debe tener 1 elemento").to.equal(1);
    expect(await deployed.getAddressByIndex(0), "La primera dirección debe ser '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'").to.equal('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');

    //await deployed.addZeroBalanceToAddress(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
  });
});
