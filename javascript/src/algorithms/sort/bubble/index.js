const { returnNewArr, swap } = require('../../../utils');

// 时间复杂度O(n²)
function bubble1 (arr) {
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
        }
    }
    return arr;
}

function bubble2 (arr) {
    let isSorted;
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        isSorted = true;
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSorted = false;
            }
        }
        if (isSorted) break;
    }
    return arr;
}

function bubble3 (arr) {
    let lastExchangeIndex = 0;
    let sortBorder = arr.length - 1;
    let isSorted;
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        isSorted = true;
        for (let j = 0; j < sortBorder; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSorted = false;
                lastExchangeIndex = j;
            }
        }
        if (isSorted) break;
        sortBorder = lastExchangeIndex;
    }
    return arr;
}

// Cocktail sort
function bubble4 (arr) {
    let leftLastExchangeIndex = 0;
    let sortBorderLeft = 0;
    let rightLastExchangeIndex = 0;
    let sortBordeRight = arr.length - 1;
    let isSorted;
    for (let i = 0, len = arr.length / 2; i < len; i++) {
        isSorted = true;
        for (let j = sortBorderLeft; j < sortBordeRight; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                isSorted = false;
                rightLastExchangeIndex = j;
            }
        }
        if (isSorted) break;
        sortBordeRight = rightLastExchangeIndex;

        isSorted = true;
        for (let j = sortBordeRight; j > sortBorderLeft; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);
                isSorted = false;
                leftLastExchangeIndex = j;
            }
        }
        if (isSorted) break;
        sortBorderLeft = leftLastExchangeIndex;
    }
    return arr;
}

module.exports = {
    bubble1,
    bubble2,
    bubble3,
    bubble4,
};