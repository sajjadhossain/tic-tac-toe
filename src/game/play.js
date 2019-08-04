const fs = require('fs')
const path = require('path')
const projectRoot = path.join( __dirname + '../../../' )
const source = path.join( projectRoot + '/src' )
const game = path.join( source + '/game' )
const takeTurn = require(path.join( game, 'takeTurn.js' ))
const playerMarker = process.argv[2]
const selectedGrid = process.argv[3]
const writeScore = require(path.join( game + '/writeScore'))
const fixtures = path.join( projectRoot + '/fixtures' )
const scores = path.join( fixtures + '/scores' )
const current = require(path.join( fixtures + '/current.js' ))
const currentGame = path.join( scores, current + '.txt' )

takeTurn.newScore( playerMarker, selectedGrid ).then(( response ) => {
  writeScore( currentGame, response ).then(( response ) => {
    console.log( response )
  })
})
