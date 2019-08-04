const fs = require('fs')
const path = require('path')
const projectRoot = path.join( __dirname + '../../../' )
const type = require(path.join( projectRoot + '/type.js' ))
const fixtures = path.join( projectRoot + '/fixtures' )
const scores = path.join( fixtures + '/scores' )
const source = path.join( projectRoot + '/src' )
const game = path.join( source + '/game' )
const current = require(path.join( fixtures + '/current.js' ))
const currentGame = path.join( scores, current + '.txt' )
let currentScoreBoard
const currentScore = () => {
  fs.readFile( currentGame, 'utf8', ( error, data ) => {
    if ( error ) throw error
    currentScoreBoard = data
  })
  return new Promise (( resolve, reject ) => {
    setTimeout(() => {
      resolve( currentScoreBoard )
    }, 200)
  })
}
const newScore = ( playerMarker, selectedGrid ) => {
  fs.readFile( currentGame, 'utf8', ( error, data ) => {
    if ( error ) throw error
    currentScoreBoard = data.replace( selectedGrid, ' ' + playerMarker )
  })
  return new Promise (( resolve, reject ) => {
    setTimeout(() => {
      resolve( currentScoreBoard )
    }, 200)
  })
}

module.exports = { currentScore, newScore }
