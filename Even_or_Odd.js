// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    return "Odd";
}

function evenOrOdd_v2(number) {
    if (number / 2 === Math.floor(number / 2)) {
        return "Even";
    }
    return "Odd";
}