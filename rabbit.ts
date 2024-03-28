const directions = {
  nord: (y: number) => y + 1,
  sud: (y: number) => y - 1,
  droite: (x: number) => x + 1,
  gauche: (x: number) => x - 1,
} as const

function bunnyroad(instructions: string[]) {
  let coordinates = { x: 0, y: 0 }
  for (const instruction of instructions) {
    if (instruction === 'nord' || instruction === 'sud') {
      coordinates.y = directions[instruction](coordinates.y)
    } else {
      coordinates.x = directions[instruction as keyof typeof directions](
        coordinates.x,
      )
    }
  }
  return coordinates
}

console.log(
  bunnyroad(['droite', 'droite', 'gauche', 'droite', 'nord', 'sud', 'nord']),
)

// type Instruction = keyof typeof directions2

// const directions2 = {
//   nord: (y: number) => y + 1,
//   sud: (y: number) => y - 1,
//   droite: (x: number) => x + 1,
//   gauche: (x: number) => x - 1,
// } as const

// function bunnyroad2(instructions: Instruction[]) {
//   let coordinates = { x: 0, y: 0 }
//   for (const instruction of instructions) {
//     if (instruction === 'nord' || instruction === 'sud') {
//       coordinates.y = directions[instruction](coordinates.y)
//     } else {
//       coordinates.x = directions[instruction](coordinates.x)
//     }
//   }
//   return coordinates
// }

// console.log(
//   bunnyroad(['droite', 'droite', 'gauche', 'droite', 'nord', 'sud', 'nord']),
// )
