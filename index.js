const Block = require("./Block")
const Blockchain = require("./Blockchain")

const bloco1 = new Block()
// console.log(bloco1)

const blockchain = new Blockchain()
blockchain.addBlock([{from: 'a',to: 'b',amount: 10 }])
blockchain.addBlock([{from: 'b',to: 'c',amount: 15}])
// console.log(blockchain)
// console.log(blockchain.isValid())

blockchain.blocks[1].data = {from:'a',to: 'b',amount:1000}
console.log(blockchain)
console.log(blockchain.isValid())