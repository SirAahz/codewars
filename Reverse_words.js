//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
function reverseWords(str) {
    let arr = str.split(" ");
    let reverseStr = '';
    for (let i = 0; i < arr.length; i++) {
        let reverse = '';
        for (let j = arr[i].length - 1; j >= 0; j--) {
            reverse = reverse + arr[i][j];
        }
        if (i !== arr.length - 1) {
            reverseStr = reverseStr + reverse + ' ';
        } else {
            reverseStr = reverseStr + reverse;
        }
    }
    return reverseStr;
}