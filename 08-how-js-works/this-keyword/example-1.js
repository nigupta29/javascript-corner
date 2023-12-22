'use strict'

console.log(this)
// this will be window object in the browser engine
// for node js this will be empty object

function calcAge(birthYear) {
  console.log(2037 - birthYear)
  console.log(this)
  // will return undefined in strict mode else the global object.
}

calcAge(1991)

// same as the 
const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear)
  console.log(this)
  // will return undefined in strict mode else the global object.
}

calcAge2(1991)

const calcAge3 = birthYear => {
  console.log(2037 - birthYear)
  console.log(this)
  // here this will be lexical scoped
  // such that will return whatever the placement is there in the current scope of calcAge2
}

calcAge3(1991)
