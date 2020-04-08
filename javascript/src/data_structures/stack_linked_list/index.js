const LinkedList = require('../doubly_linked_list');

class Stack {
    constructor(arr) {
        if (arr && !Array.isArray(arr)) throw new Error('Constructor param should be an array');
        this.stack = new LinkedList(arr);
    }

    push(element) {
        this.stack.insert(element);
        return this;
    }

    pop() {
        return this.stack.size ? this.stack.delete().data : undefined;
    }

    clear() {
        this.stack.clear();
    }
    
    toArr() {
        return this.stack.toArr();
    }

    get size() {
        return this.stack.size;
    }

}

module.exports = Stack; 