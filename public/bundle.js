var contractABI = [];
var contractAddress = '0xcf242c69F165f14dC62B0afDc0308a2C36969F32';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
.then(console.log);
