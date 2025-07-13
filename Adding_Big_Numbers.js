//https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
function add(a, b) {
    let sum = [];
    let result = [];
    sum.push(a.split("").reverse().map(Number), b.split("").reverse().map(Number));
    for (; sum[0].length !== sum[1].length;) {
        if (sum[0].length > sum[1].length) {
            sum[1].push(0);
        }
        else {
            sum[0].push(0);
        }
    }
    for (let i = 0; i < sum[1].length; i++) {
        result.push(sum[0][i] + sum[1][i])
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i] >= 10) {
            result[i] -= 10;
            if (i + 1 === result.length) {
                result.push(1);
            } else {
                result[i + 1] += 1;
            }
        }
    }

    return result.reverse().join("");
}
