/*Challenge 1 — Create a Function

Create:

function printEvenNumbers(numbers) {
    // your code
}

Call:

printEvenNumbers([11, 20, 33, 42, 55, 68, 71]);

Using forEach(), print only even numbers.

Expected:

20
42 */

function printEvenNumbers(numbers) {
    numbers.forEach((number=>{if(number%2===0){
        console.log(number)
    }}))
}


printEvenNumbers([11, 20, 33, 42, 55, 68, 71]);

/*Challenge 2 — Filter & Print QA Users

Create:

let users = [
    { name: "Mohit", role: "QA", active: true },
    { name: "Rahul", role: "Admin", active: true },
    { name: "Amit", role: "QA", active: false },
    { name: "Rohit", role: "QA", active: true }
];

Using forEach(), print only users who are both:

role === "QA"
active === true

Expected output:

Mohit is an active QA
Rohit is an active QA

Skills: forEach() + objects + && + if + template literals. */

let users = [
    { name: "Mohit", role: "QA", active: true },
    { name: "Rahul", role: "Admin", active: true },
    { name: "Amit", role: "QA", active: false },
    { name: "Rohit", role: "QA", active: true }
];

users.forEach((user=>{if(user.role==='QA' && user.active===true){
    console.log(`${user.name} is an active QA`)
}}))

/*Challenge 2 — Calculate Total & Average

Create:

let marks = [85, 72, 90, 68, 95];

Create a function:

function calculateResult(marks) {
    // your code
}

Using forEach():

Calculate the total.
Calculate the average.
Return the average.
Print:
Total = 410
Average = 82

Call:

calculateResult(marks);

Important: Don't manually calculate the total. Let forEach() do the work.

Skills: function + parameter + forEach() + accumulator + return. */


let marks = [85, 72, 90, 68, 95];
totalMarks=0
let countSubject=0
averageMarks=0
function calculateResult(marks) {
    marks.forEach((mark=>{
        totalMarks=totalMarks+mark;
        countSubject++;
    }

)
)
console.log(`Total= ${totalMarks}`)
averageMarks=totalMarks/countSubject
console.log(`Average= ${averageMarks}`)
}
calculateResult(marks);

/*Challenge 3 ⭐ Playwright-Style Validation

Imagine Playwright has collected information about buttons from a webpage:

let buttons = [
    { name: "Login", visible: true, enabled: true },
    { name: "Search", visible: true, enabled: false },
    { name: "Reports", visible: false, enabled: true },
    { name: "Logout", visible: true, enabled: true }
];

Create an arrow function:

const validateButtons = (buttons) => {
    // your code
};

Using forEach(), validate every button.

Rules:

If:

visible === true
AND
enabled === true

print:

Login button is ready

Otherwise print:

Search button is not ready

Expected:

Login button is ready
Search button is not ready
Reports button is not ready
Logout button is ready */

let buttonsNew = [
    { name: "Login", visible: true, enabled: true },
    { name: "Search", visible: true, enabled: false },
    { name: "Reports", visible: false, enabled: true },
    { name: "Logout", visible: true, enabled: true }
];

const validateButtons = (buttonsNew) => {
    buttonsNew.forEach((buttonNew=>{
        if(buttonNew.visible===true && buttonNew.enabled===true){
            console.log(`${buttonNew.name} button is ready`)
        }
        else{
            console.log(`${buttonNew.name} button is not ready`)
        }
    }))
};

validateButtons(buttonsNew);