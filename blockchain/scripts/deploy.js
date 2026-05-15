import { ethers } from "hardhat";

async function main() {

    const VotingSystem = await ethers.getContractFactory(
        "VotingSystem"
    );

    const votingSystem = await VotingSystem.deploy();

    await votingSystem.waitForDeployment();

    console.log(
        "Voting Contract Deployed To:",
        await votingSystem.getAddress()
    );
}

main().catch((error) => {

    console.error(error);

    process.exitCode = 1;
});