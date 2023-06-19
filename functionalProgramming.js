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
    'EGYPT',
    'FINLAND',
    'ENGLAND'
]
const lower = countries.map((lowerCase) => {
    return lowerCase.toLowerCase() 
})
console.log(lower)

// filter : this method filter out items which full fill filtering conditions and return a new array 
// filter countries containing land
const containsLand = countries2.filter((endLand) => {
        return endLand.includes('LAND')
})
console.log(containsLand)

//filter countries with 5 letters 
const countriesWithFiveLetter = countries2.filter((letter) =>{
    return letter.length === 5
})
console.log(countriesWithFiveLetter)

// reduce : takes the callback function takes accumulator, current, and optional initial value as a parameter and returns a single value.
const numbers3 = [1, 2, 3, 4, 5]
const sum2 = numbers3.reduce((acc, cur) => acc + cur, 0)

console.log(sum2)

//every : check if all the elements are similar in one aspect. it returns boolean value
const bool = [true, true, true, true]
const areAllTrue = bool.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true

// find : returns the first element that satisfies the condition 
const ages = [24, 23, 18, 45 , 56]
const findAge = ages.find((ages) => ages < 24)
console.log(findAge)

// findIndex : returns the position(index) of the first element that satisfies the condition 
const fruits = ['orange', 'apple', 'banana', 'pineapple']
const fruitType = fruits.findIndex((fruit) => fruit.length > 7)
console.log(fruitType)

// some : check if some of the elements are similar in one aspect. it returns boolean 
const Countries = ['England', 'Finland','Ireland',]
const check = Countries.some((check) => check.includes('land'))
console.log(check)

// sort : the sort method arranges the array elements either ascending or descending order. sort method arranges the original array. 
// sorting string values 
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
const arrange = products.sort()
console.log(`sorted array values ${arrange}`)

