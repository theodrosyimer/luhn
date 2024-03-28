import { completeLuhnNumber } from './completeLuhnNumber'
import { executeSubCommands } from './execute'
import { showHelp } from './help'
import { isLuhn, logIsLuhn } from './isLuhn'

export type Options = typeof options

export const options = {
  '-c': (value: string) => logIsLuhn(isLuhn(value)),
  '-f': (value: string) => console.log(completeLuhnNumber(value)),
  '-h': () => showHelp(),
} as const

export type OptionsSubCommand = typeof options

export const optionsSubCommand = {
  '-g': (args: string[]) => executeSubCommands(args),
} as const
