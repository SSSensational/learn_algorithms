// class Queue {
//     constructor(arr) {
//         if (arr && !Array.isArray(arr)) throw new Error('Constructor param should be an array');
//         this.input = arr || [];
//         this.output = [];
//     }

//     enqueue(element) {
//         this.input.push(element);
//         return this;
//     }

//     dequeue() {
//         if (!this.output.length) {
//             while (this.input.length) {
//                 this.output.push(this.input.pop());
//             }
//         } 
//         return this.output.pop();
//     }

//     clear() {
//         this.input = [];
//         this.output = [];
//     }

//     toArr() {
//         return this.output.slice().reverse().concat(this.input);
//     }

//     get size() {
//         return this.input.length + this.output.length;
//     }
// }

class Queue {
    constructor(arr) {
        if (arr && !Array.isArray(arr)) throw new Error('Constructor param should be an array');
        this.queue = arr || [];
        if (arr && arr.length) this.resize();
        this.head = 0;
        this.tail = arr ? arr.length : 0;
    }

    enqueue(element) {
        if (this.size + 1 >= this.queue.length) {
            this.resize();
            if (this.head > this.tail) this.rebuild();
        }
        this.queue[this.tail] = element;
        this.tail = (this.tail + 1) % this.queue.length;
        return this;
    }

    dequeue() {
        if (this.head === this.tail) return undefined;
        const target = this.queue[this.head];
        this.head = (this.head + 1) % this.queue.length;
        return target;
    }
    
    resize() {
        this.queue = this.queue.concat(Array.from({ length: this.queue.length || 2 }, () => null));
        return this;
    }

    rebuild() {
        const len = this.queue.length / 2;
        for (let i = this.head; i < len; i++) 
            this.queue[i + len] = this.queue[i];
        this.head = this.head + len;
        return this;
    }

    clear() {
        this.queue = [];
        this.head = this.tail = 0;
    }

    toArr() {
        const res = [];
        if (this.size === 0) return res;
        let head = this.head;
        while ((head + 1) % this.queue.length !== this.tail) {
            res.push(this.queue[head]);
            head = (head + 1) % this.queue.length;
        }
        res.push(this.queue[head]);
        return res;
    }

    get size() {
        if (this.tail >= this.head) return this.tail - this.head; 
        return this.tail + this.queue.length - this.head;
    }
}

module.exports = Queue; 