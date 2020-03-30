const { swap, getRandomIntInclusive } = require('../../../utils');

// function shuffle(arr) { 脑瘫版
//   arr.forEach((_, index) => {
//     if (index !== 0) {
//       const randomIndex = Math.floor(Math.random() * (index + 1));
//       swap(arr, index, randomIndex);
//     }
//   });
//   return arr;
// }

// function shuffle(arr) { 翻译脑瘫版
//     for(let i = 1, len = arr.length - 1; i <= len; i++) 
//         swap(arr, i, arr[getRandomIntInclusive(0, i)]);
// }

// function shuffle(arr) { 正确顺序版
//     for(let i = 0, len = arr.length - 1; i < len; i++) 
//         swap(arr, i, arr[getRandomIntInclusive(i, len)]);
//      return arr;
// }

// 经典逆序版
function shuffle(arr) {
    for(let i = arr.length - 1; i > 0; i--) swap(arr, i, getRandomIntInclusive(0, i));
    return arr;
}

module.exports = {
    shuffle,
}