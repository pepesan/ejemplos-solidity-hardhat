import { expect } from "chai";
import { ethers } from "hardhat";

describe("Estructuras", function () {
  it("Estructuras debe inicializarse bien", async function () {
    const Estructuras = await ethers.getContractFactory("Estructuras");
    const estructuras = await Estructuras.deploy();
    await estructuras.deployed();
    await estructuras.setBook();
    expect(await estructuras.getBookId()).to.equal(1);
    const book = await estructuras.getBook();
    expect(book.title).to.equal('Learn Solidity');
    expect(book.author).to.equal('David Vaquero');
    expect(book.book_id).to.equal(1);
  });
});
