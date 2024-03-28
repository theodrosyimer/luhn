interface Matrix {
  0: number[];
  1: number[];
  2: number[];
  3: number[];
  4: number[];
  5: number[];
  6: number[];
  7: number[];
  8: number[];
  9: number[];
}

interface Result {
  row: number;
  col: number;
}

const dammMatrix: Matrix = {
  0: [0, 3, 1, 7, 5, 9, 8, 6, 4, 2],
  1: [7, 0, 9, 2, 1, 5, 4, 8, 6, 3],
  2: [4, 2, 0, 6, 8, 7, 1, 3, 5, 9],
  3: [1, 7, 5, 0, 9, 8, 3, 4, 2, 6],
  4: [6, 1, 2, 3, 0, 4, 5, 9, 7, 8],
  5: [3, 6, 7, 4, 2, 0, 9, 5, 8, 1],
  6: [5, 8, 6, 9, 7, 2, 0, 1, 3, 4],
  7: [8, 9, 4, 5, 3, 6, 2, 0, 1, 7],
  8: [9, 4, 3, 8, 6, 1, 7, 2, 0, 5],
  9: [2, 5, 8, 1, 4, 3, 6, 7, 9, 0],
};

function dammNumber(userNb: string) {
  let result: Result = {
    row: 0,
    col: +userNb[0],
  };

  for (let i = 0; i < userNb.length + 1; i++) {
    if (i < userNb.length - 1) {
      result.row = dammMatrix[result.row][result.col];
      result.col = +userNb[i + 1];
    } else if (i === userNb.length) {
      result.row = dammMatrix[result.row][result.col];
      result.col = result.row;

      if (dammMatrix[result.row][result.col] === 0) {
        console.log(`KO but OK with ${result.col} as key.`);
      }
    }
  }
}

function isDammNumber(userNb: string) {
  let result: Result = {
    row: 0,
    col: +userNb[0],
  };

  for (let i = 0; i < userNb.length; i++) {
    if (i < userNb.length - 1) {
      result.row = dammMatrix[result.row][result.col];
      result.col = +userNb[i + 1];
    }
  }
  result.row != result.col ? dammNumber(userNb) : console.log("OK");
}

// TEST
// isDammNumber("572"); //ko
// isDammNumber("5724"); //ok
// isDammNumber("5727"); //ko
// isDammNumber("112946"); //ok
// isDammNumber("112949"); //ko
