// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
function countSheeps(sheep) {
    let q = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            q++;
        }
    }
    return q;
}