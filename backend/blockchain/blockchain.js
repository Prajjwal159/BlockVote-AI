const { ethers } = require("ethers");

const contractABI = require("./VotingSystemABI.json");



// Connect to local blockchain
const provider = new ethers.JsonRpcProvider(
    "http://127.0.0.1:8545"
);



// Paste first private key here
const privateKey =
"0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";



// Create wallet
const wallet = new ethers.Wallet(
    privateKey,
    provider
);



// Paste deployed contract address here
const contractAddress =
"0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";



// Connect smart contract
const contract = new ethers.Contract(
    contractAddress,
    contractABI,
    wallet
);

module.exports = contract;