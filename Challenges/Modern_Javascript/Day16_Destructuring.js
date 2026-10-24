/*Challenge 1 — Extract object properties
const employee = {
    name: "Aman",
    role: "QA",
    salary: 60000
};

// Extract name and salary into variables.
// Print both. */

const employee = {
    name: "Aman",
    role: "QA",
    salary: 60000
};

const {name,salary}=employee
console.log(name)
console.log(salary)


/*Challenge 2 — Rename properties
const testCase = {
    id: "TC201",
    status: "Passed"
};

// Extract id into testId and status into testStatus.
// Print both. */

const testCase = {
    id: "TC201",
    status: "Passed"
};

const {id:testId,status:testStatus}= testCase;
console.log(testId);
console.log(testStatus);



/*Challenge 3 — Default values
const browserConfig = {
    browser: "Chrome",
    headless: undefined
};

// Extract browser and headless.
// Set headless's default value to true.
// Print both. */

const browserConfig = {
    browser: "Chrome",
    headless: undefined
};

const {browser,headless=true}= browserConfig;
console.log(browser);
console.log(headless);

/*Challenge 4 — Array destructuring
const statuses = ["Passed", "Failed", "Skipped"];

// Extract the first and third values.
// Print both. */

const statuses = ["Passed", "Failed", "Skipped"];
const [first, ,third]= statuses;
console.log(first)
console.log(third)

/*Challenge 5 — Combined challenge
const apiTest = {
    testId: "API101",
    results: ["Passed", "Failed"],
    retries: undefined
};

// Extract testId.
// Extract the first result into firstResult.
// Set retries' default value to 0.
// Print all three. */
const apiTest = {
    testId1: "API101",
    results: ["Passed", "Failed"],
    retries: undefined
};

const {testId1,results:[firstResult],retries=0}= apiTest;
console.log(testId1)
console.log(firstResult)
console.log(retries)