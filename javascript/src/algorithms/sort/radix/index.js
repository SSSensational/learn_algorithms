function radix(arr) {
    if (arr.length < 2) return arr;
    const maxDigit = Math.max.apply(this, arr);
    const buckets = Array.from({ length: 10 }, () => []);
    for (let digit = 1, nextDigit = digit * 10; digit <= maxDigit; digit = nextDigit, nextDigit *= 10) {
        arr.forEach(value => {
            let target = ~~(value % nextDigit / digit);
            buckets[target].push(value);
        });
        let i = 0;
        buckets.forEach(bucket => { while (bucket.length) arr[i++] = bucket.shift() });
    }
    return arr;
}

module.exports = {
    radix,
}