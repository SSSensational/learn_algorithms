const LinkedList = require('../index');

function translate(node) {
    return [node.data, node.data]
}

describe('single_linked_list/', () => {
    test('init_with_empty', () => {
        const list = new LinkedList();
        expect(list.size).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });

    test('init_with_node', () => {
        const nodeData = { id: 'init' };
        const list = new LinkedList(nodeData);
        expect(list.size).toBe(1);
        expect(list.head).not.toBe(null);
        expect(list.tail).not.toBe(null);
        expect(list.head.data).toEqual(nodeData);
        expect(list.tail.data).toEqual(nodeData);
    });

    const list = new LinkedList();
    test('insert', () => {
        list.insert('a');
        list.insert('b');
        list.find(node => node.data === 'b').insert('c');
        list.insert('d', 4);
        list.insert('e', 1);
        list.find(2).insert('f');
        expect(list.size).toBe(6);
        expect(list.head.data).toBe('e');
        expect(list.head.next.data).toBe('a');
        expect(list.head.next.next.data).toBe('f');
        expect(list.head.next.next.next.data).toBe('b');
        expect(list.head.next.next.next.next.data).toBe('c');
        expect(list.head.next.next.next.next.next.data).toBe('d');
        expect(list.head.next.next.next.next.next).toBe(list.tail);
        expect(list.head.next.next.next.next.next.next).toBe(null);
    });

    test('delete', () => {
        list.delete(node => node.data === 'a');
        expect(list.size).toBe(5);
        expect(list.head.next.data).toBe('f');

        list.delete(list.size);
        expect(list.size).toBe(4);
        expect(list.tail.data).toBe('c');

        list.delete(2);
        expect(list.size).toBe(3);
        expect(list.head.next.data).toBe('b');
        list.delete(1);
        expect(list.size).toBe(2);
        expect(list.head.data).toBe('b');
        expect(list.head.next.data).toBe('c');

        list.delete(node => node.data === 'b');
        expect(list.size).toBe(1);
        expect(list.head.data).toBe('c');
        expect(list.tail.data).toBe('c');
        expect(list.head.next).toBe(null);

        list.delete(1);
        expect(list.size).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });
});