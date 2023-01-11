import chalk from 'chalk';
import { v4 as uuidv4 } from 'uuid';

/** STORAGE */
const account: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const routing: string = '12345670';
const pin: string = '01234567';
const cotton: string[] = [
  "chalk", "chalk", "chalk", "chalk", 
  "chalk", "chalk", "chalk", "chalk",
];
const wool: string[] = [
  "chalk", "chalk", "chalk", "chalk",
  "chalk", "chalk", "chalk", "chalk",
];
const data: string[] = [
  // black, red, green, yellow
  "#111", "#e06c75", "#98c379", "#e5c07b", 
  // blue, purple, cyan, grey
  "#61afef", "#c678dd", "#56b6c2", "#AAA", 
];

/** COMPUTE */
interface Processor {
  align(edge: number, node: string): void;
  load(powder: string): void;
  spool(thread: string[]): void;
  snap(end: boolean): any;
}
class Chip implements Processor {
  line: string[] = [];
  target: string = 'TYU';
  color: string = 'clear';
  reel: number = 0;
  ruler: number = 0;
  private revolve() {
    if (this.reel > this.ruler) {
      this.contract(); this.contract(); this.contract(); this.contract();
      this.contract(); this.contract(); this.contract(); this.contract();
    } else {
      this.extend(); this.extend(); this.extend(); this.extend();
      this.extend(); this.extend(); this.extend(); this.extend();
    }
  }
  public align(edge: number, node: string): void {
    this.ruler = edge;
    this.target = node;
    this.revolve();
  }
  public load(powder: string): void {
    this.color = powder;
  }
  public spool(thread: string[]): void {
    this.line = thread;
  }
  private extend(): void {
    if (this.reel < this.ruler) {
      this.reel++;
    }
  }
  public snap(end: boolean): any {
    let operation = this.line.slice(0, this.reel + 1);
    let bridge = `${this.target} ---${operation.join('-')}--- ${this.target}`;
    if (end) {
      return chalk.hex(this.color)(bridge); // front
    } else {
      return chalk.bgHex(this.color)(bridge); // back
    }
  }
  private contract(): void {
    if (this.reel > this.ruler) {
      this.reel--;
    }
  }
}

/** RADIATOR */
interface AbstractFactoryFloor {
  createChalkBox(): AbstractChalkBox;
  createLightBox(): AbstractLightBox;
}
class ConcreteFactoryHard implements AbstractFactoryFloor {
  public createChalkBox(): AbstractChalkBox {
    return new DustyCottonCase();
  }
  public createLightBox(): AbstractLightBox {
    return new DirtyCottonCase();
  }
}
class ConcreteFactorySoft implements AbstractFactoryFloor {
  public createChalkBox(): AbstractChalkBox {
    return new DustyWoolCase();
  }
  public createLightBox(): AbstractLightBox {
    return new DirtyWoolCase();
  }
}

/** DRY */
const dust: string[] = data;
interface AbstractChalkBox {
  cableGuided(glitter: number, timeline: number, project: string): any;
}
class DustyCottonCase extends Chip implements AbstractChalkBox {
  public cableGuided(glitter: number, timeline: number, project: string): any {
    let bit = !!+network(1, "01");
    this.load(dust[glitter]);
    this.spool(cotton);
    this.align(timeline, project);
    return this.snap(bit);
  }
}
class DustyWoolCase extends Chip implements AbstractChalkBox {
  public cableGuided(glitter: number, timeline: number, project: string): any {
    let bit = !!+network(1, "01");
    this.load(dust[glitter]);
    this.spool(wool);
    this.align(timeline, project);
    return this.snap(bit);
  }
}

/** WET */
const dirt: string[] = data.reverse();
interface AbstractLightBox {
  lazerGuided(glitter: number, timeline: number, project: string): any;
}
class DirtyCottonCase extends Chip implements AbstractLightBox {
  public lazerGuided(glitter: number, timeline: number, project: string): any {
    let bit = !!+network(1, "10");
    this.load(dirt[glitter]);
    this.spool(cotton);
    this.align(timeline, project);
    return this.snap(bit);
  }
}
class DirtyWoolCase extends Chip implements AbstractLightBox {
  public lazerGuided(glitter: number, timeline: number, project: string): any {
    let bit = !!+network(1, "10");
    this.load(dirt[glitter]);
    this.spool(wool);
    this.align(timeline, project);
    return this.snap(bit);
  }
}

/** UPS */
function network(boot: number, rom: string) {
  let randomness = '';
  for (let sequence = 0; sequence < boot; sequence++) {
    let rank = Math.floor(Math.random() * rom.length);
    randomness += rom.substring(rank, rank + 1);
  }
  return randomness;
}
function computer(motherboard: AbstractFactoryFloor, datacenter: string) {
  const CPU = 3; const RAM = 1;
  const project = network(CPU, account);
  const timeline = +network(RAM, routing);
  const HD1 = +network(RAM, pin);
  const HD2 = +network(RAM, pin);
  const sockets = [
    motherboard.createChalkBox().cableGuided(HD1, timeline, project),
    motherboard.createLightBox().lazerGuided(HD2, timeline, project),
  ];
  for (var server of sockets) {
    console.log(`[${datacenter}] ${server}`);
  }
}
setInterval(() => {
  const carpetware = uuidv4();
  computer(new ConcreteFactoryHard(), carpetware);
  computer(new ConcreteFactorySoft(), carpetware);
}, 1000)