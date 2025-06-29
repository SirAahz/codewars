// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if (Number.isInteger(Math.sqrt(sq)) === true) {
        return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
    }
    return -1;
}