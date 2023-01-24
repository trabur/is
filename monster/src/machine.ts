/** GOVERNMENT */
let dollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
const A = 730 * 1000000 // Raider
const B = 7 * 1000000 // Abrams
const C = 3 * 1000000000 // LA, Seawolf, Verginia

/** CITIZENSHIP */
let military: any = []
const B21 = 7 // Raider
const A1 = 5 // Abrams
const LASV = 6 // LA, Seawolf, Verginia

abstract class WeaponsFactory {
  public abstract factoryMethod(): Product;

  public project(serialNumber: number, dollars: number): object {
    const assemblyLine = this.factoryMethod();
    assemblyLine.dollars = dollars
    assemblyLine.serialNumber = serialNumber

    return {
      serialNumber: assemblyLine.serialNumber,
      part: assemblyLine.process()
    };
  }
}

class ProduceStealthBomber extends WeaponsFactory {
  public factoryMethod(): Product {
    return new StealthBomberAssemblyLine();
  }
}
class ProduceStealthTank extends WeaponsFactory {
  public factoryMethod(): Product {
    return new StealthTankAssemblyLine();
  }
}
class ProduceStealthSubmarine extends WeaponsFactory {
  public factoryMethod(): Product {
    return new StealthSubmarineAssemblyLine();
  }
}

interface Product {
  dollars: number;
  serialNumber: number;
  process(): string;
}
class StealthBomberAssemblyLine implements Product {
  dollars = 0;
  serialNumber = 0;
  private nuclearTriad = 'air'
  public process(): string {
    return 'V';
  }
}
class StealthTankAssemblyLine implements Product {
  dollars = 0;
  serialNumber = 0;
  private nuclearTriad = 'land'
  public process(): string {
    return '=';
  }
}
class StealthSubmarineAssemblyLine implements Product {
  dollars = 0;
  serialNumber = 0;
  private nuclearTriad = 'sea'
  public process(): string {
    return '_';
  }
}

function uncleSam(mic: WeaponsFactory, order: number, amount: number): [] {
  let production: any = []
  for (let position = 1; position <= order; position++) {
    production.push(mic.project(position, amount))
  }
  return production
}

function tax(upper: number, middle: number, lower: number) {
  console.log('[1] MIC (Military Industrial Complex)');
  let air = dollar.format(B21 * upper)
  let land = dollar.format(A1 * middle)
  let sea = dollar.format(LASV * lower)
  console.log('[1] air: ', air)
  console.log('[1] land: ', land)
  console.log('[1] sea: ', sea)
  military = [
    ...uncleSam(new ProduceStealthBomber(), B21, upper), 
    ...uncleSam(new ProduceStealthTank(), A1, middle),
    ...uncleSam(new ProduceStealthSubmarine(), LASV, lower), 
  ]
  console.log('[1] ~~~')
  console.log('[1] total: ', dollar.format(B21 * upper + A1 * middle + LASV * lower))
}

function deploy(draft: []) {
  console.log('[2] DoW (Declaration of War)');
  let signature: any = []
  for (let i = draft.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [draft[i], draft[j]] = [draft[j], draft[i]];
    signature.push(j)
  }
  console.log('[2]', signature.join(' '), new Date().toISOString())
}

function command(forces: []) {
  console.log('[3] CoC (Chain of Command)');
  let fleet = ''
  forces.forEach((force: any) => {
    fleet += `${force.serialNumber}${force.part} `
  })
  console.log('[3]', fleet)
}

/** SERVICE */
setInterval(() => {
  console.log('[0] DoD (Deparment of Defense) {123}');
  tax(A, B, C); deploy(military); command(military);
  console.log('////////////////////////');
}, 1000);