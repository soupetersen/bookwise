const BASE_URL = "http://localhost:3000";

describe("Load home page", () => {
  it("when load render home page", () => {
    cy.visit(BASE_URL);
  });

  it ("should be able to open explore page", () => {
    cy.visit(BASE_URL);
    cy.get('[href="/home/explore"]').click();
    cy.url().should('include', '/explore');
  });

  it ("should be able to open books in explorer page", () => {
    cy.visit(BASE_URL);
    cy.get('[href="/home/explore"]').click();

    cy.get('.c-fJvZCW').each(($el, index, $list) => {
      if (index > 0) {
        cy.wrap($el).click();
      }
    });
  });

  it ("should be able to open authenticate page", () => {
    cy.visit(BASE_URL);
    cy.get('footer > button').click();
    cy.url().should('include', '/auth');
  });

  it ("should be able to open book modal", () => {
    cy.visit(BASE_URL);
    cy.get('.c-iycrnU > .c-cMnyUJ > :nth-child(1)').click().get("div[role='dialog']").should('be.visible');
  });
});
