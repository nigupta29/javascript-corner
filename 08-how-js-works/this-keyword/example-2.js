const jonas = {
  year: 1990,
  calcAge: function () {
    console.log(this)
    console.log(`Your age :: ${2023 - this.year}`)
  },
}

const matilda = {
  year: 1991,
}
jonas.calcAge() // this will point to Jonas

matilda.calcAge = jonas.calcAge
matilda.calcAge() // this will point to matilda
