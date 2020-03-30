function insertion1(arr) {
    for (let i = 1, len = arr.length, j; i < len; i++) {
        const sortEle = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > sortEle; j--) arr[j + 1] = arr[j];
        arr[j + 1] = sortEle;
    }
    return arr;
}

function binarySearch(arr, left, right, value) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > value) right = mid - 1;
        else left = mid + 1;
    }
    return left;
}

function insertion2(arr) {
    for (let i = 1, len = arr.length, j; i < len; i++) {
        const sortEle = arr[i];
        const insertIndex = binarySearch(arr, 0, i - 1, sortEle);
        for (j = i - 1; j >= insertIndex; j--) arr[j + 1] = arr[j];
        arr[insertIndex] = sortEle;
    }
    return arr;
}

module.exports = {
    insertion1,
    insertion2,
};