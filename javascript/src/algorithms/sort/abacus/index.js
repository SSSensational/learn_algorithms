function abacus(arr) {
    const maxEle = Math.max.apply(null, arr);
    const abacus = arr.map(ele => [...Array.from({ length: ele }, () => 1), ...Array.from({ length: maxEle - ele }, () => 0)]);
    for (let i = 0; i < maxEle; i++) {
        for (let j = 0, len = arr.length, sortedBorder = 0; j < len; j++) {
            if (abacus[j][i] === 0) {
                if (sortedBorder !== j) {
                    abacus[j][i] = 1;
                    abacus[sortedBorder][i] = 0;
                };
                sortedBorder++;
            }
        }
    }
    return abacus.map(res => res.filter(ele => ele === 1).length);
}

module.exports = {
    abacus
}
