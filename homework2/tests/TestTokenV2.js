
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HomeWorkToken2V2", function () {
  let token;

  beforeEach(async function () {
    const HomeWorkToken2V2 = await ethers.getContractFactory("HomeWorkToken2V2");
    token = await HomeWorkToken2V2.deploy();
    await token.deployed();
  });

  it("should have correct name and symbol", async function () {
    expect(await token.name()).to.equal("HomeWorkToken2");
    expect(await token.symbol()).to.equal("HWT2");
  });

  it("should update state1 correctly", async function () {
    await token.setState1(42);
    expect(await token.state1()).to.equal(42);
  });

  it("should update state2 correctly", async function () {
    await token.incState2();
    expect(await token.state2()).to.equal(1);

  });
});
