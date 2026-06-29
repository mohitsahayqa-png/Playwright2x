/*Question 1

Create a function that prints:

Hello JavaScript

Call it once. */

function greetings(){
    console.log('Hello JavaScript');
}

greetings();

/*Question 2

Create a function that prints your:

Name
Age
City

Call it twice. */

function details(){
    console.log('Mohit');
    console.log(27);
    console.log('Faridabad');

}

details();
details();

/*Question 4

Create two functions:

morningGreeting()

prints:

Good Morning

and

eveningGreeting()

prints:

Good Evening */

function morningGreeting(){
    console.log('Good Morning')
}

function eveningGreeting(){
     console.log('Good Evening')
}

morningGreeting();
eveningGreeting();

/*Question 5

Create a function that prints:

****************

Call it before and after another message. */

function seperator(){
    console.log('****************')
}

seperator();
greetings();
seperator();

/*Question 6

Create:

greet(name)

Example:

greet("Mohit")

Output:

Hello Mohit

Call with 3 different names. */

function greet(name){
    console.log('Hello '+name);
}

greet('Mohit');
greet('Michael');
greet('Tom');

/*Question 7

Create:

showAge(age)

Print:

Age is 26 */

function showAge(age){
    console.log('Age is '+age);
}

seperator();
showAge(26);

/*Question 8

Create:

multiply(a,b)

Print multiplication.

Example:

multiply(5,6)

Output:

30 */

function multiplication(a,b){
    console.log(a*b);
}

multiplication(5,6);

/*Question 9

Create:

studentDetails(name, marks)

Output:

Mohit scored 95 marks */

function studentDetails(name,marks){
    console.log(name+" scored "+marks+" marks");
}

seperator();
studentDetails('Mohit',95);

/*Question 10

Create:

login(username)

Print:

Welcome username */

function login(username){
    console.log('Welcome, '+username);
}

login('Mohit')

/*Question 11

Create:

add(a,b)

Return the sum.

Store it in a variable and print it. */

function add(a,b){
    let sum=a+b;
    return sum;
}
let result=add(12,13);
console.log(result);

/*Question 12

Create:

square(number)

Return the square. */

function square(a){
    let num= a*a;
    return num
}

let squaredAns= square(3);
console.log(squaredAns);

/*Question 13

Create:

isEven(number)

Return:

true

or

false */

function isEven(num){
    if(num%2===0){
        return true
    }
    else{
        return false
    }
    
}

let numberCheck= isEven(3);
console.log(numberCheck);

/*Question 14

Create:

largest(a,b)

Return the larger number. */

function largest(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

let checkLargest= largest(14,13);
console.log(checkLargest);

/*Question 15

Create:

calculatePercentage(totalMarks, obtainedMarks)

Return the percentage. */

function calculatePercentage(totalMarks, obtainedMarks){
    let percentage= obtainedMarks/totalMarks*100;
    return percentage;
}

let finalPercentage= calculatePercentage(150, 33);
console.log(finalPercentage+"%");

/*Question 16

Create:

canVote(age)

Return:

Eligible

or

Not Eligible */

function canVote(age){
    if(age>=18){
        let eligibilty='can vote'
        return eligibilty
    }

    else{
        let eligibilty='cannot vote';
        return eligibilty
    }
}

let checkEligibilty= canVote(17);
console.log(checkEligibilty);