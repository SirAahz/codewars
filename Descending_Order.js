//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
function descendingOrder(n) {
    let arr = Array.from(n.toString()).map(Number);
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return parseInt(arr.join(''));
}

function descendingOrderV2(n) {
    return parseInt(
        n.toString()
            .split('')
            .sort((a, b) => b - a)
            .join('')
    );
}
