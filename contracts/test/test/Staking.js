const { expect } = require("chai");
const { ethers } = require("hardhat");

const increaseTimeInSeconds = async (seconds, mine = false) => {
    await ethers.provider.send("evm_increaseTime", [seconds])
    await ethers.provider.send("evm_mine", []) // this one will have 1 HOUR after its timestamp
}

const increaseTimeInSecondsExact = async (seconds, mine = false) => {
    await ethers.provider.send("evm_setNextBlockTimestamp", [seconds])
    await ethers.provider.send("evm_mine") // this one will have 1 HOUR after its timestamp
}

describe("Staking contract test", async function () {
    let instance, token;
    const [owner] = await ethers.getSigners();
    const totalSupply = 200000000000000000000;
    beforeEach(async() => {
        const Token = await ethers.getContractFactory("Token");
        const Staking = await ethers.getContractFactory("Staking");
        token = await Token.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "100000000000000000000000000", "TEST", "TEST", 18);
        // instance = await Staking.deploy("7 days staking", token.address, 9, 168); //Adjust the start block according to your local testing
        instance = await Staking.deploy("60 days staking", token.address, 904, 1440); //Adjust the start block according to your local testing
        // pool = await Pool.new(instance.address, token.address);
        // console.log('instance', instance)
    })
    // STEP 1 DEPLOY TOKEN
    // STEP 2 DEPLOY STAKING POOL
    // STEP 3 approve(110001000000000000000000) - 110.001 Tokens
    // STEP 3 addReward(110001000000000000000000) - 110.001 Tokens

    describe("Deployment Tests", async function () {
        it("Deployment should assign the total supply of tokens to the owner", async function () {
            const ownerBalance = await token.balanceOf(owner.address);
            expect(await token.totalSupply()).to.equal(ownerBalance);
        });
    })

    describe("Start User Staking", async function () {
        it("Users should be able to start staking and receiving rewards", async function () {
            // "Deployment should approve, configure, and add rewards to staking contract"
            const approve = await token.approve(instance.address, "761000000000000000000010") // 110001 Tokens
            const addReward = await instance.addReward("761000000000000000000010"); // 110001 Tokens
            const totalReward = await instance.totalReward();
            expect(totalReward).to.equal("761000000000000000000010"); // 110001 Tokens
            // "Deployment should approve, configure, and add rewards to staking contract"

            const approveStaking = await token.approve(instance.address, "1000000000000000000000")
            const stake = instance.stake("1000000000000000000000") // 100.000 Tokens 
            const totalParticipants = await instance.totalParticipants();
            console.log('totalParticipants', totalParticipants)
            expect(totalParticipants).to.equal("1");

            const userDeposits = await instance.userDeposits(owner.address);
            console.log('userDeposits', userDeposits)

            const calculate = await instance.calculate(owner.address);
            console.log('calculate', calculate)

            console.log('userDeposits[2]', Number(userDeposits[2]));
            console.log('userDeposits[2] + 10', Number(userDeposits[2]) + 10);

            const timeIncrease = Number(userDeposits[2]) + 10; // staking endtime + 10 seconds
            increaseTimeInSeconds(timeIncrease, true)
            // increaseTimeInSecondsExact(timeIncrease, true)

            const beforeBalance = await token.balanceOf(owner.address);
            
            const unstake = await instance.withdraw()
            const checkBalance = await token.balanceOf(owner.address)
            console.log('checkBalance', checkBalance)
            // expect(totalReward).to.equal("100000000000000000000000");
            
            const afterBalance = await token.balanceOf(owner.address);

            console.log("beforeBalance", beforeBalance);
            console.log("afterBalance", afterBalance);
            console.log("diffToClaim", (afterBalance - beforeBalance) / 18)

        });
    })
});