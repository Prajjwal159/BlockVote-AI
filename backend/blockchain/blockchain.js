const { ethers } = require("ethers");

const contractABI = require("./VotingSystemABI.json");



// Connect to local blockchain
const provider = new ethers.JsonRpcProvider(
    "http://127.0.0.1:8545"
);



// Paste first private key here
const privateKey =
"PASTE_PRIVATE_KEY_HERE";



// Create wallet
const wallet = new ethers.Wallet(
    privateKey,
    provider
);



// Paste deployed contract address here
const contractAddress =
"PASTE_CONTRACT_ADDRESS_HERE";



// Connect smart contract
const contract = new ethers.Contract(
    contractAddress,
    contractABI,
    wallet
);

module.exports = contract;