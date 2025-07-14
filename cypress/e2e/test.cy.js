describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    // Title font details
    cy.get('.redLogo').then($el => {
      const styles = window.getComputedStyle($el[0])
      const fontFamily = styles.getPropertyValue('font-family')
      const fontSize = styles.getPropertyValue('font-size')
      cy.log(`Font: ${fontFamily}, Size: ${fontSize}`)    
    })
    //title font validation
    cy.get('.redLogo') // your element selector
      .should('be.visible')
      .invoke('css', 'font-family')
      .then(fontFamily => {
        cy.log('Font Family:', fontFamily)
        expect(fontFamily).to.include('Roman') // or any expected font
    })
  })
})

