const { browser } = require('protractor')
const HeaderComponent = require('./components/header')
const DestinationComponent = require('./components/destinations')
const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN')

class Tag {
  constructor () {
    this.header = new HeaderComponent()
    this.destinations = new DestinationComponent()
  }

  visit () {
    // const randomNumberBetweenOneAndFive = Math.floor(Math.random() * 5) + 1
    // browser.get(`/tags/${randomNumberBetweenOneAndFive}`) //funciona da mesma forma da linha abaixo
    browser.get('/tags/' + randomNumberBetweenOneAnd(5))
  }
}

module.exports = Tag
