#!/usr/bin/node
const fs = require('fs');

const input = fs.readFileSync('./input/day8.txt', 'utf-8');

const getSurroundingTreesForCoordinates = ({ x, y }) => [
  {
    y: y - 1,
    x
  },
  {
    y: y + 1,
    x
  }, 
  {
    x: x - 1,
    y
  },
  {
    x: x + 1,
    y
  }
]

const isCoordinateInGrid = ({ x, y }, { width, height }) => x >= 0 && x < height && y >= 0 && y < width;
const isCoordinateNearEdge = ({ x, y }, { width, height }) => (y === height - 1 || y === 1) || (x === width - 1 || x === 1);
  
const grid = input
  .trim()
  .split('\n')
  .reduce((grid, line) => {
    return [
      ...grid,
      [...line.trim()]
        .map((treeHeight) => parseInt(treeHeight))
    ]
  }, []);

const gridHeight = grid.length,
  gridWidth = grid[0].length,
  gridContext = { width: gridWidth, height: gridHeight },
  totalNumberOfTrees = gridHeight * gridWidth;

const validCoordinates = grid
  .map((row, columnIndex) => row
    .reduce((coordinates, tree, rowIndex) => {
      const coordinate = { x: rowIndex, y: columnIndex }
      const surroundingTrees = getSurroundingTreesForCoordinates(coordinate)
      const isValid = surroundingTrees.every((coordinate) => isCoordinateInGrid(coordinate, gridContext)) 
      return isValid ? [...coordinates, [coordinate, surroundingTrees.filter((coordinate) => isCoordinateNearEdge(coordinate, gridContext))]] : coordinates
    }, [])
  )
  .flat();

const hiddenTreeCoordinates = validCoordinates.filter(([{ x, y }, surroundingTrees]) => {
  const tree = grid[y][x];
  return surroundingTrees.every((surroundingCoordinate) => {
    const surroundingTree = grid[surroundingCoordinate.y][surroundingCoordinate.x];
    const isTreeHidden = surroundingTree >= tree;
    return isTreeHidden;
  });
});

const numberOfHiddenTrees = hiddenTreeCoordinates.length;
const numberOfVisibleTrees = totalNumberOfTrees - numberOfHiddenTrees;

console.log(numberOfVisibleTrees)

