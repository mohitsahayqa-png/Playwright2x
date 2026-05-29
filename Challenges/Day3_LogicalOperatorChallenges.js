/*Challenge 1 — Driving Eligibility

A person can drive only if:

age is 18 or above
hasLicense is true

Test multiple combinations. */

let age=19;
let hasLicense=false;

if(age>=18 && hasLicense){
    console.log('Can Drive')
}
else {
    console.log('Cannot Drive')
}


/*Challenge 2 — Login Validation

Create:

username
password

Condition:

username should be "admin"
password should be "1234"

If both correct: */

let username="admin";
let password="1234";

if(username==="admin" && password==="1234"){
    console.log('Login successful');
}
else{
    console.log('Invalid credentials');
}

/*Challenge 3 — Discount Eligibility

A customer gets discount if:

purchase amount is greater than 5000
OR
customer is premium member */

let purchaseAmount=3500;
let isMember=true;

if(purchaseAmount>5000 || isMember){
    console.log('Discount Approved');
}
else{
    console.log('Discount Not Approved');
}

/*Challenge 4 — Voting Eligibility

Check:

age >= 18
citizen === true */

let ageNew=20;
let isCitizen=false;

if(ageNew>=18 && isCitizen===true){
    console.log('Eligible to vote');
}
else{
    console.log('Not Eligible to vote');
}

/*Challenge 5 — Number Range Checker

Check whether a number is:

greater than 10
AND
less than 50 */

let numNew=49;

if(numNew>10 && numNew<50){
    console.log('Within Range');
}
else{
    console.log('Not Within Range');
}

/*Challenge 6 — Username Availability

If username is NOT empty: */

let userName="";

if(userName!=""){
    console.log('Username accepted');
}
else{
    console.log('Username required');
}

/*Challenge 9 — Access Permission (Slightly Tricky)

Allow access if:

user is admin
OR
user has special permission */

let userType='Adminn';
let specialPermission=true;

if(userType==='Admin' || specialPermission===true){
    console.log('Access Granted');
}
else{
    console.log('Access Denied');
}