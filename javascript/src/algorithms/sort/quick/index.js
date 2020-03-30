const { swap } = require('../../../utils');

function partitionSingly(arr, startIndex, endIndex) {
    swap(arr, startIndex, Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex);
    let mark = startIndex;
    for (let i = startIndex + 1; i <= endIndex; i++) {
        if (arr[i] < arr[startIndex]) {
            mark++;
            swap(arr, mark, i);
        }
    }
    swap(arr, startIndex, mark);
    return mark;
}

function quick1 (arr, startIndex = 0, endIndex = arr.length - 1) {
    if (startIndex >= endIndex) return arr;
    const pivotIndex = partitionSingly(arr, startIndex, endIndex);
    quick1(arr, startIndex, pivotIndex - 1);
    quick1(arr, pivotIndex + 1, endIndex);
    return arr;
}

function partitionDoubly(arr, startIndex, endIndex) {
    swap(arr, startIndex, Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex);
    let left = startIndex;
    let right = endIndex;
    while (left !== right) {
        while(left < right && arr[right] > arr[startIndex]) right--;
        while(left < right && arr[left] <= arr[startIndex]) left++;
        swap(arr, left, right);
    }
    swap(arr, startIndex, left);
    return left;
}

function quick2 (arr, startIndex = 0, endIndex = arr.length - 1) {
    if (startIndex >= endIndex) return arr;
    const pivotIndex = partitionDoubly(arr, startIndex, endIndex);
    quick2(arr, startIndex, pivotIndex - 1);
    quick2(arr, pivotIndex + 1, endIndex);
    return arr;
}

function partitionThreely(arr, startIndex, endIndex) {
    swap(arr, startIndex, Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex);
    let left = startIndex + 1;
    let right = endIndex;
    let mark = startIndex + 1;
    while (left <= right) {
      if (arr[left] > arr[startIndex]) {
        swap(arr, right, left);
        right--;                                                                                                                                                                                                                                                                                                                                  
      } else if (arr[left] < arr[startIndex]) {
          if (mark !== left) swap(arr, left - mark, left);
          left++;
          mark++;
      } else left++;
    }
    swap(arr, startIndex, right);
    return [mark, right];
}

function quick3 (arr, startIndex = 0, endIndex = arr.length - 1) {
    if (startIndex >= endIndex) return arr;
    const [pivotLeft, pivotRight] = partitionThreely(arr, startIndex, endIndex);
    quick3(arr, startIndex, pivotLeft - 1);
    quick3(arr, pivotRight + 1, endIndex);
    return arr;
}


const quick4 = arr => arr.length < 1 ? arr : [
    ...quick1(arr.filter(x => x < arr[0])),
    ...arr.filter(x => x === arr[0]),
    ...quick1(arr.filter(x => x > arr[0]))
]

module.exports = {
    quick1,
    quick2,
    quick3,
    quick4
};