const web3 = require("@solana/web3.js");
const execSync = require('child_process').execSync;

let connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");
function currentProvider()
{
    let slot = connection.getSlot().then(console.log);
    return slot;
}
function createWallet()
{
    const execSync = require('child_process').execSync;
    const output1 = execSync('mkdir solana-wallet', { encoding: 'utf-8' });  // the default is 'buffer'
    const output2 = execSync('solana-keygen new --outfile solana-wallet/keypair.json', { encoding: 'utf-8' });  // the default is 'buffer'
    // console.log('Output was:\n', output2);
    
}
function getPubkey()
{
    var pubkey = execSync('solana-keygen pubkey /Users/venky/Desktop/Projects/btp_package/test-folder/solana-wallet/keypair.json', { encoding: 'utf-8' });
    // console.log(pubkey);
    return pubkey;
}
async function getBalance()
{
    let pkey = getPubkey();
    console.log(pkey.toString());
    // const pkey = 'S6qY45yeSJrbGB4v6ioSCj3RfLZ8JVEPdU876vWWvCq';
    let pubkey = new web3.PublicKey(pkey).toBase58();
    console.log(pubkey);
    let balance = await connection.getBalance(pubkey);
    console.log(`${balance / web3.LAMPORTS_PER_SOL} SOL`);
    return balance;
}

module.exports=
{
    currentProvider,
    createWallet,
    getPubkey,
    getBalance
}
