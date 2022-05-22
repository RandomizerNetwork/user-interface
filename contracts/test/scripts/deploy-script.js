// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // Token deployed to: 0xde5109E98AC516532652E79859fAb5D12723D150
  // Staking 7 days deployed to: 0x6a229b45d34022bC21630113463be869febcA1e2
  // Staking 14 days Token deployed to: 0xDC11a18eAe238A71e664b636dA89Ec0306Fe13Ec
  // Staking 30 days Token deployed to: 0x379B2234436690488DC95ef21A5a5D594d8eF0dF
  // Staking 60 days Token deployed to: 0x4909B7835D6BCc0e87cCa084bF1D222443F545F1

  // We deploy the Token
  const Token = await hre.ethers.getContractFactory("Token");
  const Staking = await hre.ethers.getContractFactory("Staking");
  const token = await Token.deploy("0xe5eC95E8e8aB1A0717A21b963FcC4Fa97b55ba48", "100000000000000000000000000", "TEST", "TEST", 18);
  await token.deployed();
  // We deploy all 4 Staking Contracts
  const staking7Days = await Staking.deploy("7 days staking", token.address, 9, 168);
  const staking14Days = await Staking.deploy("14 days staking", token.address, 42, 336);
  const staking30Days = await Staking.deploy("30 days staking", token.address, 205, 720);
  const staking60Days = await Staking.deploy("60 days staking", token.address, 904, 1440);
  await staking7Days.deployed();
  await staking14Days.deployed();
  await staking30Days.deployed();
  await staking60Days.deployed();
  
  console.log("Token deployed to:", token.address);
  console.log("Staking 7 days deployed to:", staking7Days.address);
  console.log("Staking 14 days Token deployed to:", staking14Days.address);
  console.log("Staking 30 days Token deployed to:", staking30Days.address);
  console.log("Staking 60 days Token deployed to:", staking60Days.address);
  
  await token.approve(staking7Days.address, "100000000000000000000000000") // 100M Tokens
  await token.approve(staking14Days.address, "100000000000000000000000000") // 100M Tokens
  await token.approve(staking30Days.address, "100000000000000000000000000") // 100M Tokens
  await token.approve(staking60Days.address, "100000000000000000000000000") // 100M Tokens

  // const accounts = await hre.ethers.getSigners()
  // console.log('accounts', accounts.address)
  
  // const token = await hre.ethers.getContractAt("Token", "0x961F0d652B13274BddaCfF9B4fcda67aeb67c77E");
  // const staking7Days  = await hre.ethers.getContractAt("Staking", "0x78ff6E3f0a45ebfaf631a3bB0A77EbDB322E8038");
  // const staking14Days = await hre.ethers.getContractAt("Staking", "0x0F67a42AE434B958Ea20b601d7C7Ec0864A7C899");
  // const staking30Days = await hre.ethers.getContractAt("Staking", "0x1A7773286006Ebd3a31A12ad1Bd5E5d8Ae716ec1");
  // const staking60Days = await hre.ethers.getContractAt("Staking", "0x4794a3B46Ba552fB133161AE8171bd04433996D8");
  // const allowance1 = await token.allowance("0xe5eC95E8e8aB1A0717A21b963FcC4Fa97b55ba48", staking14Days.address)
  // console.log("allowance1",allowance1)
  // console.log("staking7Days",staking7Days)
  const staking7DaysaddReward = await staking7Days.addReward("110000000000000000000000"); // 110.000 Tokens
  const staking14DaysaddReward = await staking14Days.addReward("210000000000000000000000"); // 210.000 Tokens
  const staking30DaysaddReward = await staking30Days.addReward("210000000000000000000000"); // 210.000 Tokens
  const staking60DaysAddReward = await staking60Days.addReward("761000000000000000000000"); // 761.000 Tokens
  
  console.log("Staking 7 days reward of 110.000 Tokens added:", staking7DaysaddReward);
  console.log("Staking 14 days reward of 210.000 Tokens added:", staking14DaysaddReward);
  console.log("Staking 30 days reward of 210.000 Tokens added:", staking30DaysaddReward);
  console.log("Staking 60 days reward of 761.000 Tokens added:", staking60DaysAddReward);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
