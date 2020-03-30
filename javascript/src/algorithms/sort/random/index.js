const { shuffle } = require('../shuffle');

function random(arr) {
    if (arr.length <= 1 || (arr.length === 2 && arr[0] <= arr[1])) return arr;
    let isSorted = false;
    while (!isSorted) {
        for (let i = 0, len = arr.length; i < len; i++)
            if (arr[i + 1] < arr[i]) break;
            else if (i === arr.length - 1) return arr;;
        shuffle(arr);
    }
}

module.exports = {
    random
}
