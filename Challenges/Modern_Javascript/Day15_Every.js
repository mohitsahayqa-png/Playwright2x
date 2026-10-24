/*Challenge 1: Positive numbers
Check whether every number in the array is greater than zero. */

const numbers=[1,-3,5,7,8,9];

const result= numbers.every((number)=>{
    return number>0
})

if(result){
    console.log('Every Number is Positive')
}else{
    console.log('Every Number is NOT  Positive')
}

/*Challenge 2: Passing scores
Check whether every student has scored at least 40 marks. */

const marks=[35,40,55,60,85,95,21];

const passingScore= marks.every((mark)=>{
    return mark>30
})

if(passingScore){
    console.log('Every Student passed')
}else{
    console.log('Every student did NOT  Pass')
}

/*Challenge 3: Active users
Check whether all users are active. */

const users = [
    {name:"Aman", active: true},
    {name:'Mohit', active: true},
    {name:'Rohit', active: false}

]

const allActive= users.every((user)=>{
    return user.active===true
})

if(allActive){
    console.log('Every user active')
}else{
    console.log('Every user not Active')
}