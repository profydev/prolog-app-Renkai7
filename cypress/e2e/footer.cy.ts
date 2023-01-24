describe("Sidebar Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  it("links are displayed", () => {
    // check that each link leads to the correct page
    cy.get("div").contains("Docs").should("have.attr", "href", "/dashboard#");

    cy.get("div").contains("API").should("have.attr", "href", "/dashboard#");

    cy.get("div").contains("Help").should("have.attr", "href", "/dashboard#");

    cy.get("div")
      .contains("Community")
      .should("have.attr", "href", "/dashboard#");

    cy.get("img").should("have.attr", "src");
  });
});
