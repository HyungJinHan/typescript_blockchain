import crypto from 'crypto';

// 타입 지정
interface BlockShape {
  hash: string;
  // 데이터와 이전 해시코드를 종합해 새로운 해시로 변환
  // 일방향 함수와 결정론적으로 작동
  // 이전 hash와 height, data를 전부 조합하여 새로운 hash를 생성함
  prevHash: string;
  // 데이터를 해시코드화 하는 작업
  height: number;
  data: string;
  // 거래내역과 같은 다양한 정보들을 저장
}

class Block implements BlockShape {
  public hash: string;

  // 초기값 지정
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }

  // 해시코드 생성을 위한 작업
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash('sha256').update(toHash).digest('hex');
  }
}

class Blockchain {
  private blocks: Block[];

  constructor() {
    this.blocks = [];
  }

  private getPrevHash() {
    if (this.blocks.length === 0) {
      return ''
    }

    return this.blocks[this.blocks.length - 1].hash;
  }

  public addBlock(data: string) {
    const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(newBlock);
  }

  public getBlocks() {
    return [...this.blocks];
    // 배열 내부의 데이터만을 가지고 새로운 배열을 리턴해줌
  }
}

const blockchain = new Blockchain();

blockchain.addBlock('First One');
blockchain.addBlock('Second One');
blockchain.addBlock('Third One');

blockchain.getBlocks().push(new Block('Hacking', 111111, 'Hacking Success'));
// 이렇게 외부에서 배열에 추가할 수 없도록 작업이 필요함 (보안 상의 이유)
// return [...this.blocks]; 작업을 통해 외부의 데이터를 추가하지 X

console.log(blockchain.getBlocks());
// 결과
// [
//   Block {
//     prevHash: '',
//     height: 1,
//     data: 'First One',
//     hash: '4d32c045dd6fbe1fd111729e13ebdb2d7af93136fbaab424dea0933020387050'
//   },
//   Block {
//     prevHash: '4d32c045dd6fbe1fd111729e13ebdb2d7af93136fbaab424dea0933020387050',
//     height: 2,
//     data: 'Second One',
//     hash: 'f60aec494df596e7a000fd42969063aa3ba1fb6c30887724a98f73b75f271382'
//   },
//   Block {
//     prevHash: 'f60aec494df596e7a000fd42969063aa3ba1fb6c30887724a98f73b75f271382',
//     height: 3,
//     data: 'Third One',
//     hash: 'e9f8c7258d2d9e4675ead87492f8eeb6ada0496176adec8b4fde6a4dcff935b4'
//   }
// ]