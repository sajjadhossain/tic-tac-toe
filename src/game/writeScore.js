const fs = require('fs')
const writeScore = ( file, data ) => {
  fs.writeFile( file, data, ( err ) => {
    if (err) throw err
  })
  return new Promise (( resolve, reject ) => {
    setTimeout(() => {
      resolve( file, data )
    }, 200)
  })
}

module.exports = writeScore
