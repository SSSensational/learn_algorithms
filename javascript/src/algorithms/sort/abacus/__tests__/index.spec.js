const { abacus } = require('../index');
const { shuffle } = require('../../shuffle');

const arr1 = [];
const arr2 = [1];
const arr3 = [2, 1];
const arr4 = [3, 1, 2];


describe('sort/abacus', () => {
    test('abacus', () => {
        expect(abacus(arr1.slice())).toEqual([]);
        expect(abacus(arr2.slice())).toEqual([1]);
        expect(abacus(arr3.slice())).toEqual([1, 2]);
        expect(abacus(arr4.slice())).toEqual([1, 2, 3]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, () => Math.floor(Math.random() * 50));
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = abacus(shuffleTemp);
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; i < len - 1; i++)
                if (shuffleTemp[i + 1] < shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);
        }

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 233 + 1) }, (_, index) => index + 1);
            const shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            expect(abacus(shuffleTemp)).toEqual(temp);
        }
    });
});