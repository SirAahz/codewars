// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
function isPalindrome(x) {
    let r = "";
    let str = x.toLowerCase();
    for (let i = str.length - 1; i >= 0; i--) {
        r += str[i];
    }
    return str === r;
}