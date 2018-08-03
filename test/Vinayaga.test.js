const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require("../compile");

require('events').EventEmitter.defaultMaxListeners = 0;

let accounts, vinayaga;
const initialSloka = "Kulla Kullane Kundali Vayirane Velli Kombane Vinayaga Saranam";
const newSloka = "Mooshiga vaagana modhaga hastha Shyamala karna vilambitha suthra Vamana roopa maheswara puthra Vigna vinayaga paada namasthe";

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // use one of those to deploy the contract.
  vinayaga = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [initialSloka]
    })
    .send({
      from: accounts[0],
      gas: "1000000"
    });

});

describe('Vinayaga Contract tests', () => {

  it("deploys a contract", () => {
    assert.ok(vinayaga.options.address);
  });

  it("has a default sloka", async () => {
    const sloka = await vinayaga.methods.sloka().call();
    assert.equal(sloka, initialSloka)
  });

  it("can update the sloka", async () => {
    await vinayaga.methods.setSloka(newSloka).send({ from: accounts[0] });
    const sloka = await vinayaga.methods.sloka().call();
    assert.equal(sloka, newSloka);
  });

});