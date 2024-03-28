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
  console.log(
    '  -g [options] \tgenerate valid IMEI number and credit cards number (Visa, American Express and Mastercard)',
  )
  console.log('  -h         \tdisplay help for the command')
}

export function showGenerateHelp() {
  console.log('\nUsage: tsx luhn.ts -g [options]\n')
  console.log('Generate random IMEI number or credit card number by type.\n')
  console.log('Examples:')
  console.log('  tsx luhn.ts -g imei\n')
  console.log('  tsx luhn.ts -g card visa\n')
  console.log('  tsx luhn.ts -g card master\n')
  console.log('  tsx luhn.ts -g card amex\n')
  console.log('Commands:')
  console.log(
    '  imei [length]\tgenerate a valid IMEI number, length is OPTIONAL (default 15) and if given MUST be either 15, 16 or 17',
  )
  console.log('  card <type>\tgenerate a valid credit card number by type')
  // console.log('  -h         \tdisplay help for the command')
}
