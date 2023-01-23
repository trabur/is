import chalk from 'chalk';
import { v4 as uuidv4 } from 'uuid';

/** GENESIS */
const pigments = '01234567'; 
const foundation: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const perfectTriagle: string = '573';
const perfectSquare: string[] = [
  // black, red, green, yellow
  "#111", "#e06c75", "#98c379", "#e5c07b", 
  // blue, purple, cyan, grey
  "#61afef", "#c678dd", "#56b6c2", "#AAA", 
];

/** MINING */
function chisel (stone: any, tool: string, point: boolean) {
  let block = `[${stone}]`;
  if (point) {
    return chalk.hex(tool)(block); // private
  } else {
    return chalk.bgHex(tool)(block); // public
  }
}

/** WALLET */
function stack (call: any, dimension: number): any {
  if (call.level == dimension) {
    call.level = 0;
    return call; // cryptography
  } else {
    let guidestone = chisel(call.podium, call.layers[call.level], false);
    call.obelisk.push(guidestone);
    call.level += 1;
    stack(call, dimension);
  }
}

/** FUNGIBILITY */
function quarry(mine: number, rock: string): any {
  let randomness = ''; // volatility
  for (let pickAxe = 0; pickAxe < mine; pickAxe++) {
    let ore = Math.floor(Math.random() * rock.length);
    randomness += rock.substring(ore, ore + 1);
  }
  return randomness;
}

/** LEDGER */
function first (structure: any) {
  let step = 1;
  do { // miner
    structure.obelisk = [];
    stack(structure, step); // encrypt
    console.log(`[${structure.buildingPermit}]`, structure.obelisk.join(''));
    step++;
  } while (step < structure.height);
  return 6;
}
function middle (structure: any) {
  let shaft = [];
  for (let key = 0; key < structure.height; key++) {
    let keystone = chisel(structure.podium, structure.layers[key], true);
    shaft.push(keystone); // plain text
  } // network
  console.log(`[${structure.buildingPermit}]`, shaft.join(''));
  return 5;
}
function last (structure: any) {
  let step = structure.height - 1;
  do { // builder
    structure.obelisk = [];
    stack(structure, step); // decrypt
    console.log(`[${structure.buildingPermit}]`, structure.obelisk.join(''));
    step--;
  } while (step >= 1);
  return 7;
}

/** PROOF-OF-WORK */
function full (stakeholders: string, verify: number) {
  let signature = uuidv4(); // zero-knowledge
  let blueprints: any[] = [0,0,0,0,0,0,0,0]; // is a length of 8
  blueprints.forEach((none: any, hash: number) => {
    blueprints[hash] = perfectSquare[quarry(1, pigments)];
  });
  let structure = { 
    podium: stakeholders,     // three capital letters
    height: verify,           // maximum level
    level: 0,                 // current layer
    layers: blueprints,       // color barriers
    obelisk: [],              // when the walls fell
    buildingPermit: signature // requires approval
  };
  return first(structure) + middle(structure) + last(structure); // 18
}

/** SMART CONTRACTS */
class Prototype {
  public name: any = 'XXX';      // CPU
  public size: any = 9;          // RAM
  public component: object = {}; // HD
  public self: any;              // computer
  public clone(): this {
    const agreement = Object.create(this);
    agreement.name = this.name;
    agreement.size = this.size;
    agreement.component = Object.create(this.component);
    agreement.self = {
      ...this.self,
      prototype: { ...this },
    };
    return agreement;
  }
  public transaction () {
    full(this.name, this.size);
  }
}

/** DECENTRALIZATION */
class InitiationWithBackReference {
  public prototype; // computer
  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

/** HASH */
const current = new Prototype();
current.name = "";              // nothing
current.size = 0;               // smallest unit
current.component = new Date(); // zero point
current.self = new InitiationWithBackReference(current);
setInterval(() => {
  let next = current.clone(); // difficulty
  next.name = quarry(3, foundation);
  next.size = quarry(1, perfectTriagle);
  next.transaction();
}, 1000);