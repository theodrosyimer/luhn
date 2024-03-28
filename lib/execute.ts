import { options, Options } from './options'
import { handleArgs, handleOptionAndValue } from './validate'

export function execute(args: string[]) {
  handleArgs(args)
  for (let i = 0; i < args.length; i += 2) {
    const { option, value } = handleOptionAndValue(args[i], args[i + 1])
    options[option as keyof Options](value)
  }
}
