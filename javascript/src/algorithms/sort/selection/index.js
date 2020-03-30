const { swap } = require('../../../utils');

function selection(arr) {
    for (let i = 0, len = arr.length, minIndex; i < len; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) if (arr[j] < arr[minIndex]) minIndex = j;
        swap(arr, i, minIndex);
    }
    return arr;
}

module.exports = {
    selection
}
