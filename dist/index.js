"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timpstamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timpstamp;
    }
}
const genesisBlock = new Block(0, "202020202020", "", "Hello", 123456);
let blcokchanin = [genesisBlock];
console.log(blcokchanin);
//# sourceMappingURL=index.js.map