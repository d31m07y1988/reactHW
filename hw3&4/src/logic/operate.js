import Big from 'big.js';

export function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
    error.innerHTML = ''
    try {
        switch (operation) {
            case '+':
                return one.plus(two).toString();
                break
            case '-':
                return one.minus(two).toString();
                break
            case '*':
                return one.times(two).toString();
                break
            case '/':
                return one.div(two).toString();
                break
            default:
                error.innerHTML = 'неизвестная операция'
                return null;
                break
        }
  } catch (err) {
      error.innerHTML = err.message;
      return null;
  }
}
