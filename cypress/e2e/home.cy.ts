describe('home page', () => {
  it('should visit the home page', () => {
    cy.visit('/home')
    cy.get('[data-cy="label"]').click();
    cy.get('[data-cy="login"]').click();
    
  })
})