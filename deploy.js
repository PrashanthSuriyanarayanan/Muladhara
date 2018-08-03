const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  // Add your seed words and rinkeby endpoint separated by a comma.
);
const web3 = new Web3(provider);


const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const initialMessage = "Kulla Kullane Kundali Vayirane Velli Kombane Vinayaga Saranam";

  console.log("Attempting to deploy from account", accounts[0]);

  const vinayaga = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: '0x' + bytecode,
      arguments: [initialMessage]
    })
    .send({
      from: accounts[0],
      gas: "1000000"
    });

  const address = vinayaga.options.address;

  console.log("Contract deployed to", address);
};

deploy();