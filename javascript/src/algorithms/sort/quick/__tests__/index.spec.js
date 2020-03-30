const { quick1, quick2, quick3, quick4 } = require('../index');
const { shuffleArr } = require('../../../../utils');

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
const arr2 = [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5 ,4 ,3, 2, 1 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
const arr3 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 1];
const arr4 = [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const arr5 = [];


describe('sort/quick', () => {
    test('quick1', () => {
        expect(quick1(arr1).slice()).toEqual(arr1);
        expect(quick1(arr2).slice()).toEqual(arr1);
        expect(quick1(arr3).slice()).toEqual(arr1);
        expect(quick1(arr4).slice()).toEqual(arr1);
        expect(quick1(arr5).slice()).toEqual([]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 2000 + 1) }, (_, i) => i + 1);
            const shuffleTemp = temp.slice();
            shuffleArr(shuffleTemp);
            expect(quick1(shuffleTemp)).toEqual(temp);
        }
    });

    test('quick2', () => {
        expect(quick2(arr1.slice())).toEqual(arr1);
        expect(quick2(arr2.slice())).toEqual(arr1);
        expect(quick2(arr3.slice())).toEqual(arr1);
        expect(quick2(arr4.slice())).toEqual(arr1);
        expect(quick2(arr5.slice())).toEqual([]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 2000 + 1) }, (_, i) => i + 1);
            const shuffleTemp = temp.slice();
            shuffleArr(shuffleTemp);
            expect(quick2(shuffleTemp)).toEqual(temp);
        }
    });

    test('quick3', () => {
        expect(quick3(arr1.slice())).toEqual(arr1);
        expect(quick3(arr2.slice())).toEqual(arr1);
        expect(quick3(arr3.slice())).toEqual(arr1);
        expect(quick3(arr4.slice())).toEqual(arr1);
        expect(quick3(arr5.slice())).toEqual([]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 2000 + 1) }, (_, i) => i + 1);
            const shuffleTemp = temp.slice();
            shuffleArr(shuffleTemp);
            expect(quick3(shuffleTemp)).toEqual(temp);
        }
    });

    test('quick4', () => {
        expect(quick4(arr1.slice())).toEqual(arr1);
        expect(quick4(arr2.slice())).toEqual(arr1);
        expect(quick4(arr3.slice())).toEqual(arr1);
        expect(quick4(arr4.slice())).toEqual(arr1);
        expect(quick4(arr5.slice())).toEqual([]);

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 2000 + 1) }, (_, i) => i + 1);
            const shuffleTemp = temp.slice();
            shuffleArr(shuffleTemp);
            expect(quick4(shuffleTemp)).toEqual(temp);
        }
    });
});