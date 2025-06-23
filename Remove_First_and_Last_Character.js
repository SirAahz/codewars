//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
function removeChar(str) {
    let arr = Array.from(str);
    arr[0] = '';
    arr[arr.length - 1] = '';
    return arr.join('');
};