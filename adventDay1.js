#!/usr/bin/node
const fs = require('fs');

const input = fs.readFileSync('./input/day1.txt', {
  encoding: "utf-8",
  flag: "r"
}).split(/\n\n/);

const calorieCountByElf = input
  .map((group) => {
    return group.split("\n")
      .map((numberString) => parseInt(numberString))
      .reduce((totalCalories, calorieCount) => totalCalories + calorieCount, 0)
  })

// Part 1
const answer = calorieCountByElf
  .reduce((highestCalorieCount, calorieCount) => {
    return calorieCount > highestCalorieCount ? calorieCount : highestCalorieCount
  }, 0)

console.log("Part 1:", answer)

// Part 2
const topCaloriesTotal = [...calorieCountByElf]
  .sort((a, b) => a - b)
  .slice(-3)
  .reduce((aggregate, count) => aggregate + count, 0)

console.log("Part 2:", topCaloriesTotal);