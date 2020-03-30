const { quick3 } = require('../quick');

function bucketSort(arr, bucketCount = arr.length) {
    if (arr.length < 2) return arr;
    let min = max = arr[0];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] > max) max = arr[i];
        else if (arr[i] < min) min = arr[i];
    }
    const buckets = Array.from({ length: bucketCount + 1 }, () => []); // 每个桶取[min + i * d, min + (i + 1) * d)区间，故最后一个桶需要额外+1的空间
    const d = (max - min) / bucketCount;
    arr.forEach(value => buckets[Math.floor((value - min) / d)].push(value));
    let index = 0;
    buckets.forEach(bucket => {
        quick3(bucket);
        bucket.forEach(value => arr[index++] = value);
    });
    return arr;
}

module.exports = {
    bucket: bucketSort,
}