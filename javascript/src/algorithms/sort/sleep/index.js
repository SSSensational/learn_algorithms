function sleep(arr, callback) {
    if (!callback || typeof callback !== 'function') throw new Error('Sleep sort need callback function as second param');
    const resultArr = [];
    let len = arr.length;
    var endLen = 0;
    for (let i = 0; i < len; i++)
        setTimeout(() => {
            resultArr.push(arr[i]);
            if (++endLen === len) callback(resultArr);
        }, arr[i] + 4);
}

module.exports = {
    sleep
}
