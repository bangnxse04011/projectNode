const fs = require('fs')

const writeFile = (opts) => {
  const {name = 'Readme.md', data} = opts || {}
  fs.writeFile(name, data)
}

const readFile = (opts) => {
  const {name} = opts || {}
  return fs.readFileSync(name).toString()
}

module.exports = {
  writeFile,
  readFile
}
