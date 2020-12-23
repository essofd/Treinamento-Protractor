// const { ExpectedConditions } = require('protractor')
const Helper = require('protractor-helper')
const Destination = require('../page-objects/destination')

describe('Given I\'m at a random destination page', () => {
  let destinationPage

  beforeEach(() => {
    destinationPage = new Destination()
    destinationPage.visit()
  })

  it('Then I see an image, a heading, a paragraph, and an anchor', () => {
    Helper.waitForElementVisibility(destinationPage.self.image)
    Helper.waitForElementVisibility(destinationPage.self.heading)
    Helper.waitForElementVisibility(destinationPage.self.paragraph)
    Helper.waitForElementVisibility(destinationPage.self.anchor)
  })
})
