# TestAutomationPH App Test Automation🚀

This automation project serves as the final examination for Cypress Automation training in Hire-Train-Deploy(HTD) program. This include the registration of user and quiz master account & login🌐



## Installation 🛠️

### 1. Create project Folder
- Create a folder named "Cypress-Project" on your desktop
  
```bash
mkdir ~/Desktop/Cypress-Projects
```

### 2. Clone the Repository

```bash
cd  ~/Desktop/Cypress-project
git clone https://github.com/LFarparan/lfarparan-cypress-exam.git
```
### 3. Install Dependencies

```bash
cd  cypress_Trial
git init
npm i cypress --save-dev
npm i
```
## Running the Tests 🏃‍♂️
- We have spec file (a Test Code/File) spec, and they can be run in both headless and headed modes.

### Headless Mode 🧑‍💻 (Without Browser UI)

1. Register Test (Headless)
- To run the login test in headless mode:

```bash
npm run register
```

### Headed Mode 🖥️ (With Browser UI)
- In headed mode, the browser runs with a visible UI. This mode is useful for debugging and visual verification of test actions.

1. Registration Test (Headed)
- To run the login test in headed mode:
```bash
npx cypress open
```
- select E2E testing
- run register.cy.js

## Features ✨

- **Register Test**: Automates the register functionality using valid and invalid credentials.
- **Faker**: Automates the generation of user data for both user and quiz_master using faker as a dependency.




