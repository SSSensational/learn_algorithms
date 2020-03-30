function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function shuffleArr(arr) { 脑瘫版
//   arr.forEach((_, index) => {
//     if (index !== 0) {
//       const randomIndex = Math.floor(Math.random() * (index + 1));
//       swap(arr, index, randomIndex);
//     }
//   });
//   return arr;
// }

// function shuffleArr(arr) { 翻译脑瘫版
//     for(let i = 1, len = arr.length - 1; i <= len; i++) 
//         swap(arr, i, arr[getRandomIntInclusive(0, i)]);
// }

// function shuffleArr(arr) { 正确顺序版
//     for(let i = 0, len = arr.length - 1; i < len; i++) 
//         swap(arr, i, arr[getRandomIntInclusive(i, len)]);
//      return arr;
// }

// 经典逆序版
function shuffleArr(arr) {
    for(let i = arr.length - 1; i > 0; i--) swap(arr, i, getRandomIntInclusive(0, i));
    return arr;
}

function swap(arr, indexA, indexB) {
    [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}

module.exports = {
    shuffleArr,
    swap
}