// Scoping in Practice

function calcAge(birthYear) {
  const age = 2037 - birthYear

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`
    console.log(output)

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven'

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!'

      const str = `Oh, and you're a millenial, ${firstName}`
      console.log(str)

      function add(a, b) {
        return a + b
      } // if we don't use the strict mode the functions will be availble to the parent scope
    }
    // console.log(str); // not accesible outside the block(if) scope

    console.log(millenial) // the var are always function scoped even in strict mode.

    // console.log(add(2, 3)) // the function add() will work when not using the strict mode.

    console.log(output)
  }
  printAge()

  return age
}

const firstName = 'Jonas'
calcAge(1991)
// console.log(age)
// printAge()
