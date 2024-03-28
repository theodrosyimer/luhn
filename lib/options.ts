import { completeLuhnNumber } from './completeLuhnNumber'
import { showHelp } from './help'
import { isLuhn, logIsLuhn } from './isLuhn'

export type Options = typeof options

export const options = {
  '-c': (value: string) => logIsLuhn(isLuhn(value)),
  '-f': (value: string) => completeLuhnNumber(value),
  '-h': () => showHelp(),
} as const
