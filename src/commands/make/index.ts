import {Command, Flags} from '@oclif/core'

const Say = require('say').Say
const say = new Say('darwin' || 'win32' || 'linux')

export default class Make extends Command {
  static description = 'Say make'

  static examples = [
    `$ is make coffee --for mars`,
  ]

  static flags = {
    for: Flags.string({char: 'f', description: 'Who is saying make', required: true}),
  }

  static args = [{name: 'order', description: 'What is being made', required: true}]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Make)

    let utter = `customer ${flags.for} your order of ${args.order} is ready!`
    say.speak(utter)
    this.log(`${utter} (./src/commands/make/index.ts)`)
  }
}
