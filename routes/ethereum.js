const Web3 = require('web3');


var url = 'https://mainnet.infura.io/v3/ebaa91e650304dc9aaf9f7df61957564'
var web3 = new Web3(url)
var Accounts = require('web3-eth-accounts');
var accounts = new Accounts(url);

function createAccount()
{
    var out =  web3.eth.accounts.create();
    return out;
}
function currentProvider()
{
    var out = web3.eth.currentProvider;
    return out;
}
async function getGasPrice()
{
    var out = await web3.eth.getGasPrice().then(console.log);
    return out;
}
function sendTransaction(fromAcc,gasPrice,gas,toAcc,val,data,password)
{
    var out = web3.eth.personal.sendTransaction({
        from: fromAcc,
        gasPrice: gasPrice,
        gas: gas,
        to: toAcc,
        value: val,
        data: data
    },password)
    return out;
}
function getBlockNumber()
{
    var out = web3.eth.getBlockNumber().then(console.log);
    return out;
}
function getTransaction(txn_hash)
{
    var out = web3.eth.getTransaction(txn_hash).then(console.log);
    return out;
}
function getBalance(address)
{
    var out = web3.eth.getBalance(address).then(console.log);
    return out;
}
function createWallet(no_of_acc)
{
    var out = web3.eth.accounts.wallet.create(no_of_acc);
    return out;
}
function addAccount(address,pvt_key)
{
    var out = web3.eth.accounts.wallet.add({
        privateKey: pvt_key,
        address: address
    })
    return out;
}
module.exports = 
{
    createAccount,
    currentProvider,
    getGasPrice,
    sendTransaction,
    getBlockNumber,
    getTransaction,
    getBalance,
    createWallet,
    addAccount
}
// console.log(10*100);
// console.log(web3.eth.accounts.create());



