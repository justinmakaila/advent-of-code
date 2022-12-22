#!/usr/bin/node
const fs = require('fs');

const input = fs.readFileSync('./input/day8.txt', 'utf-8');

const DIRECTIONS = ["UP", "DOWN", "LEFT", "RIGHT"];

const translateCoordinate = ({x, y}, direction) => {
  switch (direction) {
    case "UP":
      return { x, y: y - 1 }
    case "DOWN":
      return { x, y: y + 1 }
    case "LEFT":
      return { y, x: x - 1,}
    case "RIGHT":
      return { y, x: x + 1}
    default:
      throw new Error(`Invalid direction supplied: ${direction}. Must be one of "UP", "DOWN", "LEFT", or "RIGHT".`)
  }
}

const isCoordinateInGrid = ({ x, y }, { width, height }) => x >= 0 && x < height && y >= 0 && y < width;

function* treesInDirection({ x, y }, direction, grid) {
  const nextCoordinate = translateCoordinate({ x, y }, direction);

  if (isCoordinateInGrid(nextCoordinate, {
    width: grid[0].length,
    height: grid.length
  })) {
    yield grid[nextCoordinate.y][nextCoordinate.x];
  } else {
    return;
  }

  yield* treesInDirection(nextCoordinate, direction, grid);
}

const isVisible = ({x, y}, grid) => {
  const treeValue = grid[y][x];
  return DIRECTIONS
    .some((direction) => [...treesInDirection({ x, y }, direction, grid)]
      .every((surroundingTree) => surroundingTree < treeValue)
    )
}

const getViewScore = ({x, y}, grid) => {
  const treeValue = grid[y][x];
  return DIRECTIONS
    .map((direction) => {
      const trees = [...treesInDirection({x, y}, direction, grid)]
      const index = trees
        .findIndex((surroundingTree) => surroundingTree >= treeValue)

      return index > -1 
        ? return index + 1 
        : trees.length
    })
    .reduce((score, value) => score * value)
}
  
const grid = input
  .trim()
  .split('\n')
  .reduce((grid, line) => [
      ...grid,
      [...line.trim()]
        .map((treeHeight) => parseInt(treeHeight))
  ], [])

const visibleCoordinates = grid
  .map((row, columnIndex, source) => row
    .reduce((coordinates, _, rowIndex) => {
      const coordinate = { x: rowIndex, y: columnIndex }
      return isVisible(coordinate, source) ? [...coordinates, coordinate] : coordinates;
    }, [])
  )
  .flat();

// Part 1
console.log(visibleCoordinates.length);

const scenicScores = grid
  .map((row, columnIndex, source) => row
    .map((_, rowIndex) => getViewScore({ x: rowIndex, y: columnIndex }, source))
  )
  .flat();

// Part 2
console.log(scenicScores.sort((a, b) => a - b).pop());

