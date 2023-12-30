const user = {
    name: "Ahmad",
    age: 36,
    isLoggedIn: true
}

const regularUser = {
    fullName: {
        userfullname:{
            firstName: "Ahmad",
            lastName: "Yaseen"
        }
    }
}

//console.log(regularUser.fullName.userfullname.lastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1,obj2};
//const obj3 = {...obj1, ...obj2};
const obj3 = Object.assign(obj1,obj2);

//console.log(obj3);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('email'));

const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "Ahmad"
}

const {courseInstructor: instructor} = course
console.log(instructor);

