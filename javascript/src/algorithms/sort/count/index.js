function count1(arr) {
    const max = Math.max.apply(this, arr);
    const countArr = Array.from({ length: max + 1 }, () => 0);
    arr.forEach(value => countArr[value]++);
    const resArr = [];
    countArr.forEach((value, index) => resArr.push(...Array.from({ length: value }, () => index)));
    return resArr;
}

function count2(arr) {
    let min = max = arr[0];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] > max) max = arr[i];
        else if (arr[i] < min) min = arr[i];
    }
    const countArr = Array.from({ length: max - min + 1 }, () => 0);
    arr.forEach(value => countArr[value - min]++);
    const resArr = [];
    countArr.forEach((value, index) => resArr.push(...Array.from({ length: value }, () => index + min)));
    return resArr;
}

// 正常来讲，如count1、2，countArr里存的是整数出现的次数，如果数据是引用类型，就没法输出
// 所以count3将countArr从计数变成了原数据排序后index的映射，故再按序遍历一次原数组就可以按序输出
// 但是其实js里可以很方便的在count1、2中直接在countArr里扔引用类型的数组，只要扔的时候是顺序的，输出自然也是顺序的
function count3(arr) {
    let min = max = arr[0];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] > max) max = arr[i];
        else if (arr[i] < min) min = arr[i];
    }
    const countArr = Array.from({ length: max - min + 1 }, () => 0);
    arr.forEach(value => countArr[value - min]++);
    for (let i = 1, len = countArr.length; i < len; i++) countArr[i] = countArr[i] + countArr[i - 1];
    const resArr = [];
    for (let i = arr.length - 1; i >= 0; i--) resArr[countArr[arr[i] - min]-- - 1] = arr[i];
    return resArr;
}

module.exports = {
    count1,
    count2,
    count3
}