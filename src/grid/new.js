let grid
let game
let rowID
let columnID
let gridID
let theGrid
let theGridText
const type = require('../../type')
const date = require('../date')
const newGrid = ( values ) => {
  grid = []
  for ( let i = 0; i < values[0][0]; i += 1 ) {
    rowID = values[0][1][i]
    for ( let j = 0; j < values[1][0]; j += 1 ) {
      columnID = values[1][1][j]
      gridID = rowID + columnID
      grid.push( gridID )
    }
  }
  return grid
}

if ( type === 'default' ) {
  game = require('../grid/config').default
  theGrid = newGrid( [ game.rows, game.columns, game.players ] )
  theGridText =
    theGrid[0] + ' | ' + theGrid[1] + ' | ' + theGrid[2] + '\n' +
    theGrid[3] + ' | ' + theGrid[4] + ' | ' + theGrid[5] + '\n' +
    theGrid[6] + ' | ' + theGrid[7] + ' | ' + theGrid[8]
}

const generateGrid =  new Promise(( resolve, reject ) => {
  setTimeout(() => {
    resolve( theGridText )
  }, 100)
})

module.exports = generateGrid
