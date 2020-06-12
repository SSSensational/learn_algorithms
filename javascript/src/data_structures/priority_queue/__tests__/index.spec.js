const { MinPriorityQueue, MaxPriorityQueue } = require('../index');

describe('priority_queue/', () => {
    test('max_priority_queue', () => {
        const queue = new MaxPriorityQueue();
        expect(queue.size).toBe(0);
        expect(queue.toArr()).toEqual([]);

        queue.enqueue(1)
        expect(queue.size).toBe(1);
        expect(queue.toArr()).toEqual([1]);

        queue.enqueue(2)
        expect(queue.size).toBe(2);
        expect(queue.toArr()).toEqual([2, 1]);

        queue.enqueue(3)
        expect(queue.size).toBe(3);
        expect(queue.toArr()).toEqual([3, 1, 2]);

        let res = queue.dequeue();
        expect(res).toBe(3);
        expect(queue.size).toBe(2);
        expect(queue.toArr()).toEqual([2, 1]);

        queue.enqueue(4)
        expect(queue.size).toBe(3);
        expect(queue.toArr()).toEqual([4, 1, 2]);

        res = queue.dequeue();
        expect(res).toBe(4);
        expect(queue.size).toBe(2);
        expect(queue.toArr()).toEqual([2, 1]);

        res = queue.dequeue();
        expect(res).toBe(2);
        expect(queue.size).toBe(1);
        expect(queue.toArr()).toEqual([1]);

        res = queue.dequeue();
        expect(res).toBe(1);
        expect(queue.size).toBe(0);
        expect(queue.toArr()).toEqual([]);

        res = queue.dequeue();
        expect(res).toBe(undefined);
        expect(queue.size).toBe(0);
        expect(queue.toArr()).toEqual([]);
    });

    test('min_priority_queue', () => {
        const queue = new MinPriorityQueue();
        expect(queue.size).toBe(0);
        expect(queue.toArr()).toEqual([]);

        queue.enqueue(3)
        expect(queue.size).toBe(1);
        expect(queue.toArr()).toEqual([3]);

        queue.enqueue(2)
        expect(queue.size).toBe(2);
        expect(queue.toArr()).toEqual([2, 3]);

        queue.enqueue(1)
        expect(queue.size).toBe(3);
        expect(queue.toArr()).toEqual([1, 3, 2]);

        let res = queue.dequeue();
        expect(res).toBe(1);
        expect(queue.size).toBe(2);
        expect(queue.toArr()).toEqual([2, 3]);

        queue.enqueue(4)
        expect(queue.size).toBe(3);
        expect(queue.toArr()).toEqual([2, 3, 4]);

        res = queue.dequeue();
        expect(res).toBe(2);
        expect(queue.size).toBe(2);
        expect(queue.toArr()).toEqual([3, 4]);

        res = queue.dequeue();
        expect(res).toBe(3);
        expect(queue.size).toBe(1);
        expect(queue.toArr()).toEqual([4]);

        res = queue.dequeue();
        expect(res).toBe(4);
        expect(queue.size).toBe(0);
        expect(queue.toArr()).toEqual([]);

        res = queue.dequeue();
        expect(res).toBe(undefined);
        expect(queue.size).toBe(0);
        expect(queue.toArr()).toEqual([]);
    });
});