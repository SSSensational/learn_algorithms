function shell1(arr) {
    for (let len = arr.length, gap = len; gap > 1; ) {
        gap = Math.floor(gap / 2);
        for (let i = 0; i < gap; i++) {
            for (let j = i + gap, k; j < len; j += gap) {
                const sortEle = arr[j];
                for (k = j - gap; k >= 0 && arr[k] > sortEle; k -= gap) arr[k + gap] = arr[k];
                arr[k + gap] = sortEle;
            }
        }
    }
    return arr;
}

const sedgewick = []
for (let i = 0; i < 14; i++) {
    sedgewick.push(9 * Math.pow(4, i) - 9 * Math.pow(2, i) + 1);
    sedgewick.push(Math.pow(4, i + 2) - 3 * Math.pow(2, i + 2) + 1);
}

function shell2(arr) {
    if (arr.length === 1) return arr;
    let len = arr.length;
    let gapIndex = sedgewick.findIndex(g => g >= arr.length);
    while (gapIndex > 0) {
        let gap = sedgewick[--gapIndex];
        for (let i = 0; i < gap; i++) {
            for (let j = i + gap, k; j < len; j += gap) {
                const sortEle = arr[j];
                for (k = j - gap; k >= 0 && arr[k] > sortEle; k -= gap) arr[k + gap] = arr[k];
                arr[k + gap] = sortEle;
            }
        }
    }
    return arr;
}

module.exports = {
    shell1,
    shell2,
}