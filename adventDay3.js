#!/usr/bin/node
const fs = require('fs');

const priorityIndex = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const itemPriority = (itemType) => priorityIndex.indexOf(itemType) + 1

const input = fs.readFileSync('./input/day3.txt', 'utf-8')

const ELVES_PER_GROUP = 3
const inputs = input.split("\n")
const numberOfInputs = inputs.length;

const numberOfGroups = numberOfInputs / ELVES_PER_GROUP;

const groups = new Array(numberOfGroups);

let groupNumber = -1;
for (var i = 0; i < inputs.length; i++) {
  const value = i % ELVES_PER_GROUP;
  if (value === 0) {
    groupNumber += 1
  }

  const group = groups[groupNumber] || []
  const contents = inputs[i];
  group.push(contents);
  groups[groupNumber] = group;
}

const isItemTypeInSack = (itemType, sack) => sack.indexOf(itemType) > -1;

const badgePrioritySum = groups
  .map((group) => {
    const [sackA, sackB, sackC] = group;
    for (var i = 0; i < sackA.length; i++) {
      const itemType = sackA[i];
      const isInSackB = isItemTypeInSack(itemType, sackB);
      const isInSackC = isItemTypeInSack(itemType, sackC);

      if (isInSackB && isInSackC) {
        return itemPriority(itemType);
      }
    }

    return null;
  })
  .filter(Boolean)
  .reduce((total, priority) => total + priority, 0)

console.log("Badge priority is at", badgePrioritySum);

const priorityByIndex = []

for (var i = 0; i < inputs.length; i++) {
  const contents = inputs[i];
  const contentsLength = contents.length
  const compartmentLength = contents.length / 2

  const compartmentAContents = contents.slice(0, compartmentLength)
  const compartmentBContents = contents.slice(compartmentLength, contentsLength)

  for (var j = 0; j < compartmentAContents.length; j++) {
    const itemType = compartmentAContents[j];
    
    if (compartmentBContents.indexOf(itemType) > -1) {
      priorityByIndex.push(itemPriority(itemType));
      break;
    } 
  }
}

const sumOfPriorityItems = priorityByIndex.reduce((total, priorityValue) => total + priorityValue, 0)
console.log("The sum of priority items is:", sumOfPriorityItems)
