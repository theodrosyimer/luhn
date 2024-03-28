import { cardGenerator } from '../bonus/card'
import { generateImei } from '../bonus/imei'
import { options, Options } from './options'
import { handleArgs, handleOptionAndValue } from './validate'

export function handleCommands(args: string[]) {
  handleArgs(args)

  if (args[0] === '-g') {
    executeSubCommands(args)
  } else {
    executeCommands(args)
  }
}

export function executeCommands(args: string[]) {
  handleArgs(args)
  for (let i = 0; i < args.length; i += 2) {
    const { option, value } = handleOptionAndValue(args[i], args[i + 1])
    options[option as keyof Options](value)
  }
}

export function executeSubCommands(args: string[]) {
  const [_option, ...rest] = args

  if (rest.length > 2) {
    throw new Error('Too much arguments')
  }
  switch (rest[0]) {
    case 'imei':
      if (!Number.isNaN(rest[0])) {
        generateImei()
      }
      break
    case 'card':
      if (
        (!Number.isNaN(rest[1]) && rest[1] === 'master') ||
        rest[1] === 'visa' ||
        rest[1] === 'amex'
      ) {
        cardGenerator(rest[1])
      } else {
        throw new Error(
          `Expected card argument: master | visa | amex. Received: card ${rest[1]}`,
        )
      }
      break
    default:
      throw new Error(`-g ${rest[0]} is not a valid sub-command!`)
  }
}
