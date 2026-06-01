/*Challenge 1 Print:

1
2
3
4
5 */

for(let i=1;i<=5;i++){
    console.log(i);
}

/*Challenge 2

Print:

10
9
8
7
6
5 */

for(let i=10;i>=5;i--){
    console.log(i);
}

    console.log('--------------------')
/*Challenge 3

Print all even numbers from:

1 to 20 */

for(let i=0;i<=20;i+=2){
    console.log(i);
}



    console.log('--------------------')



/*Challenge 4

Print all odd numbers from:

1 to 20 */

for(let i=1;i<=20;i+=2){
    console.log(i);
}


console.log('--------------------')


/*Challenge 5

Print:

5
10
15
20
25
30 */

for(let i=1 ;i<=30;i++){
    if(i%5==0){
        console.log(i)
    }
}

/*console.log('--------------------') */

/*Challenge 6

Find sum:

1 + 2 + 3 + 4 + 5 */

let sum=0;

for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log(sum);

/*Challenge 7

Find sum:

1 to 100 */
let sumnew=0;

for(let i=1;i<=100;i++){
    sumnew=sumnew+i;
}
console.log(sumnew);

console.log('--------------------') 

/*Challenge 8

Count how many numbers exist from:

1 to 50

without manually calculating. */

let count=0;

for(i=1;i<50;i++){
    count++;
}
console.log(count);

console.log('--------------------') 

/*Challenge 9

Print multiplication table of: */

let mul;
for(let i=1;i<=10;i++){
   mul=7*i;
   console.log(mul);
}

console.log('--------------------') 

/*Challenge 10

Print squares: */

let square;
for(let i=1;i<=10;i++){
    square=i*i;
    console.log(square);
    
}
