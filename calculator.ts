/**
 * Let's make a calculator 🧮
 */
type Command = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';

const calculate = (command: Command, x: number, y: number): number => {
  let result: number;

  switch (command) {
    case 'add':
      result = x + y;
      break;
    case 'subtract':
      result = x - y;
      break;
    case 'multiply':
      result = x * y;
      break;
    case 'divide':
      result = x / y;
      break;
    case 'remainder':
      result = x % y;
      break;
    default:
      throw Error('unknown command');
  }
  return result;
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('subtract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
console.log(calculate('plus', 5, 2)); // error
