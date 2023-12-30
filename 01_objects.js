const user = {
    "name": "Ahmad",
    age: 20,
    email: "abc@gmail.com",
    location: "Jamshedpur",
    isLoggedIn: true
}

console.log(user.email)  // cannot use when key is defined with " "
console.log(user["location"])

const mysym = Symbol("key1")

const jsUser = {
    name: "Yaseen",
    [mysym]: "key2"   // use [] to get symbol data type
}

console.log(jsUser[mysym]) 

user.email = "newabc@gmail.com" 
// Object.freeze(user)  // no change can be made to user

jsUser.greeting = function () {
    console.log("Welcome js User");
}

console.log(jsUser.greeting);  // reference
console.log(jsUser.greeting());


jsUser.greetingTwo = function () {
    console.log(`Welcome js User, ${this.name}`);
}

console.log(jsUser.greetingTwo());

