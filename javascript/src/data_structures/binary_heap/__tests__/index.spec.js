const { MinBinaryHeap, MaxBinaryHeap } = require('../index');
const { shuffle } = require('../../../algorithms/sort/shuffle');

describe('binary_heap/', () => {
    test('max_binary_heap', () => {
        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, () => Math.floor(Math.random() * 50));
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = new MaxBinaryHeap(shuffleTemp).toArr();
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; 2 * i + 1 < len; i++)
                if (shuffleTemp[2 * i + 1] > shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);
        }

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, (_, index) => index + 1);
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = new MaxBinaryHeap(shuffleTemp).toArr();
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; 2 * i + 1 < len; i++)
                if (shuffleTemp[2 * i + 1] > shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);        }
    });

    test('min_binary_heap', () => {
        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, () => Math.floor(Math.random() * 50));
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = new MinBinaryHeap(shuffleTemp).toArr();
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; 2 * i + 1 < len; i++)
                if (shuffleTemp[2 * i + 1] < shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);
        }

        for (let i = 0; i < 16; i++) {
            const temp = Array.from({ length: Math.floor(Math.random() * 1234 + 1) }, (_, index) => index + 1);
            let shuffleTemp = temp.slice();
            shuffle(shuffleTemp);
            shuffleTemp = new MinBinaryHeap(shuffleTemp).toArr();
            let isSorted = true;
            for (let i = 0, len = shuffleTemp.length; 2 * i + 1 < len; i++)
                if (shuffleTemp[2 * i + 1] < shuffleTemp[i]) isSorted = false;
            expect(isSorted).toBe(true);
        }
    });
});