import chalk from 'chalk';
import { v4 as uuidv4 } from 'uuid';

const sales = '_NEEDS';
const pitch = 'THE_CORNER_STORE_FOR_ALL_YOUR_';
const trademarks = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const orders: string = '01234567';
const products: string[] = [
  // black, red, green, yellow
  "#111", "#e06c75", "#98c379", "#e5c07b", 
  // blue, purple, cyan, grey
  "#61afef", "#c678dd", "#56b6c2", "#AAA", 
];

/** AIR CASTLE */
interface Builder {
  hashPart1(): void; // A
  hashPart2(): void; // B
  hashPart3(): void; // C
  hashPart4(): void; // D
  hashPart5(): void; // E
}

class ConcreteBuilder implements Builder {
  private box!: Building;
  private sign: string = 'ABC';
  private post: string = '';

  constructor(idea: string, concept: string) {
    this.sign = idea;
    this.post = concept;
    this.wallet(idea, concept);
  }

  private wallet(card: string, routing: string): void {
    let barcode = +cornerStore(1, orders);
    let item = products[barcode];
    this.box = new Building(card, routing, item);
  }
  public hashPart1(): void {
    this.box.stack.push(`! defund the ${this.sign}`);
  }
  public hashPart2(): void {
    this.box.stack.push(`@ abolish the ${this.sign}`);
  }
  public hashPart3(): void {
    this.box.stack.push(`# free all ${this.sign}`);
  }
  public hashPart4(): void {
    this.box.stack.push(`$ tax the ${this.sign}`);
  }
  public hashPart5(): void {
    this.box.stack.push(`% banish the ${this.sign}`);
  }
  public getTransaction(): Building {
    const process = this.box;
    this.wallet(this.sign, this.post);
    return process;
  }
}

class Building {
  public stack: string[] = [];
  private triad: string = 'XYZ';
  private point: string = '';
  private paint: string = '';

  constructor (blueprints: string, site: string, color: string) {
    this.triad = blueprints;
    this.point = site;
    this.paint = color;
  }

  public listOrders(): void {
    console.log(`[${this.point}]`, chalk.bgHex(this.paint)(`${pitch}${this.triad}${sales}:`));
    this.stack.forEach((part, index) => {
      console.log(`[${this.point}]`, chalk.hex(this.paint)(`${index + 1}) ${part}`));
    })
  }
}

class Director {
  private crypto!: Builder;

  public setBuilder(currency: Builder): void {
    this.crypto = currency;
  }
  public buildMinimalViableProduct(): void {
    this.crypto.hashPart1();
  }
  public buildFullFeaturedProduct(): void {
    this.crypto.hashPart1();
    this.crypto.hashPart2();
    this.crypto.hashPart3();
    this.crypto.hashPart4();
    this.crypto.hashPart5();
  }
  public buildAlienTechnologyProduct(): void {
    this.crypto.hashPart5();
    this.crypto.hashPart1();
  }
}

/** BAM CASTLE */
function block(ledger: Director, theorem: string, chain: string) {
  let hash = +cornerStore(1, orders);
  let link = products[hash];
  const miner = new ConcreteBuilder(theorem, chain);
  ledger.setBuilder(miner);

  ledger.buildMinimalViableProduct();
  miner.getTransaction().listOrders();
  console.log(`[${chain}]`, chalk.bgHex(link)(` ---big bang---`));
  ledger.buildFullFeaturedProduct();
  miner.getTransaction().listOrders();
  console.log(`[${chain}]`, chalk.bgHex(link)(` ---government---`));
  ledger.buildAlienTechnologyProduct();
  miner.getTransaction().listOrders();
  console.log(`[${chain}]`, chalk.bgHex(link)(` ---science-fiction---`));
  miner.hashPart3();
  miner.hashPart3();
  miner.getTransaction().listOrders();
  console.log(`[${chain}]`, chalk.bgHex(link)(` ---custom---`));
}

function cornerStore(ponzi: number, players: string) {
  let randomness = '';
  for (let pyramidLevel = 0; pyramidLevel < ponzi; pyramidLevel++) {
    let position = Math.floor(Math.random() * players.length);
    randomness += players.substring(position, position + 1);
  }
  return randomness;
}

/** BIT CASTLE */
const coin = new Director();
setInterval(() => {
  let O = uuidv4();
  let bit = cornerStore(3, trademarks);
  block(coin, bit, O);
}, 1000);