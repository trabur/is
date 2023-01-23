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
function chisel (stone: any, tool: string, direction: boolean) {
  let block = `[${stone}]`;
  if (direction) {
    return chalk.hex(tool)(block); // private
  } else {
    return chalk.bgHex(tool)(block); // public
  }
}

/** WALLET */
function stack (call: any, dimension: number): any {
  if (call.level == dimension) {
    call.level = 0;
    return call;
  } else {
    let guidestone = chisel(call.podium, call.layers[call.level], false);
    call.obelisk.push(guidestone);
    call.level += 1;
    stack(call, dimension);
  }
}

/** FUNGIBILITY */
function quarry(mine: number, rock: string): any {
  let randomness = '';
  for (let pickAxe = 0; pickAxe < mine; pickAxe++) {
    let ore = Math.floor(Math.random() * rock.length);
    randomness += rock.substring(ore, ore + 1);
  }
  return randomness;
}

/** LEDGER */
function first (structure: any) {
  let step = 1;
  do {
    structure.obelisk = [];
    stack(structure, step);
    console.log(`[${structure.buildingPermit}]`, structure.obelisk.join(''));
    step++;
  } while (step < structure.height);
  return 6;
}
function middle (structure: any) {
  let shaft = [];
  for (let key = 0; key < structure.height; key++) {
    let keystone = chisel(structure.podium, structure.layers[key], true);
    shaft.push(keystone);
  }
  console.log(`[${structure.buildingPermit}]`, shaft.join(''));
  return 5;
}
function last (structure: any) {
  let step = structure.height - 1;
  do {
    structure.obelisk = [];
    stack(structure, step);
    console.log(`[${structure.buildingPermit}]`, structure.obelisk.join(''));
    step--;
  } while (step >= 1);
  return 7;
}

/** PROOF-OF-WORK */
function full (podium: string, height: number) {
  let signature = uuidv4();
  let blueprints: any[] = [0,0,0,0,0,0,0,0]; // is a length of 8
  blueprints.forEach((block: any, hash: number) => {
    blueprints[hash] = perfectSquare[quarry(1, pigments)];
  });
  let structure = { 
    podium,                   // 3 Capital Letters
    height,                   // maximum level
    level: 0,                 // current layer
    layers: blueprints,       // color barriers
    obelisk: [],              // when the walls fell
    buildingPermit: signature // requires approval
  };
  return first(structure) + middle(structure) + last(structure); // 18
}

/** SMART CONTRACTS */
class Prototype {
  public name: any = 'XXX';
  public size: any = 9;
  public component: object = {};
  public circularReference: any;
  constructor () {}
  public clone(): this {
    const clone = Object.create(this);
    clone.name = this.name;
    clone.size = this.size;
    clone.component = Object.create(this.component);
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };
    return clone;
  }
  public transaction () {
    full(this.name, this.size);
  }
}

/** DECENTRALIZATION */
class ComponentWithBackReference {
  public prototype;
  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

/** HASH */
const current = new Prototype();
current.name = "";              // nothing
current.size = 0;               // smallest unit
current.component = new Date(); // zero point
current.circularReference = new ComponentWithBackReference(current);
setInterval(() => {
  let next = current.clone();
  next.name = quarry(3, foundation);
  next.size = quarry(1, perfectTriagle);
  next.transaction();
}, 1000);