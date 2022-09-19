const { ethers } = require("hardhat");

async function main() {
  const [owner, addr1] = await ethers.getSigners();
  const daiPricefeed = "0x2bA49Aaa16E6afD2a993473cfB70Fa8559B523cF";
  const DAIPerUSD = "0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735";

  const insuranceV1ProxyContract = "0xa51d813CBfa62ddb20D199ab78DDF150DF996e31";

  const INSURANCE = await ethers.getContractFactory("insurance");
  const insurance = await INSURANCE.attach(insuranceV1ProxyContract);
  //add dai stablecoin support
  await insurance.addNewpaymentCoin(DAIPerUSD, daiPricefeed, 1);
  console.log("\n stablecoin added");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
