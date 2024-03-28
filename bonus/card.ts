import { completeLuhnNumber } from '../lib/completeLuhnNumber'
import { isLuhn } from '../lib/isLuhn'

const cardIssuer = { min: 10000000000000, max: 99999999999999 }
const cardArg = { master: 5, visa: 4, amex: 3 }

function getRandomInt() {
  const minCeiled = Math.ceil(cardIssuer.min)
  const maxFloored = Math.floor(cardIssuer.max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function master() {
  let masterNumber: number = cardArg.master
  let issuer: number = getRandomInt()
  let cardNumber = `${masterNumber}${issuer}`
  let missingNumber = completeLuhnNumber(cardNumber)
  let fullCardNumber = `${masterNumber}${issuer}${missingNumber}`
  if (!(isLuhn(fullCardNumber) % 10 === 0)) {
    return master()
  }
  let prettyCard = [...fullCardNumber]
    .map((d, i) => (i % 4 == 0 ? ' ' + d : d))
    .join('')
    .trim()
  console.log(`Here is your new MasterCard  card number : ${prettyCard}`)
  // console.log(isLuhn(fullCardNumber) % 10 === 0);

  return fullCardNumber
}

function visa() {
  let masterNumber: number = cardArg.visa
  let issuer: number = getRandomInt()
  let cardNumber = `${masterNumber}${issuer}`
  let missingNumber = completeLuhnNumber(cardNumber)
  let fullCardNumber = `${masterNumber}${issuer}${missingNumber}`
  if (!(isLuhn(fullCardNumber) % 10 === 0)) {
    return visa()
  }

  let prettyCard = [...fullCardNumber]
    .map((d, i) => (i % 4 == 0 ? ' ' + d : d))
    .join('')
    .trim()
  console.log(`Here is your new Visa card number : ${prettyCard}`)
  // console.log(isLuhn(fullCardNumber) % 10 === 0);

  return fullCardNumber
}

function amex() {
  let masterNumber: number = cardArg.amex
  let issuer: number = getRandomInt()
  let cardNumber = `${masterNumber}${issuer}`
  let missingNumber = completeLuhnNumber(cardNumber)
  let fullCardNumber = `${masterNumber}${issuer}${missingNumber}`
  if (!(isLuhn(fullCardNumber) % 10 === 0)) {
    return amex()
  }

  let prettyCard = [...fullCardNumber]
    .map((d, i) => (i % 4 == 0 ? ' ' + d : d))
    .join('')
    .trim()
  console.log(`Here is your new American Express card number : ${prettyCard}`)
  // console.log(isLuhn(fullCardNumber) % 10 === 0);

  return fullCardNumber
}

export function cardGenerator(input: string) {
  switch (input) {
    case 'master':
      master()
      break
    case 'visa':
      visa()
      break
    case 'amex':
      amex()
      break
    default:
      console.error('Wrong type of Card')
  }
}
