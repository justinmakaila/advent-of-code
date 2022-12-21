#!/usr/bin/node
const fs = require('fs');

const inputs = fs.readFileSync('./input/day4.txt', 'utf-8')
  .split("\n")
  .map((pairValue) => pairValue
    .split(",")
    .map((pair) => pair.split("-").map((value) => parseInt(value)))
  )

function* range(start, end) {
  yield start;
  if (start === end) return;
  yield* range(start + 1, end);
}

const inputRanges = () => inputs.map(([[startA, endA], [startB, endB]]) => {
  return [range(startA, endA), range(startB, endB)]
})

const fullOverlapRangesFromInputRanges = () => {
  return inputRanges()
    .filter(([assignmentA, assignmentB]) => {
      const assignmentAValues = [...assignmentA];
      const assignmentALength = assignmentAValues.length;

      const assignmentBValues = [...assignmentB];
      const assignmentBLength = assignmentBValues.length;

      if (assignmentALength > assignmentBLength) {
        return assignmentBValues.every((value) => assignmentAValues.includes(value))
      } else if (assignmentBLength > assignmentALength) {
        return assignmentAValues.every((value) => assignmentBValues.includes(value))
      } else if (assignmentBLength === assignmentALength) {
        return assignmentAValues.every((value) => assignmentBValues.includes(value))
      } else {
        return false;
      }
    })
}

const anyOverlapRangesFromInputRanges = () => {
  return inputRanges()
  .filter(([assignmentA, assignmentB]) => {
    const assignmentAValues = [...assignmentA];
    const assignmentBValues = [...assignmentB];
    return assignmentBValues.some((value) => assignmentAValues.includes(value))
  })
}

const fullOverlapRanges = fullOverlapRangesFromInputRanges()
console.log(`There are ${fullOverlapRanges.length} elves that need to be reassigned due to full overlap with their partner.`)

const anyOverlapRanges = anyOverlapRangesFromInputRanges()
console.log(`There are ${anyOverlapRanges.length} elves that have overlap ANYWHERE.`);