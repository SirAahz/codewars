// https://www.codewars.com/kata/59a9919107157a45220000e1/train/javascript
function findAll(array, n) {
    return array
        .map((arr, index) => arr === n ? index : null)
        .filter(index => index !== null);
}