const { ethers } = require('ethers');
require('dotenv').config(); // Load environment variables

async function main() {
   // Connect to the Ethereum network (in this case, the Rinkeby test network)
   const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`);

   // Create a wallet (key pair)
   const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

   // Output wallet address
   console.log('Wallet Address:', wallet.address);
}

main();
