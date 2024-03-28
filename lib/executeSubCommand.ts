export function executeSubCommand(args: string[]) {
  const [subcommand, ...rest] = args

  switch (subcommand) {
    case 'imei':
      if (rest) {
      }
      break
    case 'card':
      break
    default:
      throw new Error(`-g ${subcommand} does not exist!`)
  }
}
