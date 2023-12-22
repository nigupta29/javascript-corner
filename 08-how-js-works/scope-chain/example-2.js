// Example to showcase that the scope chain doesn't depend upon the call stack.

const a = 'Jerry'

first()
function first() {
  const b = 'Hello!'

  second()
  function second() {
    const c = 'Hi'

    third()
  }
}

function third() {
  const d = 'Hey!'
  console.log(a + b + c + d) // Reference Error
}
