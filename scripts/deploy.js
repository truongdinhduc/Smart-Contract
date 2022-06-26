async function main(){
    const contract = await ethers.getContractFactory("StakingContract");
    const staking_contract = await contract.deploy();   
    console.log("Contract deployed to address:", staking_contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });