//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
function nbYear(p0, percent, aug, p) {
    let years = 0;
    for (; p0 < p; years++) {
        p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
    }
    return years;
}