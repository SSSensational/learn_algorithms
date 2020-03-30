const { random } = require('../index');
const { shuffle } = require('../../shuffle');

const arr1 = [];
const arr2 = [1];
const arr3 = [2, 1];
const arr4 = [3, 1, 2];

describe('sort/random', () => {
    test('random', () => {
        expect(random(arr1.slice())).toEqual([]);
        expect(random(arr2.slice())).toEqual([1]);
        expect(random(arr3.slice())).toEqual([1, 2]);
        expect(random(arr4.slice())).toEqual([1, 2, 3]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 6 + 1) }, () => Math.floor(Math.random() * 3));
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = random(shuffleTemp);
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; i < len - 1; i++)
                if (shuffleTemp[i + 1] < shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);
        }

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 6 + 1) }, (_, index) => index + 1);
            const shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            expect(random(shuffleTemp)).toEqual(temp);
        }
    });
});