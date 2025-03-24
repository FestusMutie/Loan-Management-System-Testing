# Cypress Test Execution Guide

## Overview
This document provides step-by-step instructions on how to set up and run Cypress tests, specifically the test file `Loanspec.cy.js` located in `client/cypress/e2e/`.

## Prerequisites
Before running the Cypress tests, ensure you have the following installed:
- Node.js (v14 or later recommended)
- npm or yarn
- Cypress installed in the project

## Installation
If Cypress is not installed, navigate to the project root directory and run:
```sh
npm install
```
OR
```sh
yarn install
```
This will install all project dependencies, including Cypress.

## Running Cypress Tests
To execute the test file `Loanspec.cy.js`, follow these steps:

### 1. Open Cypress Test Runner
Run the following command from the project root:
```sh
npx cypress open
```
OR
```sh
yarn cypress open
```
- This opens the Cypress Test Runner.
- Navigate to `client/cypress/e2e/Loanspec.cy.js` and click on it to execute the test.

### 2. Run Tests in Headless Mode
If you prefer running tests in headless mode (without UI), use the command:
```sh
npx cypress run --spec client/cypress/e2e/Loanspec.cy.js
```
OR
```sh
yarn cypress run --spec client/cypress/e2e/Loanspec.cy.js
```
This will run the tests in the terminal and generate a report.

## Test Report
After running the tests, you can check the results in the terminal or navigate to the Cypress `videos` and `screenshots` folders for more insights.

## Troubleshooting
- If tests fail due to missing dependencies, rerun `npm install` or `yarn install`.
- Ensure the application under test is running before executing Cypress tests if required.
- Use `npx cypress open --browser chrome` to specify a browser if needed.




