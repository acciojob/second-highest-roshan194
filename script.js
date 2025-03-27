//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) return -Infinity; // Edge case: empty or single-element array

    let max = -Infinity, secondMax = -Infinity;

    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }

    return secondMax === -Infinity ? -Infinity : secondMax;
}