const { MaxBinaryHeap } = require('../../../data_structures/binary_heap');
const { swap } = require('../../../utils');

function heap(arr) {
    MaxBinaryHeap.buildHeap(arr);
    for (let i = arr.length - 1; i >= 0; i--) {
        swap(arr, 0, i);
        MaxBinaryHeap.downAdjust(arr, 0, i);
    }
    return arr;
}

module.exports = {
    heap
}