module.exports = provideConfig => {
  const defaultConfig = {
    baseUrl: 'https://lit-chamber-61567.herokuapp.com/',
    specs: ['../specs/*spec.js'],
    onPrepare: () => {
      browser.waitForAngularEnabled(false) // nao procura pelo angula para rodar os testes
    },
    jasmineNodeOpts: { random: true } // os testes devem ser independentes (ordem aleatoria)
  }
  return Object.assign(
    {},
    defaultConfig,
    provideConfig
  )
}
