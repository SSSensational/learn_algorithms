const { bubble1, bubble2, bubble3, bubble4 } = require('../index');
const { shuffleArr } = require('../../../../utils');

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
const arr2 = [16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5 ,4 ,3, 2, 1 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
const arr3 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 1];
const arr4 = [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const arr5 = [];

describe('sort/bubble', () => {
    test('bubble1', () => {
        expect(bubble1(arr1.slice())).toEqual(arr1);
        expect(bubble1(arr2.slice())).toEqual(arr1);
        expect(bubble1(arr3.slice())).toEqual(arr1);
        expect(bubble1(arr4.slice())).toEqual(arr1);
        expect(bubble1(arr5.slice())).toEqual([]);
        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 2000 + 1) }, (_, i) => i + 1);
            const shuffleTemp = temp.slice();
            shuffleArr(shuffleTemp);
            expect(bubble1(shuffleTemp)).toEqual(temp);
        }
    });

    test('bubble2', () => {
        expect(bubble2(arr1.slice())).toEqual(arr1);
        expect(bubble2(arr2.slice())).toEqual(arr1);
        expect(bubble2(arr3.slice())).toEqual(arr1);
        expect(bubble2(arr4.slice())).toEqual(arr1);
        expect(bubble2(arr5.slice())).toEqual([]);
        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 2000 + 1) }, (_, i) => i + 1);
            const shuffleTemp = temp.slice();
            shuffleArr(shuffleTemp);
            expect(bubble2(shuffleTemp)).toEqual(temp);
        }
    });

    test('bubble3', () => {
        expect(bubble3(arr1.slice())).toEqual(arr1);
        expect(bubble3(arr2.slice())).toEqual(arr1);
        expect(bubble3(arr3.slice())).toEqual(arr1);
        expect(bubble3(arr4.slice())).toEqual(arr1);
        expect(bubble3(arr5.slice())).toEqual([]);
        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 2000 + 1) }, (_, i) => i + 1);
            const shuffleTemp = temp.slice();
            shuffleArr(shuffleTemp);
            expect(bubble3(shuffleTemp)).toEqual(temp);
        }
    });

    test('bubble4', () => {
        expect(bubble4(arr1.slice())).toEqual(arr1);
        expect(bubble4(arr2.slice())).toEqual(arr1);
        expect(bubble4(arr3.slice())).toEqual(arr1);
        expect(bubble4(arr4.slice())).toEqual(arr1);
        expect(bubble4(arr5.slice())).toEqual([]);
        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 2000 + 1) }, (_, i) => i + 1);
            const shuffleTemp = temp.slice();
            shuffleArr(shuffleTemp);
            expect(bubble4(shuffleTemp)).toEqual(temp);
        }
    });
});