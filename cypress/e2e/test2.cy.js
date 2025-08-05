

describe('GreenKart Test Suite', function () {
  it('Should be able to Load the HomePage Successfully', function () {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

    // Parent-child chaining
    cy.get(`.products`).as(`productlocator`)    //alias method
    cy.get('@productlocator').find('.product').should('have.length', 4)

    cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()  // add third element only. 

    cy.get('@productlocator').find('.product').each(($el, indexedDB, $list) => {
      const textVeg = $el.find('.product-name').text()
      if (textVeg.includes('Cashews'))   // to click on a specific product after a loop, used in cases where sequence is dynamic. 
      {
        cy.wrap($el).contains('ADD TO CART').click()   // click with find() is deprecated. so use wrap 
      }
    })

    // click on cart
    cy.get('.cart-icon > img').click()

    // proceed to checkout
    cy.contains(`PROCEED TO CHECKOUT`).click()

    // place order
    cy.contains(`Place Order`).click()



  })
})
