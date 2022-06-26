const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat")
const contract = require("../artifacts/contracts/StakingContract.sol/StakingContract.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const staking_contract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    //const owner = await staking_contract.contractOwner();
    //console.log(owner);

    //const options = {value: ethers.utils.parseEther("0.0001")}
    //await staking_contract.stake(10, options);
    
    const bal = await staking_contract.balance();
    console.log(bal);

    //tx = {
    //    to: CONTRACT_ADDRESS,
    //    value: ethers.utils.parseEther('0.0001', 'ether')
    //};
    //const transaction = await signer.sendTransaction(tx);

    //await staking_contract.unStake();
}

main();
