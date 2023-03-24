const web3 = require("@solana/web3.js");
const { Signer } = require("crypto");
const execSync = require('child_process').execSync;
const bs58 = require('bs58');
const { Console } = require("console");
let connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");
let system_program = web3.SystemProgram;
let transaction = new web3.Transaction();
let keypair = new web3.Keypair();

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
function createAccount()
{
    let newKeypair = web3.Keypair.generate();
    console.log(newKeypair.publicKey);
    pub_key = new web3.PublicKey(newKeypair.publicKey);
    console.log(pub_key);
    let params = {
        fromPubkey: getPubkey(),
        lamports: 1,
        newAccountPubkey: pub_key,
        programId: pub_key,
        space: 10
    }
    console.log(system_program.createAccount(params));
    return newKeypair;
}
function getPubkey()
{
    // var pubkey = execSync('solana-keygen pubkey /Users/venky/Desktop/Projects/btp_package/test-folder/solana-wallet/keypair.json', { encoding: 'utf-8' });
    // // console.log(pubkey);
    // let allocate_params = {
    //     accountPubkey: pubkey,
    //     space: 10
    // };
    // system_program.allocate(allocate_params);
    // return pubkey;
    var pubkey = new web3.PublicKey('CZx1y3xHP7PFoc13fKPgazmKJyH48n58eYRZucJ8vz92');
    return pubkey;
}
function airdrop(pubkey,amount)
{
    const o1 = execSync(`solana airdrop ${amount} ${pubkey} --url https://api.devnet.solana.com`);
    return getBalance();
}
async function getBalance()
{
    let pubkey = getPubkey();
    // pkey.toString(16,32);
    // console.log(pubkey);
    // let pubkey = new web3.PublicKey(pkey);
    // pubkey.toBase58();
    // console.log(pubkey);
    let balance = await connection.getBalance(pubkey);
    // console.log(`${balance / web3.LAMPORTS_PER_SOL} SOL`);
    return balance/ web3.LAMPORTS_PER_SOL;
}
async function getGasPrice()
{
    let blockhash = (await connection.getLatestBlockhash('finalized')).blockhash;
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = getPubkey();
    // let o1 = await connection.getFeeForMessage(transaction.compileMessage());
    // console.log(o1);
    let o1 = await transaction.getEstimatedFee(connection);
    // console.log(o1/web3.LAMPORTS_PER_SOL);
    return o1/web3.LAMPORTS_PER_SOL;
}
async function sendTransaction(from, to, amount)
{
    if(amount+getGasPrice()>getBalance())
    {
        console.log('Insufficent Balance!');
        return 0;
    }else{
        const instruction = system_program.transfer(
            {
                fromPubkey: from.publicKey,
                toPubkey: to,
                lamports: web3.LAMPORTS_PER_SOL*amount
            }
        );
    
        transaction.add(instruction);
        await web3.sendAndConfirmTransaction(connection,transaction,[
            from
        ])
        console.log(`Available Balance of the sender before the transaction ${await getBalance()} SOL.`);
        console.log(`Gas fees for the transaction ${await getGasPrice()} SOL.`)
        console.log('Transaction completed successfully.');
        console.log(`Available Balance of the sender after the transaction ${await getBalance()} SOL.`);
    }
    
}
async function getTransaction(pubkey)
{
    let txn_list = await connection.getSignaturesForAddress(pubkey);
    txn_list.forEach((txn,i)=>
    {
        const date = new Date(txn.blockTime*1000);
        console.log(`Transaction No: ${i+1}`);
        console.log(`Signature: ${txn.signature}`);
        console.log(`Time: ${date}`);
        console.log(`Status: ${txn.confirmationStatus}`);
        console.log(("-").repeat(20));
    });
    return txn_list;
}
module.exports=
{
    currentProvider,
    createWallet,
    getPubkey,
    getBalance,
    airdrop,
    getGasPrice,
    sendTransaction,
    getTransaction,
    createAccount
}
