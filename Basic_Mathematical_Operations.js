// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
function basicOp(operation, value1, value2) {
    let result = 0;
    if (operation === '+') {
        result = value1 + value2;
    }
    else if (operation === '-') {
        result = value1 - value2;
    }
    else if (operation === '*') {
        result = value1 * value2;
    }
    else if (operation === '/') {
        result = value1 / value2;
    }
    return result;
}