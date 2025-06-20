//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
function openOrSenior(data){
  const result = [];
  for (let i = 0; i < data.length ; i++) {
    const age = data[i][0];
    const handicap = data[i][1];
    if (age >= 55 && handicap > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  }
  return result;
}