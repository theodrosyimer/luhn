import { completeLuhnNumber } from '../lib/completeLuhnNumber'
import { isLuhn } from '../lib/isLuhn'

/*
The IMEI (15 decimal digits: 14 digits plus a check digit) includes information on the origin, model, and serial number of the device.

The IMEI is validated in following steps:

Starting from the rightmost digit, double the value of every second digit (e.g., 7 becomes 14).
If doubling of a number results in a two digits number i.e greater than 9(e.g., 7 × 2 = 14), then add the digits of the product (e.g., 14: 1 + 4 = 5), to get a single digit number.
Now take the sum of all the digits.
Check if the sum is divisible by 10 i.e.(total modulo 10 is equal to 0) then the IMEI number is valid; else it is not valid.
*/
function randomMinMax(min = 0, max = 0): number {
  return Math.max(Math.round(Math.random() * max), min)
}

export function generateImei(length: '15' | '16' | '17' = '15') {
  const generatedNumsAsString: string[] = []

  for (let i = 0; i < +length - 1; i++) {
    generatedNumsAsString.push(randomMinMax(0, 9).toString())
  }

  const luhnNum = completeLuhnNumber(generatedNumsAsString.join(''))
  generatedNumsAsString.push(luhnNum.toString())
  const imeiToValidateAsString = generatedNumsAsString.join('')

  if (!(isLuhn(imeiToValidateAsString) % 10 === 0)) {
    return generateImei(length)
  }

  console.log(+generatedNumsAsString.join(''))
  return +generatedNumsAsString.join('')
}

// generateImei('17')
