const { quick1, quick2, quick3, quick4, quick5 } = require('../index');
const { shuffle } = require('../../shuffle/index');

const arr1 = [];
const arr2 = [1];
const arr3 = [2, 1];
const arr4 = [3, 1, 2];

describe('sort/quick', () => {
    test('quick1', () => {
        expect(quick1(arr1.slice())).toEqual([]);
        expect(quick1(arr2.slice())).toEqual([1]);
        expect(quick1(arr3.slice())).toEqual([1, 2]);
        expect(quick1(arr4.slice())).toEqual([1, 2, 3]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, () => Math.floor(Math.random() * 50));
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = quick1(shuffleTemp);
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; i < len - 1; i++)
                if (shuffleTemp[i + 1] < shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);
        }

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, (_, index) => index + 1);
            const shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            expect(quick1(shuffleTemp)).toEqual(temp);
        }
    });

    test('quick2', () => {
        expect(quick2(arr1.slice())).toEqual([]);
        expect(quick2(arr2.slice())).toEqual([1]);
        expect(quick2(arr3.slice())).toEqual([1, 2]);
        expect(quick2(arr4.slice())).toEqual([1, 2, 3]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, () => Math.floor(Math.random() * 50));
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = quick2(shuffleTemp);
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; i < len - 1; i++)
                if (shuffleTemp[i + 1] < shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);
        }

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, (_, index) => index + 1);
            const shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            expect(quick2(shuffleTemp)).toEqual(temp);
        }
    });

    test('quick3', () => {
        expect(quick3(arr1.slice())).toEqual([]);
        expect(quick3(arr2.slice())).toEqual([1]);
        expect(quick3(arr3.slice())).toEqual([1, 2]);
        expect(quick3(arr4.slice())).toEqual([1, 2, 3]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, () => Math.floor(Math.random() * 50));
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = quick3(shuffleTemp);
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; i < len - 1; i++)
                if (shuffleTemp[i + 1] < shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);
        }

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, (_, index) => index + 1);
            const shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            expect(quick3(shuffleTemp)).toEqual(temp);
        }
    });

    test('quick4', () => {
        expect(quick4(arr1.slice())).toEqual([]);
        expect(quick4(arr2.slice())).toEqual([1]);
        expect(quick4(arr3.slice())).toEqual([1, 2]);
        expect(quick4(arr4.slice())).toEqual([1, 2, 3]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, () => Math.floor(Math.random() * 50));
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = quick4(shuffleTemp);
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; i < len - 1; i++)
                if (shuffleTemp[i + 1] < shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);
        }

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, (_, index) => index + 1);
            const shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            expect(quick4(shuffleTemp)).toEqual(temp);
        }
    });

    test('quick5', () => {
        expect(quick5(arr1.slice())).toEqual([]);
        expect(quick5(arr2.slice())).toEqual([1]);
        expect(quick5(arr3.slice())).toEqual([1, 2]);
        expect(quick5(arr4.slice())).toEqual([1, 2, 3]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, () => Math.floor(Math.random() * 50));
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = quick5(shuffleTemp);
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; i < len - 1; i++)
                if (shuffleTemp[i + 1] < shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);
        }

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, (_, index) => index + 1);
            const shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            expect(quick5(shuffleTemp)).toEqual(temp);
        }
    });
});