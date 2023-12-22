const addExpr = function (a, b) {
  console.log(arguments)
  return a + b
}
addExpr(2, 5)
addExpr(2, 5, 7, 10)

const addArrow = (a, b) => {
  console.log(arguments)
  return a + b
}
addArrow(2, 5, 8)
