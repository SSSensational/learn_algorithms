class Stack {
    constructor(arr) {
        if (arr && !Array.isArray(arr)) throw new Error('Constructor param should be an array');
        this.stack = arr || [];
    }

    push(element) {
        this.stack.push(element);
        return this;
    }

    pop() {
        return this.stack.pop();
    }

    clear() {
        this.stack = [];
    }

    toArr() {
        return this.stack;
    }

    get size() {
        return this.stack.length;
    }
}

module.exports = Stack; 