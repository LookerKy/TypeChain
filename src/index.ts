class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timpstamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timpstamp;
  }
}

const genesisBlock: Block = new Block(0, "202020202020", "", "Hello", 123456);

let blcokchanin: [Block] = [genesisBlock];

console.log(blcokchanin);

export {};
