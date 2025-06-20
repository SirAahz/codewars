//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = function (list) {
    let minNumber = list[0];
    for (let i = 0; i < list.length; i++) {
        if (list[i] < minNumber) {
            minNumber = list[i];
        }
    }
    return minNumber;
}

const max = function (list) {
    let maxNumber = list[0];
    for (let i = 0; i < list.length; i++) {
        if (maxNumber < list[i]) {
            maxNumber = list[i];
        }
    }
    return maxNumber;
}