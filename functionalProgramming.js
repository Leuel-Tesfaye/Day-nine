// latest version of javascript introduced lots of built in methods which can help us to solve complicated problems. all built in methods take callback functions. 

// for each : iterate an array elements. we use forEach only with arrays. 
// it takes  a callback function with elements, index parameter and array itself.
let sum = 0
const num = [1,2,3,4,5,6]
num.forEach((num) => {
    return sum += num
})
console.log(sum)

const countries = ['Finland','Denmark','Sweden','Norway']
countries.forEach(element => console.log(element.toUpperCase()))

// map : iterate an array element and modify the array elements. It takes a callback function with elements, index, array parameter and return a new array. 
const numbers = [1,2,3,4,5,6]
const cubeNumber = numbers.map((num) =>  num * num * num)
console.log(cubeNumber) 

const names = ['paul','prince', 'Jordan', 'Hope']
const upperCase = names.map((name) => name.toUpperCase())
    console.log(upperCase)

const countries2 = [
    'ALBANIA',
    'ETHIOPIA',
    'KENYA',
    'EGYPT'
]
const lower = countries.map((lowerCase) => {
    return lowerCase.toLowerCase() 
})
console.log(lower)