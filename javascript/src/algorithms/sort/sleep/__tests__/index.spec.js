const { sleep } = require('../index');
const { shuffle } = require('../../shuffle');

const arr1 = [];
const arr2 = [1];
const arr3 = [2, 1];
const arr4 = [3, 1, 2];

describe('sort/sleep', () => {
    test('sleep', () => {
        sleep(arr1, res => expect(res).toEqual([]));
        sleep(arr2, res => expect(res).toEqual([1]));
        sleep(arr3, res => expect(res).toEqual([1, 2]));
        sleep(arr4, res => expect(res).toEqual([1, 2, 3]));

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, () => Math.floor(Math.random() * 50));
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            sleep(shuffleTemp, res => {
                let isSorted = true;
                for (let i = 0, len = res.length; i < len - 1; i++)
                    if (res[i + 1] < res[i]) isSorted = false;
                expect(isSorted).toBe(true);
            });

        }

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, (_, index) => index + 1);
            const shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            sleep(shuffleTemp, res => expect(res).toEqual(temp));
        }
    });
});