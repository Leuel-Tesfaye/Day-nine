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



