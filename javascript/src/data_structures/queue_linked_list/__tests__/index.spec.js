const Queue = require('../index');

describe('queue_linked_list/', () => {
    test('init_with_empty', () => {
        const queue = new Queue();
        expect(queue.size).toBe(0);
        expect(queue.toArr()).toEqual([]);

        queue.enqueue(1)
        expect(queue.size).toBe(1);
        expect(queue.toArr()).toEqual([1]);

        queue.enqueue(2)
        expect(queue.size).toBe(2);
        expect(queue.toArr()).toEqual([1, 2]);

        queue.enqueue(3)
        expect(queue.size).toBe(3);
        expect(queue.toArr()).toEqual([1, 2, 3]);

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

    test('init_with_arr', () => {
        const queue = new Queue([3, 1, 2]);
        expect(queue.size).toBe(3);
        expect(queue.toArr()).toEqual([3, 1, 2]);

        let res = queue.dequeue();
        expect(res).toBe(3);
        expect(queue.size).toBe(2);
        expect(queue.toArr()).toEqual([1, 2]);

        queue.enqueue(5)
        expect(queue.size).toBe(3);
        expect(queue.toArr()).toEqual([1, 2, 5]);

        res = queue.dequeue();
        expect(res).toBe(1);
        expect(queue.size).toBe(2);
        expect(queue.toArr()).toEqual([2, 5]);

        queue.clear();
        expect(queue.size).toBe(0);
        expect(queue.toArr()).toEqual([]);
    });
});