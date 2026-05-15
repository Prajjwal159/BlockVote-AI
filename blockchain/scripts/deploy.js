async function main() {

    const VotingSystem = await ethers.getContractFactory(
        "VotingSystem"
    );

    const votingSystem = await VotingSystem.deploy();

    await votingSystem.deployed();

    console.log(
        "Voting Contract Deployed To:",
        votingSystem.address
    );
}

main().catch((error) => {

    console.error(error);

    process.exitCode = 1;
});
ed