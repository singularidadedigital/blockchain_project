const Block = require("./Block")
const Blockchain = require("./Blockchain")

const bloco1 = new Block()
// console.log(bloco1)

const blockchain = new Blockchain()
blockchain.addBlock([{
    from: 'a',
    to: 'b',
    amount: 10    
}])

console.log(blockchain)