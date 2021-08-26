'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SOCKET_URL: '"wss://share-reader-socket-4bifvghjoq-an.a.run.app"', // '"ws://localhost:4000"',
  API_URL: '"http://localhost:3000/v1/api"'
})