import { isLuhn } from './isLuhn'

export function completeLuhnNumber(userNb: string) {
  let nbDeLuhn: number
  const newUserNb: string = `${userNb}0`

  nbDeLuhn = +isLuhn(newUserNb)
  let result = 10 - (nbDeLuhn % 10)
  return result
}
