const web3 = require("@solana/web3.js");
const bs58 = require('bs58');

const obj = require("allchain");

let secretKey = bs58.decode("4pSsnhLYoS7dbokLkF283cjWbujtpnQ64SgsGCqYQcdE4mUQxvBM9Pm5ZrafwEYKcyYhUtgDPHsWT83HmyY5bgxC");
// console.log(`[${web3.Keypair.fromSecretKey(secretKey).secretKey}]`);
// let secretKeyArray = `[${web3.Keypair.fromSecretKey(secretKey).secretKey}]`;
const secret = Uint8Array.from([190,247,124,41,219,171,177,102,89,117,122,107,195,102,170,103,248,94,140,45,68,97,90,86,7,4,68,55,211,212,247,44,171,225,89,128,149,207,63,160,24,86,144,137,218,87,65,9,119,40,145,186,73,36,2,101,166,131,15,102,57,212,196,237]); 
const fromkeyPair = web3.Keypair.fromSecretKey(secret);
const topublicKey = new web3.PublicKey('Ch7VzgEdVj3v7Hyxukm1tQQTaqvwhV51LbwAA1W5QRbs');

// console.log(obj.airdrop(obj.getPubkey(),1));
// console.log(obj.Sol.sendTransaction(fromkeyPair,topublicKey,1));
// console.log(obj.Sol.getTransaction(obj.Sol.getPubkey()));
// console.log(obj.Sol.getPubkey());
// console.log(obj.createAccount());
console.log(obj.Sol.currentProvider());
// console.log(obj.Sol.getBalance());