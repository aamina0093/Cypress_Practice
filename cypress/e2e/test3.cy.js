

describe('GreenKart Test Suite', function () {
  it('Should be able to Load the HomePage Successfully', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // // checkbox handling
    // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    // cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    // cy.get(`input[type='checkbox']`).check(['option2'])

    // //dropdown handling

    // //1. Static dropdown
    // cy.get('select').select('option2').should('have.value', 'option2')

    // //2. Dynamic Dropdown
    // cy.get('#autocomplete').type('ind')
    // cy.get('.ui-menu-item').each(($el, index, $list) => {
    //   if($el.text() === 'India'){
    //     $el.click()
    //   }
    // })

    //Invisible element handling
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')










  })
})
