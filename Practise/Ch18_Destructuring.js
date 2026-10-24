const employee = {
    name: "Rahul",
    department: "QA",
    experience: 3
};

const { department, experience } = employee;

console.log(department);
console.log(experience);

//Practise 2
const testCase = {
    id: "TC101",
    title: "Validate user login",
    status: "Passed"
};

const { id: testId, title, status: result } = testCase;

console.log(testId);
console.log(title);
console.log(result);

//TC101
//Validate user login 
// Passed


//Practise 3 

const array1=['Mohit','Sahay'];
const [firstName,lastName] =array1;
console.log(firstName);