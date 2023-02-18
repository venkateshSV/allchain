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
    var out = await web3.eth.getGasPrice();
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
module.exports = 
{
    createAccount,
    currentProvider,
    getGasPrice,
    sendTransaction
}
// console.log(10*100);
// console.log(web3.eth.accounts.create());



