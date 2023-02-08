// manual way

async function main() {
    const boxProxyAdmin = await ethers.getContract("BoxProxyAdmin")
    const transparentProxy = await ethers.getContract("Box_Proxy")
    // Hardhat deploy will just name the proxy -> implemenatation contract + _Proxy = Box_Proxy
    const boxV2 = await ethers.getContract("BoxV2")
    const upgradeTx = await
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
