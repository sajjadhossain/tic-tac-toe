const fs = require('fs')
const path = require('path')
const projectRoot = path.join( __dirname + '../../../' )
const type = require(path.join( projectRoot + '/type.js' ))
const source = path.join( projectRoot + '/src' )
const fixtures = path.join( projectRoot + 'fixtures' )
const game = path.join( source + '/game' )
const grid = path.join( source + '/grid' )
const generateGrid = require(path.join( grid + '/new.js' ))
const generateScoreboard = require(path.join( game + '/scoreboard'))
const writeScore = require(path.join( game + '/writeScore'))
// If game is:
//  * played on 3-by-3 grid
//  * played by player one and computer
//  * is played with x's and o's
if ( type === 'default' ) {
  // Create a scoreboard
  generateScoreboard.then(( game ) => {
    // Create a default 3x3 grid
    generateGrid.then(( grid ) => {
      // Write default scores
      writeScore( game, grid ).then(( response ) => {
        console.log( response )
      })
    })
  })
}
