const fs = require('fs')
const path = require('path')
const projectRoot = path.join( __dirname + '../../../' )
const fixtures = path.join( projectRoot + '/fixtures' )
const scores = path.join( fixtures + '/scores' )
const source = path.join( projectRoot + '/src' )
const game = path.join( source + '/game' )
const grid = path.join( source + '/grid' )
const type = require(path.join( projectRoot + '/type.js' ))
const date = require(path.join( source + '/date.js' ))
const current = require(path.join( fixtures + '/current.js' ))
const currentFile = path.join( scores, current + '.txt' )
let scoreboard
let scoreboardFile
let currentContent
const writeFilesForGame = ( scoresFile, timeFile, timeStamp ) => {
  fs.writeFile(scoresFile, '', ( err ) => {
    if (err) throw err
  })
  fs.writeFile(timeFile, timeStamp, ( err ) => {
    if (err) throw err
  })
}
if ( type === 'default' ) {
  const scorePrefix = 'scores_1v1_3x3'
  const currentPrefix = 'module.exports = \'' + scorePrefix
  const currentSuffix = '\''
  scoreboardFile = path.join( scores + '/' + scorePrefix + '_' + date + '.txt' )
  currentContent = currentPrefix + '_' + date + currentSuffix
  writeFilesForGame( scoreboardFile, path.join( fixtures + '/current.js' ), currentContent )
}
const generateScoreboard =  new Promise(( resolve, reject ) => {
  setTimeout(() => {
    resolve( scoreboardFile, currentFile, current )
  }, 300)
})

module.exports = generateScoreboard
