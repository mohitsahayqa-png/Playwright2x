/*Challenge 1

Create an array:

let browsers = ["Chrome", "Firefox", "Edge"];

Print:

First browser
Second browser
Third browser */

let browsers = ["Chrome", "Firefox", "Edge"];
console.log(browsers[0]);
console.log(browsers[1]);
console.log(browsers[2]);

/*Challenge 2

Create an array of 5 user names.

Print only:

First user
Last user */

let users=['Mohit','Rahul', 'Rohit','Ramesh','Suresh'];
console.log(users[0]);
console.log(users[users.length-1]);

/*Challenge 3

Replace the third user with:

Admin

Print the array. */

users[2]='Admin';
console.log(users);

/*Challenge 4

Add:

Guest

at the end.

Print the array. */

users.push('Guest');
console.log(users);

/*Challenge 5

Remove the last user.

Print the array. */

users.pop();
console.log(users);

/*Challenge 6

Print every browser using a loop. */

for(let i=0;i<browsers.length;i++){
    console.log(browsers[i]);
}

/*Challenge 7

Print:

Browser 1 : Chrome
Browser 2 : Firefox
Browser 3 : Edge */

for(let i=0;i<browsers.length;i++){
    console.log("Browser "+ (i+1)+ " :"+ browsers[i]);
}

/*Challenge 8

Create:

let marks = [85, 90, 75, 60, 95];

Print every mark. */

let marks = [85, 90, 75, 60, 95];

for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

/*Challenge 9

Find total marks.

Expected: */

let sum=0;

for(i=0;i<marks.length;i++){
     sum+=marks[i];
}
console.log(sum);

/*Challenge 10

Find average marks. */

let avg= sum/5;
console.log(avg);

/*Challenge 11

Print only marks greater than:

80 */

for(let i=0;i<marks.length;i++){
    if(marks[i]>80){
        console.log(marks[i])
    }
}

/*Challenge 12

Count how many students scored:

90 or above */
let count=0;
for(let i=0;i<marks.length;i++){
    if(marks[i]>=90){
        count++;
    }
}

console.log(count);

/*Challenge 13

Print only even numbers from:

let numbers = [11,22,33,44,55,66]; */

let numbers = [11,22,33,44,55,66];

for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2===0){
        console.log(numbers[i]);
    }
}

/*Challenge 14

Print only odd numbers. */

for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2!=0){
        console.log(numbers[i]);
    }
}

/*Challenge 15

Find the largest number. */

let max=numbers[0];
for(let i=1;i<numbers.length;i++){
    if(numbers[i]>max){
        max=numbers[i];
    }
}
console.log(max);

/*Challenge 16

Create:

printUsers(users)

Accept an array and print every user.

Example:

printUsers(["Mohit","Rahul","Amit"]); */

function printUsers(usersNew){

    for(let i=0;i<usersNew.length;i++){
        console.log(usersNew[i]);
    }

}

printUsers(["Mohit", "Rahul", "Amit"]);

/*Challenge 17

Create:

findTotal(numbers)

Return the sum of the array. */

let sumNew1=0;
function findTotal(numbers){
    for(let i=0;i<numbers.length;i++){
        sumNew1+=numbers[i];
    }
    console.log(sumNew1);
}

findTotal([10,10,10,10,10])

/**Challenge 18

Create:

findLargest(numbers)

Return the largest number. */


function findLargest(numbersNew){
    let largestNumber=numbersNew[0];
     for(let i=1;i<numbersNew.length;i++){
        if(numbersNew[i]>largestNumber){
            largestNumber=numbersNew[i];
        }
    }
    console.log(largestNumber);
}
findLargest([1,2,3]);

/*Challenge 19

Create:

countEven(numbers)

Return the total even numbers. */

function countEven(numbersNew2){
    let countEvenNew=0;
    for(let i=0;i<numbersNew2.length;i++){
        if(numbersNew2[i]%2===0){
            countEvenNew++;
        }
    }
    console.log(countEvenNew);

}

countEven([12,13,14,16,18,11]);

/*Challenge 20 ⭐ (Playwright Style)

Imagine Playwright fetched menu names:

let menuItems = [
    "Home",
    "Search",
    "Reports",
    "Settings",
    "Logout"
];

Create:

validateMenu(menuItems)

Output:

Checking Home
Checking Search
Checking Reports
Checking Settings
Checking Logout

This is almost identical to how you'd iterate through UI elements in Playwright. */

function validateMenu(menuItems){
    for(let i=0;i<menuItems.length;i++){
        console.log('Checking '+ menuItems[i]);
    }
}

validateMenu([
    "Home",
    "Search",
    "Reports",
    "Settings",
    "Logout"
]);