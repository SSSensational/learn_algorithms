const LinkedList = require('../doubly_linked_list');

class Queue {
    constructor(arr) {
        if (arr && !Array.isArray(arr)) throw new Error('Constructor param should be an array');
        this.queue = new LinkedList(arr);
    }

    enqueue(element) {
        this.queue.insert(element);
        return this;
    }

    dequeue() {
        return this.queue.size ? this.queue.delete(1).data : undefined;
    }

    clear() {
        this.queue.clear();
    }

    toArr() {
        return this.queue.toArr();
    }

    get size() {
        return this.queue.size;
    }
}

module.exports = Queue; 