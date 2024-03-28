export function isLuhn(userNb: string) {
  let nbDeLuhn: number = +userNb[userNb.length-1];

  for (let i = userNb.length - 2; i >= 0; i--) {
    let lastNumber: number = Number(userNb[i])

    if (
      (userNb.length % 2 == 0 && i % 2 == 0) ||
      (userNb.length % 2 != 0 && i % 2 != 0)
    ) {
      let multiplication: number = lastNumber * 2

      multiplication > 9
        ? (lastNumber = (multiplication % 10) + Math.trunc(multiplication / 10))
        : (lastNumber = lastNumber * 2)
    }

    nbDeLuhn += lastNumber
  }
  return nbDeLuhn
}

export function logIsLuhn(nbDeLuhn: number) {
  nbDeLuhn % 10 == 0 ? console.log('OK') : console.log('KO')
}
