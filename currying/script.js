// const add = (num1, num2) => num1 + num2
const add = num1 => num2 => num1 + num2
const increment = add(1)

console.groupCollapsed('Setor de soma')
console.log(`Chamando só o add ${increment}`)
console.log(`Chamando increment ${increment(9)}`)
console.log(add(5)(25))
console.groupEnd()

const getDiscount = discount => price => price * (discount/100)
const discount = getDiscount(10)

console.groupCollapsed('Setor de desconto')
console.log(discount(747))
console.groupEnd()
