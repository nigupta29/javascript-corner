var firstName = 'John' // in browser engine this will be stored inside the window object

const jonas = {
  firstName: 'Jonas',
  year: 1990,

  calcAge: function () {
    console.log(this)
    console.log(`Your age :: ${2023 - this.year}`)

    // const isMillenial = function () {
    //   // will throw undefined as it s called in a normal function way not a method way.
    //   console.log(this.year)
    //   console.log(this.year >= 1981 && this.year <= 1996)
    // }
    
    // Solution 1 : Storing the this to the variable and passing it down.
    // const self = this
    // const isMillenial = function () {
    //   console.log(self.year)
    //   console.log(self.year >= 1981 && self.year <= 1996)
    //   // will work fine with this approach
    // }
    
    // Solution 2 : Lexical Scoping usnign Arrow function
    const isMillenial = () => {
      console.log(this.year) // 1990
      console.log(this.year >= 1981 && this.year <= 1996) // true
    }
    
    
    isMillenial()
  },

  // greet: () => console.log(`Hey ${this.firstName}`), // this will undefined as usual
  // Takeaway is to never use the arrow functions as the methods

  // ES6 way of writing methods in modern js
  greet() {
    console.log(`Hey ${this.firstName}`)
  },
}

jonas.greet()
jonas.calcAge()
