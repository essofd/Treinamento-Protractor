// const { ExpectedConditions } = require('protractor')
const Helper = require('protractor-helper')
const Tag = require('../page-objects/tag')

describe('Given I\'m at a random tag page', () => {
  let tagpage

  beforeAll(() => {
    tagpage = new Tag()
    tagpage.visit()
  })

  describe('And there are three destiantion for this tag in the database', () => {
    it('Then they all render as cards', () => {
      Helper.waitForElementVisibility(tagpage.destinations.cards.last())

      expect(tagpage.destinations.cards.count()).toBe(3)
    })

    describe('When I look to the first card in isolation', () => {
      it('Then I see an image, a heading, a paragraph, and an anchor', () => {
        Helper.waitForElementVisibility(tagpage.destinations.imageOfFirstCard)
        Helper.waitForElementVisibility(tagpage.destinations.headingOfFirstCard)
        Helper.waitForElementVisibility(tagpage.destinations.paragraphOfFirstCard)
        Helper.waitForElementVisibility(tagpage.destinations.anchorOfFirstCard)
      })
    })
  })
})
