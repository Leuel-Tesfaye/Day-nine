/**Higher order functions are function which take other function as a parameter or return a function as a value . The function passed as a parameter is called a call back */

// callback : is a function which can be passed as parameter to other function. 
const callback = (n) =>{
    return n ** 2 
}

// function that takes other function as callback 
const cube = (callback, n)=>{
    return callback(n), n
}
console.log(cube(callback,3))

// setting time : in javascript we can execute some activities in a certain interval of time or we can schedule (wait) for some time to execute some activities 
// setInterval and setTimeOut

// setInterval higher order function to do some activity continuously with in some interval of time.
const callBack =() =>{
    // code goes here 
}
//setInterval(callBack, duration)

let sayHello = ()=> {
    console.log('Hello')
}
setInterval (sayHello, 10000)

// setting time using setTimeOut
// we use setTimeOut higher order function to execute some action at some time in future. 

let SayHello = () =>{
    console.log('Hello this message will be executes after a some time !!')
}
setTimeout (SayHello, 1000)