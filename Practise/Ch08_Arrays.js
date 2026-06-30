let cities=['Delhi', 'Mumbai', 'Kolkata'];
console.log(cities[2]);

//Find length of an array
console.log(cities.length);

//Replace an element
cities[1]= 'Bangalore';   
console.log(cities[1]);

//Print last element of an array
console.log(cities[cities.length-1]);

//Print last element using at (Modern way)
console.log(cities.at(-1));

//Array can store any data type

let datatypes=['Delhi',12,true,{name:"john"},function greetings(){console.log('Hello')}];
datatypes[4]();
console.log(datatypes[3].name);

//Use push to add an element in the end
cities.push('Pune');
console.log(cities);

//Use pop to remove the element from the end
console.log(cities.pop());
console.log(cities);
cities.push('Pune');
console.log(cities);

//Add an element to the begining
cities.unshift('Nagpur');
console.log(cities);

//Removes the first element
cities.shift();
console.log(cities);

/*🎯 Today's Practice (Before Challenges)

Write these programs in 07-arrays.js:

Create an array of 5 cities and print the whole array.
Print only the first city.
Print only the last city using .length.
Replace the second city with another city.
Add a new city at the end using push().
Remove the last city using pop().
Add a city at the beginning using unshift().
Remove the first city using shift().
Print every city using a for loop.
Print the total number of cities.*/

//Create an array of 5 cities and print the whole array.
let newCities= ['New Delhi', 'Greater Noida', 'Faridabad'];
console.log(newCities);

//Print only the first city.
console.log(newCities[0]);

//Print only the last city using .length.
console.log(newCities[newCities.length-1]);

//Replace the second city with another city.
newCities[1]='Jameshedpur';
console.log(newCities);

//Add a new city at the end using push().
newCities.push('Varodara');
console.log(newCities);

//Remove the last city using pop().
newCities.pop();
console.log(newCities);

//Add a city at the beginning using unshift().
newCities.unshift('Govindpuri');
console.log(newCities);

//Remove the first city using shift().
newCities.shift();
console.log(newCities);

//Print every city using a for loop.
for(let i=0;i<newCities.length;i++){
    console.log(newCities[i]);
}

//Print the total number of cities.
console.log(newCities.length);
