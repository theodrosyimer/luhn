import { formatWithOptions, inspect } from 'util'
import { handleCommands } from './lib/execute'
import { showGenerateHelp, showHelp } from './lib/help'

main(process.argv)

function main(args: string[]) {
  try {
    const cliArgs = args.slice(2)
    handleCommands(cliArgs)
  } catch (error) {
    if (error instanceof Error) {
      inspect.styles.string = 'red'
      if (process.argv[2] === '-g') {
        console.error(
          formatWithOptions({ colors: true }, '\n%o', error.message),
        )
        showGenerateHelp()
      } else {
        console.error(
          formatWithOptions({ colors: true }, '\n%o', error.message),
        )
        showHelp()
      }
      process.exitCode = 1
      process.exit()
    }
  }
}

// {
//   // TESTS
//   // Missing arguments
//   main(['', ''])

//   // Missing value (-f)
//   main(['', '', '-f', '-c', '5140256942783646', '-c', '5140256942783546'])

//   // Wrong option
//   main([
//     '',
//     '',
//     '-f',
//     '192924593889831',
//     '-c',
//     '5140256942783646',
//     '-c',
//     '5140256942783546',
//     '-w',
//     '5140256942783546',
//   ])

//   // Wrong value type
//   main(['', '', '-f', '192924593889831', '-c', '5140256942783646', '-c', 'A'])
// }
