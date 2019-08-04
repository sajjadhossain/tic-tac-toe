const fs = require('fs')
const projectRoot = path.join( __dirname + '../../../' )
const fixtures = path.join( projectRoot + '/fixtures' )
const scores = path.join( fixtures + '/scores' )
const current = require(path.join( fixtures + '/current.js' ))
const currentGame = path.join( scores, current + '.txt' )
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
