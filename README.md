# Nightwatch.js Automation Testing Framework

This repository contains an automation testing framework built with Nightwatch.js for testing the CarShare web application. It follows the Page Object Model (POM) design pattern to organize test code efficiently.

## Features

- **Home Page Tests**: Includes tests for navigating to the home page and interacting with elements like the sign-up button.
- **Register Page Tests**: Tests for the registration flow, including form submission and verification of success messages.
- **Dynamic Data Generation**: Generates unique user data (e.g., full name, email) based on the current date and time to ensure test isolation.

## Getting Started

To run the tests locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Nightwatch.js](https://nightwatchjs.org/) installed globally (optional, can be run via npx)

### Clone the Repository

1. Open your terminal or command prompt.
2. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/JustWildCode/autofw-ts-nightwatch

### Running test
1. For running all tests 
   ```bash 
   npx nightwatch 
2. For running specific test
	```bash 
	npx nightwatch ./test/<file name>.ts