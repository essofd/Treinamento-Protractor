const { element } = require('protractor')

class Header {
  constructor () {
    this.self = element(by.className('header'))
    this.anchorToHome = this.self.element(by.css('a[href="/"]'))
  }
}
module.exports = Header // exporta a class como um componente
