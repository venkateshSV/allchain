const solana = require('./routes/solana');
const ethereum = require('./routes/ethereum');

const Sol =  solana.Sol;
const Eth =  ethereum.Eth;

module.exports =
{
    Sol,
    Eth
}

// console.log();
// console.log(Eth);
// export * from './routes/ethereum';
// export const LAMPORTS_PER_SOL = 1000000000;