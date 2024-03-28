import { options, Options } from './options'

export function handleArgs(args: string[]) {
  if (!args.length) {
    throw new Error('Missing arguments!')
  }
}

export function handleOptionAndValue(option: string, value: string) {
  if (
    (!value && option !== '-h') ||
    (option !== '-h' && value.startsWith('-'))
  ) {
    throw new Error(`${option} is missing a value!`)
  }
  return {
    option: handleOption(option),
    value: handleValue(value, option),
  }
}

export function handleOption(option: string) {
  if (!options[option as keyof Options]) {
    throw new Error(`${option} is not a valid option!`)
  }
  return option
}

export function handleValue(value: string, option?: string) {
  if (Number.isNaN(+value) && option !== '-h') {
    throw new Error(
      `${option} value must be a number! Received: ${option} ${JSON.stringify(value)}`,
    )
  }
  return value
}

export function handleImeiOption(option: string) {}
export function handleImeiValue(
  value: string,
  option?: string,
  subcommand?: string,
) {
  if (Number.isNaN(+value) && option !== '-h') {
    throw new Error(
      `${option} value must be a number! Received: ${option} ${JSON.stringify(value)}`,
    )
  }
  if (
    (value && value !== '15') ||
    (value && value !== '16') ||
    (value && value !== '17')
  ) {
    throw new Error(
      `${option} ${subcommand} value must be a number! Received: ${option} ${subcommand} ${JSON.stringify(value)}`,
    )
  }
}
export function handleCardOption(option: string) {}
export function handleCardValue(value: string) {}
