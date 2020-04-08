const Stack = require('../index');

describe('stack_linked_list/', () => {
    test('init_with_empty', () => {
        const stack = new Stack();
        expect(stack.size).toBe(0);
        expect(stack.toArr()).toEqual([]);

        stack.push(1)
        expect(stack.size).toBe(1);
        expect(stack.toArr()).toEqual([1]);

        stack.push(2)
        expect(stack.size).toBe(2);
        expect(stack.toArr()).toEqual([1, 2]);

        stack.push(3)
        expect(stack.size).toBe(3);
        expect(stack.toArr()).toEqual([1, 2, 3]);

        let res = stack.pop();
        expect(res).toBe(3);
        expect(stack.size).toBe(2);
        expect(stack.toArr()).toEqual([1, 2]);

        stack.push(4)
        expect(stack.size).toBe(3);
        expect(stack.toArr()).toEqual([1, 2, 4]);

        res = stack.pop();
        expect(res).toBe(4);
        expect(stack.size).toBe(2);
        expect(stack.toArr()).toEqual([1, 2]);

        res = stack.pop();
        expect(res).toBe(2);
        expect(stack.size).toBe(1);
        expect(stack.toArr()).toEqual([1]);

        res = stack.pop();
        expect(res).toBe(1);
        expect(stack.size).toBe(0);
        expect(stack.toArr()).toEqual([]);

        res = stack.pop();
        expect(res).toBe(undefined);
        expect(stack.size).toBe(0);
        expect(stack.toArr()).toEqual([]);
    });

    test('init_with_arr', () => {
        const stack = new Stack([3, 1, 2]);
        expect(stack.size).toBe(3);
        expect(stack.toArr()).toEqual([3, 1, 2]);

        let res = stack.pop();
        expect(res).toBe(2);
        expect(stack.size).toBe(2);
        expect(stack.toArr()).toEqual([3, 1]);

        stack.push(5)
        expect(stack.size).toBe(3);
        expect(stack.toArr()).toEqual([3, 1, 5]);

        res = stack.pop();
        expect(res).toBe(5);
        expect(stack.size).toBe(2);
        expect(stack.toArr()).toEqual([3, 1]);

        stack.clear();
        expect(stack.size).toBe(0);
        expect(stack.toArr()).toEqual([]);
    });
});