const myName = 'Jerry' // Global scoped variable

function first() {
  const age = 30 // Local scoped variable inside for first() func.

  if (age >= 30) {
    const decade = 3 // Block scoped variable, can't be accessed outside if-block
    var millenial = true
  }

  console.log(millenial) // var is always function scoped, such that millenial will accessed throught out the first() func

  function second() {
    const job = `teacher` // function scoped variable, can't be accessed outside second() func

    console.log(`${myName} is a ${age}-old ${job}`)
    // The Execution Context will look into the scope chain if the varible is present in the local scope or not
    // If not it will check in the parent scope till the global scope references.
    // Such that this will not give error.
  }

  second()
}

first()
