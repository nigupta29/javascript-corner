var lastName = 'Doe'

const person = {
  firstName: 'John',
  age: 23,
  greet: () => console.log(`Hi! Mr. ${this.lastName}`),
}

person.greet()
