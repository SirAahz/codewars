//https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
function friend(friends) {
    let myfriends = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            myfriends.push(friends[i]);
        }
    }
    return myfriends;
}