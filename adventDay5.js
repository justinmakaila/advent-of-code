#!/usr/bin/node
const fs = require('fs')

const inputs = fs.readFileSync('./input/day5.txt', 'utf-8')
  .split('\n\n');

const instructionsString = inputs[1].trimEnd()

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


const instructions = instructionsString
  .split("\n")
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
