const MinBinaryHeap = require('./min_binary_heap');

function swap(arr, indexA, indexB) {
    [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}

class MinPriorityQueue {
    constructor(arr) {
        if (arr && !Array.isArray(arr)) throw new Error('Constructor param should be an array');
        this.queue = arr || [];
        MinBinaryHeap.buildHeap(this.queue);
    }

    
    enqueue(element) {
        this.queue.push(element);
        MinBinaryHeap.upAdjust(this.queue);
    }

    dequeue() {
        if (this.size <= 1) return this.queue.pop();
        swap(this.queue, 0, this.queue.length - 1);
        const returnEle = this.queue.pop();
        MinBinaryHeap.downAdjust(this.queue);
        return returnEle;
    }
        
    update(index, value) {
        if (arguments.length === 0) return MinBinaryHeap.buildHeap(this.queue);
        if (value < this.queue[index]) {
            this.queue[index] = value;
            MinBinaryHeap.upAdjust(this.queue, index);
        } else if (value > this.queue[index]) {
            this.queue[index] = value;
            MinBinaryHeap.downAdjust(this.queue, index);
        }
    }

    clear() {
        this.queue = [];
    }

    toArr() {
        return this.queue;
    }

    get size() {
        return this.queue.length;
    }
}

export default MinPriorityQueue;