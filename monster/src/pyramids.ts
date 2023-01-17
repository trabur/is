import chalk from 'chalk';
import { v4 as uuidv4 } from 'uuid';

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
  return 1
}

function middle (structure: any) {
  let keystone = []
  for (let key = 1; key <= structure.height; key++) {
    keystone.push(`[${structure.podium}]`)
  }
  console.log(keystone.join(''))
  return 0
}

function last (structure: any) {
  let step = structure.height
  do {
    stack(structure)
    step--
  } while (step >= 1)
  return 1
}

function quarry(mine: number, rock: string) {
  let randomness = '';
  for (let pickAxe = 0; pickAxe < mine; pickAxe++) {
    let ore = Math.floor(Math.random() * rock.length);
    randomness += rock.substring(ore, ore + 1);
  }
  return randomness;
}

function full (podium: string, height: number) {
  let structure = { 
    podium, 
    height,
    level: 0
  };
  return first(structure) + middle(structure) + last(structure); // ?
}

console.log(full("FTX", 3))