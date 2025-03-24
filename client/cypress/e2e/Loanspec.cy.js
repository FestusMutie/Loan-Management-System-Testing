describe("Maogma Loan Management System", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should load the homepage correctly", () => {
    cy.contains("Maogma").should("be.visible");
    cy.contains("Simplify your Loan Management").should("be.visible");
    cy.contains("Get Started").should("be.visible");
  });
  it("Should navigate to the login page when clicking 'Get Started'", () => {
    cy.get('.bg-red-500 > a').contains("Get Started").click();
    cy.contains("Sign In").should("be.visible");
    
  });
  it("Should login successfully with correct credentials", () => {
    cy.contains("Get Started").click();
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("admin");
    cy.get('button').contains("Sign In").click();


 // Verify successful login
});
it("Should display correct dashboard information", () => {
  cy.contains("Get Started").click();
  cy.get('input[name="username"]').type("admin");
  cy.get('input[name="password"]').type("admin");
  cy.get('button').contains("Sign In").click();
  cy.get(':nth-child(2) > :nth-child(1) > .mt-5').contains("Borrowers").should("be.visible");
  cy.get('.px-8 > :nth-child(2) > :nth-child(2) > .w-full').contains("Loans").should("be.visible")
  cy.get('.px-8 > :nth-child(2) > :nth-child(3) > .w-full').contains("Payments").should("be.visible")
  cy.get(':nth-child(3) > :nth-child(1) > .mt-5').contains("Maturity Date").should("be.visible")
  cy.get(':nth-child(3) > :nth-child(2) > .mt-5').contains("Loans For Approval").should("be.visible")
  cy.get('.px-8 > .py-5').should("be.visible")
  
  cy.get('.text-2xl').contains("Maogma").should("be.visible")
  //cy.get('.md\:block > :nth-child(1) > .text-sm').contains("Lending Application").should("be.visible")
});
it("Should display borrowers list and details", () => {
  cy.contains("Get Started").click();
  cy.get('input[name="username"]').type("admin");
  cy.get('input[name="password"]').type("admin");
  cy.get('button').contains("Sign In").click();
  cy.get('ul > :nth-child(2)').click()
  cy.get('.mt-10 > :nth-child(1)').contains("ID")
  cy.get('.mt-10 > :nth-child(2)').contains("Full Name")
  cy.get('.mt-10 > :nth-child(3)').contains("Contact Number")
  cy.get('.mt-10 > .px-4').contains("Address")
  cy.get('.mt-10 > :nth-child(5)').contains("Email")
  cy.get('.mt-10 > :nth-child(6)').contains("Action")
});
it("Should add a new borrower", () => {
  cy.contains("Get Started").click();
  cy.get('input[name="username"]').type("admin");
  cy.get('input[name="password"]').type("admin");
  cy.get('button').contains("Sign In").click();
  cy.get('ul > :nth-child(2)').click()
  cy.get('button.border.hover\\:bg-red-700.bg-red-500.text-white.font-bold.py-2.px-4.mb-2.rounded.focus\\:outline-none.focus\\:shadow-outline.w-auto.mt-2.mr-5').click();
  cy.get('input[name="firstname"]').type('Festus');
  cy.get('input[name="lastname"]').type('Mutie');
  cy.get('input[name="contactNumber"]').type('0701768158');
  cy.get('input[name="address"]').type('123 Main St');
  cy.get('input[name="email"]').type('festusmutie970@gmail.com');
  cy.get('input[name="username"]').type('Festo');
  cy.get('button:contains("Save")').click();
});
//it("Should delete a borrower entry", () => {
 // cy.contains("Get Started").click();
 // cy.get('input[name="username"]').type("admin");
 // cy.get('input[name="password"]').type("admin");
  //cy.get('button').contains("Sign In").click();
  //cy.get('ul > :nth-child(2)').click()
  //cy.get('[data-testid="DeleteForeverIcon"]').click();
//});
it("Should display Loans transaction reports", () => {
  cy.contains("Get Started").click();
  cy.get('input[name="username"]').type("admin");
  cy.get('input[name="password"]').type("admin");
  cy.get('button').contains("Sign In").click();
  cy.get('ul > :nth-child(3)').click()
  cy.get('th.w-1\\/1.px-1.py-2.text-gray-600').should('contain.text', 'Voucher');
  cy.get('th.w-1\\/1.px-1.py-2.text-gray-600').next().should('contain.text', 'Client Name');
  cy.get('th.w-1\\/6.px-1.py-2.text-gray-600').eq(1).should('contain.text', 'Loan Type');
  cy.get('th.w-1\\/6.px-1.py-2.text-gray-600').eq(2).should('contain.text', 'Outstanding Balance');
  cy.get('th.w-1\\/6.px-4.py-2.text-gray-600').eq(0).should('contain.text', 'Gross Loan');
  cy.get('th.w-1\\/6.px-4.py-2.text-gray-600').eq(1).should('contain.text', 'Amortization');
  cy.get('th.w-1\\/6.px-4.py-2.text-gray-600').eq(2).should('contain.text', 'Terms');
  cy.get('th.w-1\\/6.px-4.py-2.text-gray-600').eq(3).should('contain.text', 'Date Released');
  cy.get('th.w-1\\/6.px-4.py-2.text-gray-600').eq(4).should('contain.text', 'Status');
  cy.get('th.w-1\\/1.px-4.py-2.text-gray-600').should('contain.text', 'Actions');

  
});
it("Should add a new loan", () => {
  cy.contains("Get Started").click();
  cy.get('input[name="username"]').type("admin");
  cy.get('input[name="password"]').type("admin");
  cy.get('button').contains("Sign In").click();
  cy.get('ul > :nth-child(3)').click()
  cy.get('button.bg-red-500.hover\\:bg-red-700.text-white.font-bold.py-2.px-4.mb-2.rounded.focus\\:outline-none.focus\\:shadow-outline.w-auto.mt-2').click();
  cy.get('[name="client_id"]').should('be.visible').type('12345');
  cy.get('#type').should('be.visible').select('Salary Loan'); // Selects the "Salary Loan" option
  cy.get('select#status').should('be.visible').select('Approved');
  cy.get('input[name="gross_loan"]').should('be.visible').type('5000');
  cy.get('input.block.border.border-grey-500.w-10\\/12.p-3.rounded.mb-4').eq(0).should('be.visible').type('100000');
  cy.get('input.block.border.border-grey-500.w-10\\/12.p-3.rounded.mb-4').eq(1).should('be.visible').type('12345');
  cy.get('select#terms').should('be.visible').select('3');
  cy.get('input.block.border.border-grey-500.w-10\\/12.p-3.rounded.mb-4').eq(2).should('be.visible').type('2024-12-25T10:30');
  cy.get('input.block.border.border-grey-500.w-10\\/12.p-3.rounded.mb-4').eq(3).should('be.visible').type('2024-12-31');
  cy.get('.mt-10 button:first-child').should('be.visible').click();

});

it("Should display payment transaction reports", () => {
  cy.contains("Get Started").click();
  cy.get('input[name="username"]').type("admin");
  cy.get('input[name="password"]').type("admin");
  cy.get('button').contains("Sign In").click();
  cy.get('ul > :nth-child(4)').click()
  cy.get('th.w-1\\/1.px-1.py-2.text-gray-600').should('contain.text', 'ID');
  cy.get('th.w-1\\/6.px-1.py-2.text-gray-600').should('contain.text', 'Client Name');
  cy.get('th.w-1\\/1.px-1.py-2.text-gray-600').should('contain.text', 'Voucher ID');
  cy.get('th.w-1\\/6.px-1.py-2.text-gray-600').should('contain.text', 'Amount');
  cy.get('th.w-1\\/6.px-1.py-2.text-gray-600').should('contain.text', 'Collection Date');
  cy.get('th.w-1\\/6.px-1.py-2.text-gray-600').should('contain.text', 'Collected By:');
  cy.get('th.w-1\\/6.px-1.py-2.text-gray-600').should('contain.text', 'New Balance');
  cy.get('th.w-1\\/6.px-4.py-2.text-gray-600').should('contain.text', 'Method');
  cy.get('th.w-1\\/6.px-4.py-2.text-gray-600').should('contain.text', 'Delete');
});
it("Should add a new payment", () => {
  cy.contains("Get Started").click();
  cy.get('input[name="username"]').type("admin");
  cy.get('input[name="password"]').type("admin");
  cy.get('button').contains("Sign In").click();
  cy.get('ul > :nth-child(4)')
  cy.get('button.border.hover\\:bg-red-700.bg-red-500.text-white.font-bold.py-2.px-4.mb-2.rounded.focus\\:outline-none.focus\\:shadow-outline.w-auto.mt-2.mr-5')
  .should('be.visible').click();

});
it("Should successfully send an email to a client", () => {
  cy.contains("Get Started").click();
  cy.get('input[name="username"]').type("admin");
  cy.get('input[name="password"]').type("admin");
  cy.get('button').contains("Sign In").click();
  cy.get('a.ml-2\\.5').contains('Email').click();
  cy.get('[data-testid="CheckIcon"]').first().click();  // Clicks the first matching element
  cy.get('textarea#message').type('Hello sir, I hope this email finds you well.I am writing to let you know....');
  cy.get('button[type="submit"]').contains('Send message').click();
});

});









