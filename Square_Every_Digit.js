//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num) {
    let arr = Array.from(num.toString()).map(Number);
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return parseInt(arr.join(""));
}