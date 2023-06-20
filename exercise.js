const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Prince', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]   

// 1. Use forEach to console.log each country in the countries array.

const loop = countries.forEach((loop) =>{
    console.log(loop)
})

// 2. Use forEach to console.log each name in the names array.
 const loopName = names.forEach((loopName) => {
    console.log(`list of names : ${loopName}`)
 })
 
 // 3. Use map to create a new array by changing each country to uppercase in the countries array.
    const upper = countries.map((upperCase) => upperCase.toUpperCase ())
    console.log(upper)

    // 3.1 Use map to create a new array by changing each number to square in the numbers array
 const square = numbers.map((num) => num * num)
 console.log(square)

 // 3.2 Use map to map the products array to its corresponding prices.
const prices = products.map((product) => product.price )
console.log(prices)

// 4. Use filter to filter out countries containing land.
const land = countries.filter((land) => land.includes('land'))
console.log(land)

// 4.1 Use filter to filter out only prices with values.
const value = products.filter((value) => value.price !==' ' && value.price !== '')
console.log(value) 

// 5.1 use find to find the first country containing only six letters in the countries array 

const six = countries.find((six) => six.length === 6 )
console.log(six)
// 5.2 use findIndex to find the position of the first country containing only six letters in the countries array 
const firstCountry = countries.findIndex((country) => country.length === 6)
console.log(firstCountry)

//5.2 use findIndex to find the position of russia if it doesn't exist in the array you will get -1 
const russia = countries.findIndex((russia) => russia.includes('russia'))
console.log(russia)

// exercise level 2 
// 1 . Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const totalPrice = products.filter((item) => item.price !== '' && item.price !== ' ').reduce((acc,item) =>
 acc + item.price,0)
 console.log(totalPrice)

 // 2. Find the sum of price of products using only reduce reduce(callback))
const sum = products.reduce((acc, item) => {
   if(item.price && typeof item.price === 'number'){
      return acc + item.price 
   }
   return acc
}, 0)
console.log(sum)

//3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
const categorizeCountries = (countries,pattern,pattern2) =>{
   return countries.filter((country) => country.includes(pattern,pattern2))
}
const result = categorizeCountries(countries,'land') 
console.log(result)

// 4. 
