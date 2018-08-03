const path = require("path");
const fs = require("fs");
const solc = require("solc");

const VinayagaPath = path.resolve(__dirname, "contracts", "Vinayaga.sol");
const source = fs.readFileSync(VinayagaPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":Vinayaga"];
