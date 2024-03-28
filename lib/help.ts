export function showHelp() {
  console.log('\nUsage: tsx luhn.ts [options]\n')
  console.log(
    'Validate a number based on Luhn algorithm and/or complete the given number to be valid according to the Luhn algorithm.\nMore than one occurrence of an option can be passed to the command.\n',
  )
  console.log('Example:')
  console.log(
    '  tsx luhn.ts -c 5140256942783546 -c 5140256942783646 -f 192924593889831\n',
  )
  console.log('Options:')
  console.log('  -c <number>\tvalidate the given number')
  console.log('  -f <number>\tcomplete the given number')
  console.log('  -h         \tdisplay help for the command')
}
