const { browser } = require('protractor')

const Faker = require('faker')
const Helper = require('protractor-helper')

const Destination = require('../page-objects/destination')
const EditDestination = require('../page-objects/editDestination')

describe('Given I\'m at a random edit destination page', () => {
  let editDestination

  beforeEach(() => {
    editDestination = new EditDestination()
    editDestination.visit()
  })

  it('Then I see an image, and a form to edit the name and description', () => {
    Helper.waitForElementVisibility(editDestination.self.image)
    Helper.waitForElementVisibility(editDestination.form.nameLabel)
    Helper.waitForElementVisibility(editDestination.form.nameInput)
    Helper.waitForElementVisibility(editDestination.form.descriptionLabel)
    Helper.waitForElementVisibility(editDestination.form.descriptionInput)
    Helper.waitForElementVisibility(editDestination.form.updateButton)
  })

  describe('When I submit the form with less than the minimum required characters', () => {
    beforeEach(() => {
      editDestination
        .form
        .submitFormAfterClearingAndFillingItWith('Ab', 'Abcdefghi')
    })

    it('Then both input fields are wrapped in a .field_with_erros div', () => {
      Helper.waitForElementVisibility(editDestination.form.nameInputWithError)
      Helper.waitForElementVisibility(editDestination.form.descriptionInputWithError)
    })
  })

  describe('When sucessfully submitting for the form with a new name and description', () => {
    let destinationUrl
    const randomUuid = Faker.random.uuid()
    const fiveRandomWords = Faker.random.words(5)

    // utilizamos o const quando NÂO iremos mudar a variavel E
    // utilizamos o let quando iremos mudar a variavel

    beforeEach(() => {
      browser.getCurrentUrl().then(url => {
        destinationUrl = url.replace('/edit', '')
      })

      editDestination
        .form
        .submitFormAfterClearingAndFillingItWith(randomUuid, fiveRandomWords)
    })

    it('Then I\'m  redirected to the destination view page, and I see the update info', () => {
      const destination = new Destination()

      Helper.waitForUrlToBeEqualToExpectedUrl(destinationUrl)
      Helper.waitForTextToBePresentInElement(destination.self.heading, randomUuid)
      Helper.waitForTextToBePresentInElement(destination.self.paragraph, fiveRandomWords)
    })
  })
})

// Quando colocamos o "f" na frente do it queremos apenas testar aquele teste e nao todos os testes!
