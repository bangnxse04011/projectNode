#!/usr/bin/env node
const yargs = require('yargs')
const {writeFile, readFile} = require('./fs')
const {log} = require('./utils')

const options = yargs(process.argv.slice(2))

options
.alias('w', 'write')
.alias('r', 'read')
.alias('n', 'name')

const {argv:{_, name, write, read}} = options



const run = () => {
  if(write && name){
    writeFile({data:write, name})
  }
  if(read){
    log(readFile({name: read}))
  }
}

run()
