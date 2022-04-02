import { expect } from "chai";
import { ethers } from "hardhat";
import { ControlAcceso } from "../typechain";


describe("ControlAcceso", function () {
  var owner: any;
  var addr1: any;
  var addr2: any;
  let controlAcceso: ControlAcceso;

  beforeEach("Empezando tests", async function (){
      //cojo los signers (array de direcciones cogido de hardhat)
      [owner, addr1, addr2] = await ethers.getSigners();
      console.log("Owner Address: "+ owner.address);
      console.log("Second Address: "+ addr1.address);
      console.log("Third Address: "+ addr2.address);
      //Despliego el Contrato
      const ControlAcceso = await ethers.getContractFactory("ControlAcceso");
      controlAcceso = await ControlAcceso.deploy();
      await controlAcceso.deployed();
  })
  it("El Control de Acceso debe funcionar", async function () {

    // hacemos el cambio de owner
    await controlAcceso.changeOwner(addr1.address);
    // debería rechazar el cambio por no tener permisos
    await expect(controlAcceso.changeOwner(addr1.address)).to.be.reverted;


    // Llamamos al método pero con otra cuenta
    //await controlAcceso.connect(addr1).changeOwner('0x70997970c51812dc3a010c7d01b50e0d17dc79c8')
    await controlAcceso.connect(addr1).changeOwner(addr1.address)

  });
    /*
    it("El Control de Acceso no debe funcionar", async function () {
      // define la función delay
      const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
      // Espera 60 segundos
      await delay(2000);
      // pide eliminar el owner pero sin permiso
      await expect(await controlAcceso.disown()).to.be.reverted;

      // pide eliminar pero con permisos
      await controlAcceso.connect(addr1).disown();
      // debería rechazar el cambio por no tener permisos
      expect(controlAcceso.connect(addr1).changeOwner('0x70997970c51812dc3a010c7d01b50e0d17dc79c8')).to.be.reverted;



  });
   */
});
