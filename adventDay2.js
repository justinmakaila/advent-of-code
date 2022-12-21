#!/usr/bin/node
const fs = require('fs');

const shapeChoice = Object.freeze({
  rock: "ROCK",
  paper: "PAPER",
  scissors: "SCISSORS"
});

const pointsForShape = (shape) => {
  switch (shape) {
    case shapeChoice.rock:
      return 1;
    case shapeChoice.paper:
      return 2;
    case shapeChoice.scissors:
      return 3;
    default:
      throw new Error("Invalid shape input!");
  }
}

const shapeForStrategyGuideInput = (input) => {
  if (input === "A" || input === "X") {
    return shapeChoice.rock
  } else if (input === "B" || input === "Y") {
    return shapeChoice.paper
  } else if (input === "C" || input === "Z") {
    return shapeChoice.scissors
  }
}

const playerShapeForStrategyGuide = (opponentShape, input) => {
  if (input === 'Y') {
    return opponentShape;
  }

  if (input === 'X') {
    switch (opponentShape) {
      case shapeChoice.rock:
        return shapeChoice.scissors;
      case shapeChoice.scissors:
        return shapeChoice.paper;
      case shapeChoice.paper:
        return shapeChoice.rock;
      default:
        throw new Error("Incorrect opponent shape provided!");
    }
  } else if (input === 'Z') {
    switch (opponentShape) {
      case shapeChoice.rock:
        return shapeChoice.paper;
      case shapeChoice.scissors:
        return shapeChoice.rock;
      case shapeChoice.paper:
        return shapeChoice.scissors;
      default:
        throw new Error("Incorrect opponent shape provided!");
    }
  } else {
    throw new Error("Incorrect user input from strategy guide!");
  }
}

const roundResult = Object.freeze({
  loss: "L",
  win: "W",
  draw: "D"
});

const pointsForResult = (result) => {
  switch (result) {
    case roundResult.loss:
      return 0;
    case roundResult.draw:
      return 3;
    case roundResult.win:
      return 6;
    default:
      throw new Error("Invalid result input!");
  }
}

const opponentPointsForResult = (result) => {
  switch (result) {
    case roundResult.loss:
      return 6;
    case roundResult.draw:
      return 3;
    case roundResult.win:
      return 0;
    default:
      throw new Error("Invalid result input!");
  }
}

const evaluateGame = (firstInput, secondInput) => {
  if (firstInput === secondInput) {
    return roundResult.draw
  }

  if (firstInput === shapeChoice.rock) {
    return secondInput === shapeChoice.paper ? roundResult.loss : roundResult.win
  } else if (firstInput === shapeChoice.paper) {
    return secondInput === shapeChoice.scissors ? roundResult.loss : roundResult.win
  } else if (firstInput === shapeChoice.scissors) {
    return secondInput === shapeChoice.rock ? roundResult.loss : roundResult.win
  }
}

const playRound = (roundInput) => {
  let playerPoints = 0;
  let opponentPoints = 0;

  const [opponentShapeValue, currentPlayerShapeValue] = roundInput.match(/\w+/g);
  const opponentShape = shapeForStrategyGuideInput(opponentShapeValue);
  const currentPlayerShape = shapeForStrategyGuideInput(currentPlayerShapeValue);

  opponentPoints += pointsForShape(opponentShape);
  playerPoints += pointsForShape(currentPlayerShape);

  const gameResult = evaluateGame(currentPlayerShape, opponentShape);

  playerPoints += pointsForResult(gameResult);
  opponentPoints += opponentPointsForResult(gameResult);

  return [playerPoints, opponentPoints];
}

const playModifiedRound = (roundInput) => {
  let playerPoints = 0;
  let opponentPoints = 0;

  const [opponentShapeValue, currentPlayerShapeValue] = roundInput.match(/\w+/g);
  const opponentShape = shapeForStrategyGuideInput(opponentShapeValue);
  const currentPlayerShape = playerShapeForStrategyGuide(opponentShape, currentPlayerShapeValue)

  opponentPoints += pointsForShape(opponentShape);
  playerPoints += pointsForShape(currentPlayerShape);

  const gameResult = evaluateGame(currentPlayerShape, opponentShape);

  playerPoints += pointsForResult(gameResult);
  opponentPoints += opponentPointsForResult(gameResult);

  return [playerPoints, opponentPoints];
}

const puzzleInput = fs.readFileSync('./input/day2.txt', 'utf-8')
const inputs = puzzleInput.trim().split("\n")

const opponentPoints = [];
const modifiedOpponentPoints = [];

const currentPlayerPoints = [];
const modifiedCurrentPlayerPoints = [];

for (let i = 0; i < inputs.length; i++) {
  const roundInput = inputs[i];

  // Part 1
  const [playerRoundPoints, opponentRoundPoints] = playRound(roundInput);
  currentPlayerPoints.push(playerRoundPoints);
  opponentPoints.push(opponentRoundPoints);

  // Part 2
  const [modifiedPlayerRoundPoints, modifiedOpponentRoundPoints] = playModifiedRound(roundInput);
  modifiedCurrentPlayerPoints.push(modifiedPlayerRoundPoints);
  modifiedOpponentPoints.push(modifiedOpponentRoundPoints);
}

console.log("Game over!");
const totalPlayerPoints = currentPlayerPoints.reduce((total, points) => total + points, 0);
const totalOpponentPoints = opponentPoints.reduce((total, points) => total + points, 0);

console.log("Part 1");
console.log(`Player has ${totalPlayerPoints}`);
console.log(`Opponent has ${totalOpponentPoints}`);

const totalModifiedPlayerPoints = modifiedCurrentPlayerPoints.reduce((total, points) => total + points, 0);
const totalModifiedOpponentPoints = modifiedOpponentPoints.reduce((total, points) => total + points, 0);

console.log("Part 2");
console.log(`Player has ${totalModifiedPlayerPoints}`);
console.log(`Opponent has ${totalModifiedOpponentPoints}`);