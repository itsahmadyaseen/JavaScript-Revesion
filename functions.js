function addTwoNumbers(num1, num2){
    return num1 + num2;
}
var add = addTwoNumbers(5,3)
console.log(add)

function login(username = "sam"){
    if(!username){
        console.log("invalid username")
        return
    }
    return `${username} just logged in`
}

console.log(login(username = "sam"))

function calculateCartPrice(val1, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username:"ahmad",
    password:12329201
}

function handleObject(object){
    return `username is ${object.username} and password is ${object.password}`
}

console.log(handleObject(user))


const addTwo = function(num){
    return num+2
}

console.log(addTwo(5))