import { Command, Flags } from '@oclif/core'
import { color } from '@oclif/color'
import { spawn } from 'child_process'

function clean (text: string) {
  const lastNewLine = text.lastIndexOf("\n");
  return text.slice(0, lastNewLine);
}

export default class Line extends Command {
  static description = 'Say line'

  static examples = [
    `$ is line JJJ --from AAA`,
  ]

  static flags = {
    from: Flags.string({char: 'f', description: 'Who is saying line', required: true}),
  }

  static args = [{name: 'person', description: 'Person to say line to', required: true}]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Line)

    this.log(`line ${args.person} from ${flags.from}! (./src/commands/line/index.ts)`)

    const ls = spawn('node', [`./monster/build/semiconductor.js`]);

    ls.stdout.on('data', (data) => {
      let message = clean(data)
      console.log(color.green(message));
    });

    ls.stderr.on('data', (data) => {
      
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
    
    return new Promise(() => {}); 
  }
}
