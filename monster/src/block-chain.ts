import chalk from 'chalk';
import { v4 as uuidv4 } from 'uuid';

const blockColors = '01234567'; 
const foundation: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const perfectTriagle: string = '573';
const perfectSquare: string[] = [
  // black, red, green, yellow
  "#111", "#e06c75", "#98c379", "#e5c07b", 
  // blue, purple, cyan, grey
  "#61afef", "#c678dd", "#56b6c2", "#AAA", 
];

function chisel (stone: any, tool: string, direction: boolean) {
  let block = `[${stone}]`
  if (direction) {
    return chalk.hex(tool)(block); // front
  } else {
    return chalk.bgHex(tool)(block); // back
  }
}

function stack (call: any) {
  if (call.level == call.height) {
    return null
  } else {
    call.level += 1
    stack(call)
  }
}

function first (structure: any) {
  let step = 1
  do {
    stack(structure)
    step++
  } while (step < structure.height)
  return 6
}

function middle (structure: any) {
  let shaft = []
  for (let key = 1; key <= structure.height; key++) {
    let keystone = chisel(structure.podium, structure.layers[key], true)
    shaft.push(keystone)
  }
  console.log(shaft.join(''))
  return 5
}

function last (structure: any) {
  let step = structure.height
  do {
    stack(structure)
    step--
  } while (step >= 1)
  return 7
}

function quarry(mine: number, rock: string): any {
  let randomness = '';
  for (let pickAxe = 0; pickAxe < mine; pickAxe++) {
    let ore = Math.floor(Math.random() * rock.length);
    randomness += rock.substring(ore, ore + 1);
  }
  return randomness;
}

function full (podium: string, height: number) {
  let blueprints: any[] = [0,0,0,0,0,0,0,0] // is a length of 8
  blueprints.forEach((block: any, hash: number) => {
    blueprints[hash] = perfectSquare[quarry(1, blockColors)]
  });

  let structure = { 
    podium,              // 3 Capital Letters
    height,              // maximum level
    level: 0,            // current layer
    layers: blueprints   // color barriers
  };

  return first(structure) + middle(structure) + last(structure); // 18
}

console.log(full("ABC", 3))