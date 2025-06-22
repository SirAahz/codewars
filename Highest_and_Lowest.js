//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers) {
    let arr = numbers.split(' ').map(Number);
    let high = arr[0];
    let low = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > high) high = arr[i];
        if (arr[i] < low) low = arr[i];
    }
    return `${high} ${low}`;
}