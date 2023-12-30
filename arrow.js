const user = {
    username:"ahmad",
    password:123,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(`${this.password}, is your password`)
    }
}

user.welcomeMessage()

function chai(){
        let username = "hitesh"
         console.log(this); 
}

chai()

const one = () =>{
    let username = "hitesh"
     console.log(this);
}

one()

const addTwo = (num1, num2) => (console.log(num1 + num2))

addTwo(2,3)