#!/usr/bin/node

function* range(start, end) {
  yield start;
  if (start === end) return;
  yield* range(start + 1, end);
}


const sourceArray = [
  ['G','D','V','Z','J','S','B'],
  ['Z','S','M','G','V','P'],
  ['C','L','B','S','W','T','Q','F'],
  ['H','J','G','W','M','R','V','Q'],
  ['C','L','S','N','F','M','D'],
  ['R','G','C','D'],
  ['H','G','T','R','J','D','S','Q'],
  ['P','F','V'],
  ['D','R','S','T','J']
]

const input = `move 3 from 5 to 2
move 3 from 8 to 4
move 7 from 7 to 3
move 14 from 3 to 9
move 8 from 4 to 1
move 1 from 7 to 5
move 2 from 6 to 4
move 4 from 5 to 7
move 1 from 3 to 6
move 3 from 4 to 3
move 1 from 4 to 1
move 5 from 1 to 9
move 1 from 4 to 6
move 4 from 7 to 4
move 15 from 9 to 2
move 7 from 1 to 6
move 3 from 3 to 5
move 1 from 4 to 9
move 2 from 5 to 3
move 2 from 4 to 9
move 4 from 1 to 6
move 1 from 3 to 1
move 1 from 3 to 2
move 4 from 6 to 3
move 24 from 2 to 8
move 4 from 9 to 8
move 1 from 1 to 3
move 2 from 5 to 4
move 1 from 2 to 4
move 19 from 8 to 1
move 5 from 3 to 9
move 8 from 1 to 3
move 3 from 4 to 1
move 6 from 9 to 5
move 2 from 3 to 4
move 1 from 8 to 5
move 2 from 4 to 6
move 11 from 6 to 1
move 8 from 8 to 7
move 1 from 6 to 5
move 13 from 1 to 3
move 1 from 1 to 7
move 2 from 7 to 8
move 5 from 7 to 1
move 2 from 8 to 4
move 3 from 5 to 3
move 11 from 3 to 1
move 2 from 5 to 3
move 2 from 5 to 3
move 2 from 7 to 1
move 7 from 3 to 1
move 1 from 4 to 5
move 1 from 6 to 4
move 3 from 4 to 7
move 3 from 7 to 1
move 6 from 3 to 5
move 1 from 5 to 9
move 4 from 5 to 4
move 2 from 3 to 4
move 8 from 9 to 2
move 5 from 4 to 6
move 1 from 6 to 5
move 1 from 4 to 9
move 39 from 1 to 7
move 7 from 2 to 6
move 1 from 9 to 3
move 1 from 2 to 7
move 1 from 3 to 1
move 5 from 7 to 3
move 4 from 5 to 1
move 19 from 7 to 9
move 1 from 9 to 8
move 1 from 9 to 7
move 5 from 9 to 3
move 6 from 6 to 7
move 1 from 8 to 3
move 4 from 1 to 4
move 23 from 7 to 6
move 1 from 1 to 6
move 21 from 6 to 2
move 3 from 4 to 8
move 7 from 6 to 1
move 1 from 4 to 9
move 1 from 6 to 7
move 6 from 1 to 2
move 1 from 7 to 4
move 15 from 2 to 8
move 5 from 3 to 8
move 22 from 8 to 7
move 1 from 8 to 1
move 5 from 3 to 4
move 1 from 3 to 2
move 1 from 1 to 2
move 3 from 4 to 8
move 3 from 8 to 9
move 11 from 2 to 1
move 2 from 1 to 4
move 15 from 9 to 5
move 22 from 7 to 3
move 2 from 4 to 9
move 3 from 4 to 2
move 8 from 1 to 8
move 6 from 8 to 6
move 1 from 6 to 2
move 3 from 6 to 9
move 3 from 2 to 7
move 4 from 2 to 9
move 2 from 7 to 5
move 1 from 1 to 7
move 2 from 8 to 2
move 2 from 7 to 5
move 9 from 5 to 3
move 8 from 5 to 2
move 1 from 6 to 4
move 1 from 6 to 9
move 1 from 2 to 9
move 2 from 5 to 1
move 7 from 2 to 3
move 1 from 4 to 3
move 1 from 2 to 4
move 5 from 3 to 4
move 6 from 9 to 3
move 1 from 2 to 6
move 6 from 9 to 6
move 2 from 1 to 8
move 3 from 6 to 3
move 2 from 8 to 6
move 6 from 4 to 1
move 14 from 3 to 9
move 1 from 6 to 4
move 3 from 3 to 9
move 1 from 4 to 5
move 10 from 9 to 6
move 6 from 6 to 7
move 2 from 1 to 8
move 1 from 8 to 6
move 16 from 3 to 2
move 1 from 8 to 1
move 1 from 7 to 1
move 7 from 3 to 4
move 1 from 6 to 5
move 4 from 2 to 3
move 5 from 4 to 9
move 2 from 4 to 5
move 4 from 7 to 4
move 5 from 9 to 6
move 2 from 5 to 4
move 11 from 6 to 7
move 1 from 6 to 8
move 5 from 1 to 5
move 2 from 6 to 4
move 7 from 7 to 3
move 1 from 8 to 6
move 2 from 7 to 3
move 1 from 1 to 3
move 3 from 2 to 8
move 9 from 2 to 5
move 1 from 6 to 1
move 1 from 4 to 8
move 7 from 4 to 7
move 8 from 5 to 6
move 1 from 7 to 2
move 1 from 7 to 4
move 3 from 7 to 8
move 1 from 2 to 3
move 1 from 1 to 2
move 1 from 1 to 7
move 3 from 7 to 6
move 11 from 6 to 2
move 4 from 8 to 7
move 2 from 8 to 7
move 15 from 3 to 2
move 7 from 9 to 4
move 3 from 3 to 2
move 4 from 4 to 7
move 5 from 7 to 3
move 3 from 4 to 6
move 3 from 6 to 9
move 1 from 4 to 2
move 1 from 8 to 1
move 2 from 3 to 7
move 2 from 3 to 7
move 23 from 2 to 5
move 1 from 9 to 1
move 1 from 7 to 9
move 1 from 1 to 8
move 8 from 7 to 1
move 1 from 8 to 4
move 1 from 4 to 2
move 3 from 9 to 8
move 1 from 7 to 9
move 22 from 5 to 9
move 1 from 8 to 5
move 1 from 7 to 4
move 1 from 4 to 5
move 1 from 8 to 3
move 2 from 9 to 3
move 5 from 5 to 2
move 5 from 5 to 4
move 3 from 2 to 7
move 1 from 7 to 3
move 6 from 1 to 7
move 4 from 3 to 1
move 6 from 2 to 8
move 1 from 5 to 6
move 2 from 8 to 1
move 12 from 9 to 4
move 8 from 9 to 4
move 1 from 2 to 9
move 2 from 9 to 8
move 3 from 2 to 8
move 5 from 8 to 6
move 7 from 7 to 1
move 4 from 8 to 9
move 1 from 6 to 1
move 17 from 4 to 7
move 1 from 2 to 4
move 2 from 4 to 1
move 6 from 4 to 6
move 1 from 1 to 4
move 7 from 1 to 5
move 9 from 7 to 9
move 8 from 9 to 8
move 5 from 8 to 3
move 1 from 5 to 6
move 2 from 3 to 6
move 1 from 9 to 1
move 1 from 6 to 1
move 10 from 6 to 1
move 1 from 5 to 1
move 2 from 9 to 1
move 1 from 9 to 7
move 2 from 6 to 8
move 2 from 8 to 2
move 1 from 6 to 8
move 22 from 1 to 9
move 9 from 7 to 5
move 1 from 8 to 1
move 2 from 8 to 3
move 4 from 5 to 9
move 1 from 8 to 3
move 5 from 1 to 9
move 2 from 7 to 3
move 2 from 4 to 7
move 1 from 8 to 5
move 2 from 2 to 4
move 1 from 5 to 8
move 9 from 5 to 8
move 2 from 7 to 5
move 2 from 4 to 5
move 3 from 8 to 4
move 3 from 4 to 3
move 2 from 8 to 6
move 1 from 6 to 4
move 3 from 5 to 9
move 1 from 6 to 3
move 12 from 3 to 5
move 1 from 3 to 1
move 7 from 5 to 4
move 1 from 1 to 3
move 1 from 8 to 1
move 7 from 5 to 1
move 6 from 9 to 6
move 29 from 9 to 5
move 2 from 4 to 6
move 26 from 5 to 2
move 24 from 2 to 7
move 1 from 3 to 2
move 8 from 1 to 7
move 7 from 6 to 9
move 2 from 5 to 3
move 1 from 6 to 4
move 3 from 8 to 5
move 2 from 3 to 8
move 2 from 2 to 8
move 5 from 9 to 2
move 27 from 7 to 2
move 2 from 8 to 3
move 2 from 9 to 5
move 3 from 8 to 5
move 2 from 7 to 4
move 3 from 4 to 7
move 2 from 3 to 2
move 4 from 5 to 1
move 5 from 7 to 2
move 29 from 2 to 8
move 9 from 8 to 3
move 2 from 4 to 8
move 7 from 3 to 2
move 3 from 5 to 4
move 1 from 7 to 5
move 3 from 5 to 6
move 2 from 1 to 8
move 2 from 6 to 8
move 3 from 4 to 2
move 4 from 4 to 2
move 1 from 6 to 8
move 8 from 2 to 4
move 2 from 3 to 5
move 1 from 4 to 1
move 3 from 1 to 2
move 4 from 8 to 2
move 3 from 4 to 9
move 3 from 4 to 1
move 2 from 9 to 5
move 1 from 4 to 6
move 4 from 5 to 1
move 1 from 6 to 8
move 1 from 9 to 3
move 4 from 2 to 3
move 15 from 8 to 2
move 9 from 8 to 1
move 1 from 3 to 9
move 5 from 1 to 9
move 3 from 9 to 7
move 2 from 7 to 6
move 3 from 3 to 2
move 1 from 7 to 8
move 1 from 9 to 6
move 1 from 9 to 8
move 2 from 8 to 2
move 1 from 1 to 2
move 1 from 3 to 7
move 4 from 1 to 7
move 19 from 2 to 5
move 1 from 1 to 4
move 1 from 7 to 4
move 1 from 1 to 5
move 3 from 1 to 4
move 1 from 1 to 8
move 6 from 2 to 4
move 7 from 2 to 1
move 2 from 7 to 9
move 8 from 2 to 8
move 2 from 7 to 3
move 1 from 6 to 4
move 10 from 4 to 6
move 5 from 6 to 7
move 2 from 9 to 8
move 6 from 8 to 9
move 1 from 2 to 3
move 2 from 8 to 3
move 5 from 1 to 8
move 8 from 5 to 2
move 8 from 8 to 7
move 7 from 2 to 8
move 1 from 1 to 2
move 1 from 9 to 7
move 1 from 4 to 2
move 2 from 2 to 6
move 5 from 9 to 3
move 2 from 8 to 6
move 2 from 3 to 9
move 4 from 8 to 6
move 7 from 6 to 1
move 8 from 1 to 5
move 1 from 8 to 7
move 1 from 9 to 6
move 12 from 5 to 3
move 1 from 4 to 8
move 2 from 9 to 5
move 1 from 2 to 3
move 3 from 5 to 1
move 1 from 1 to 5
move 21 from 3 to 8
move 2 from 1 to 5
move 6 from 5 to 7
move 2 from 5 to 6
move 10 from 6 to 9
move 1 from 6 to 8
move 13 from 8 to 2
move 2 from 5 to 4
move 2 from 4 to 3
move 4 from 9 to 1
move 5 from 7 to 8
move 12 from 8 to 1
move 5 from 9 to 6
move 1 from 3 to 7
move 2 from 6 to 5
move 11 from 2 to 1
move 1 from 8 to 4
move 16 from 1 to 9
move 1 from 2 to 6
move 1 from 8 to 5
move 12 from 9 to 3
move 14 from 7 to 2
move 1 from 7 to 9
move 1 from 4 to 2
move 1 from 7 to 5
move 3 from 9 to 5
move 4 from 6 to 9
move 3 from 9 to 4
move 1 from 8 to 4
move 2 from 4 to 5
move 1 from 7 to 1
move 5 from 3 to 5
move 2 from 4 to 2
move 8 from 2 to 7
move 7 from 2 to 4
move 1 from 3 to 7
move 3 from 9 to 7
move 2 from 2 to 9
move 3 from 4 to 5
move 6 from 1 to 8
move 6 from 1 to 5
move 3 from 9 to 2
move 22 from 5 to 9
move 1 from 5 to 6
move 2 from 2 to 3
move 5 from 7 to 6
move 5 from 8 to 9
move 2 from 7 to 2
move 20 from 9 to 4
move 1 from 8 to 3
move 2 from 2 to 5
move 1 from 2 to 5
move 15 from 4 to 8
move 1 from 5 to 7
move 6 from 9 to 1
move 5 from 4 to 8
move 2 from 4 to 8
move 1 from 2 to 1
move 5 from 6 to 5
move 5 from 5 to 7
move 1 from 9 to 8
move 5 from 7 to 2
move 2 from 5 to 1
move 4 from 7 to 5
move 1 from 5 to 9
move 1 from 6 to 8
move 1 from 7 to 2
move 6 from 3 to 4
move 3 from 5 to 7
move 1 from 9 to 2
move 6 from 2 to 3
move 1 from 3 to 4
move 13 from 8 to 9
move 7 from 1 to 5
move 6 from 9 to 2
move 1 from 1 to 4
move 6 from 2 to 3
move 1 from 1 to 4
move 5 from 9 to 7
move 11 from 8 to 4
move 7 from 7 to 3
move 2 from 7 to 8
move 1 from 8 to 2
move 8 from 4 to 1
move 2 from 1 to 6
move 2 from 5 to 8
move 3 from 1 to 9
move 1 from 8 to 2
move 11 from 3 to 2
move 2 from 8 to 9
move 9 from 4 to 7
move 11 from 3 to 8
move 7 from 9 to 6
move 5 from 4 to 6
move 3 from 7 to 3
move 1 from 7 to 1
move 5 from 7 to 6
move 2 from 3 to 5
move 1 from 3 to 4
move 5 from 2 to 5
move 1 from 1 to 7
move 1 from 4 to 8
move 1 from 7 to 6
move 7 from 5 to 7
move 2 from 5 to 7
move 3 from 1 to 7
move 1 from 2 to 3
move 1 from 6 to 4
move 1 from 3 to 4
move 1 from 5 to 3
move 18 from 6 to 4
move 9 from 7 to 1
move 14 from 4 to 6
move 3 from 6 to 4
move 12 from 6 to 7
move 2 from 5 to 3
move 3 from 7 to 4
move 6 from 4 to 7
move 5 from 1 to 7
move 5 from 4 to 5
move 5 from 2 to 1
move 9 from 8 to 4
move 9 from 1 to 3
move 2 from 8 to 2
move 4 from 2 to 4
move 1 from 7 to 6
move 1 from 2 to 3
move 1 from 8 to 9
move 1 from 6 to 9
move 2 from 9 to 3
move 3 from 4 to 1
move 13 from 3 to 5
move 12 from 5 to 1
move 7 from 1 to 8
move 1 from 3 to 6
move 4 from 5 to 4
move 1 from 5 to 2
move 8 from 4 to 9`

const instructions = input.split("\n")
  .map((instruction) => {
    const [numberToMove, startIndex, endIndex] = instruction.match(/\d+/g)
    return {
      fromIndex: parseInt(startIndex) - 1,
      toIndex: parseInt(endIndex) - 1,
      count: parseInt(numberToMove)
    }
  })


// Part 1
// const partOneSourceArray = [...sourceArray]

// instructions
//   .forEach(({fromIndex, toIndex, count}) => {
//     for (var i of range(0, count - 1)) {
//       const itemToMove = partOneSourceArray[fromIndex].pop();
//       partOneSourceArray[toIndex].push(itemToMove);
//     }
//   })

// const partOneSolution = partOneSourceArray
//   .reduce((topStackLetters, stack) => {
//     const topCrateLetter = stack.pop()
//     return topCrateLetter 
//       ? [...topStackLetters, topCrateLetter] 
//       : topStackLetters
//   }, [])

//   console.log(partOneSourceArray)
//   console.log(sourceArray)
// console.log("The answer for the stupid elves is:", partOneSolution.join(''))

// Part 2
const partTwoSourceArray = [...sourceArray]

instructions
  .forEach(({ fromIndex, toIndex, count }) => {
    const itemsToMove = [...range(0, count - 1)].map(() => {
      return partTwoSourceArray[fromIndex].pop()
    }).reverse()

    partTwoSourceArray[toIndex].push(...itemsToMove)
  })

const partTwoSolution = partTwoSourceArray
  .reduce((topStackLetters, stack) => {
    const topCrateLetter = stack.pop()
    return topCrateLetter 
      ? [...topStackLetters, topCrateLetter] 
      : topStackLetters
  }, [])

console.log("The answer for the stupid elves is:", partTwoSolution.join(''))
