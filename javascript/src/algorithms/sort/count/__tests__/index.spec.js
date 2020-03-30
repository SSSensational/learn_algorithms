const { count1, count2, count3 } = require('../index');
const { shuffle } = require('../../shuffle');

const arr1 = [];
const arr2 = [1];
const arr3 = [2, 1];
const arr4 = [3, 1, 2];

describe('sort/count', () => {
    test('count1', () => {
        expect(count1(arr1.slice())).toEqual([]);
        expect(count1(arr2.slice())).toEqual([1]);
        expect(count1(arr3.slice())).toEqual([1, 2]);
        expect(count1(arr4.slice())).toEqual([1, 2, 3]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, () => Math.floor(Math.random() * 50));
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = count1(shuffleTemp);
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; i < len - 1; i++)
                if (shuffleTemp[i + 1] < shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);
        }

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, (_, index) => index + 1);
            const shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            expect(count1(shuffleTemp)).toEqual(temp);
        }
    });

    test('count2', () => {
        expect(count2(arr1.slice())).toEqual([]);
        expect(count2(arr2.slice())).toEqual([1]);
        expect(count2(arr3.slice())).toEqual([1, 2]);
        expect(count2(arr4.slice())).toEqual([1, 2, 3]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, () => Math.floor(Math.random() * 50));
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = count2(shuffleTemp);
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; i < len - 1; i++)
                if (shuffleTemp[i + 1] < shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);
        }

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, (_, index) => index + 1);
            const shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            expect(count2(shuffleTemp)).toEqual(temp);
        }
    });

    test('count3', () => {
        expect(count3(arr1.slice())).toEqual([]);
        expect(count3(arr2.slice())).toEqual([1]);
        expect(count3(arr3.slice())).toEqual([1, 2]);
        expect(count3(arr4.slice())).toEqual([1, 2, 3]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, () => Math.floor(Math.random() * 50));
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = count3(shuffleTemp);
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; i < len - 1; i++)
                if (shuffleTemp[i + 1] < shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);
        }

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, (_, index) => index + 1);
            const shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            expect(count3(shuffleTemp)).toEqual(temp);
        }
    });
});