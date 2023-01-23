import {Command, Flags} from '@oclif/core'

const Say = require('say').Say
const say = new Say('darwin' || 'win32' || 'linux')

export default class Hello extends Command {
  static description = 'Say hello'

  static examples = [
    `$ is hello mars --from earth`,
  ]

  static flags = {
    from: Flags.string({char: 'f', description: 'Who is saying hello', required: true}),
  }

  static args = [{name: 'person', description: 'Person to say hello to', required: true}]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Hello)

    let utter = `hello ${args.person} welcome to ${flags.from}!`
    say.speak(utter)
    this.log(`${utter} (./src/commands/hello/index.ts)`)
  }
}
