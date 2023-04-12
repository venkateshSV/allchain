
![Logo](https://drive.google.com/uc?id=1TzBlEStp_q_aEO0wTwnJIXB3oYMS4QOb)


#### Develop, Deploy, and Innovate - seamlessly.

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

A package that helps a developer to use any blockchain network in their project and create decentralised application.

A JavaScript API to connect with the JSON-RPC of **Ethereum** and **Solana** network.



## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install allchain
```

Once the package is installed, you can import the library using require approach:

```js
const allchain = require('allchain')

console.log(new allchain.Eth());
```

You will notice this output on the terminal if everything works well.

```console
You are connected to Ethereum Chain.
Eth {}
```
You have connected to the Ethereum chain. 
To connect to solana type this on the terminal.
```js
const allchain = require('allchain')

console.log(new allchain.Sol());
```
Output
```console
You are connected to Solana Chain.
Sol {}
```
    
## Documentation

This package allows to make dapps on multiple chains using **allchain**.

Following are the features of allchain.
* createAccount
* currentProvider
* getGasPrice
* sendTransaction
* getBlock
* getBlockNumber
* getBalance
* createWallet
* addAccount





## Usage/Examples

The following code demonstrates the working of allchain's one of the other feature.

To get the wallet balance of your account using account address.

```javascript
allchain = require('allchain');

function eth_balance(account_address)
{
    return allchain.Eth.getBalance(account_address);
}

function sol_balance(account_address)
{
    return allchain.Sol.getBalance(account_address);
}

```
The above functions returns the balance of the provided address.


## Support

For support, email mail us at venkatash.sv@gmail.com and kshitijlm10@gmail.com.

