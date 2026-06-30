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

let users=['Mohit','Rahul', 'Rohit','Ramesh'];
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