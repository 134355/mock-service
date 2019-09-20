const glob = require('glob')
const Mock = require('mockjs')
const express = require('express')
const router = express.Router()

const filePaths = glob.sync('api/**/*.js')

filePaths.forEach(filePath => {
  const fileName = filePath.replace(/^api/, '').replace(/.js$/, '')
  const data = require(`../${filePath}`)
  data.type = data.type || 'get'
  router[data.type](fileName, (req, res) => {
    if (data.callback) {
      return res.send(Mock.mock(data.callback(req)))
    }
    res.send(Mock.mock(data.mock))
  })
})

module.exports = router
