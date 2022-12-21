#!/usr/bin/node
const fs = require('fs');

const input = fs.readFileSync('./input/day6.txt', 'utf-8').trim();

const parsePacketOffset = (dataStream, sequenceCount = 4) => {
  let packetMarker = [];
  let packetOffset = -1;
  let readOffset = 0;

  while (packetOffset < 0) {
    const currentCharacter = dataStream[readOffset];

    if (!packetMarker.includes(currentCharacter)) {
      packetMarker.push(currentCharacter);
    } else {
      const existingCharacterIndex = packetMarker.indexOf(currentCharacter)
      if (existingCharacterIndex > -1) {
        packetMarker = packetMarker.slice(existingCharacterIndex + 1)
      }

      packetMarker.push(currentCharacter)
    }

    if (packetMarker.length === sequenceCount) {
      packetOffset = readOffset
    }

    readOffset++;
  }

  return packetOffset + 1;
}

console.log(`Final answer: ${parsePacketOffset(input)}`)
console.log(`Start of message marker: ${parsePacketOffset(input, 14)}`)