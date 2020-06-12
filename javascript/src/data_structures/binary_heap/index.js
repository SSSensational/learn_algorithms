class MinBinaryHeap {
    constructor(arr) {
        if (!Array.isArray(arr)) throw new Error('Constructor param should be an array');
        this.arr = MinBinaryHeap.buildHeap(arr);
    }

    static buildHeap(arr = this.arr) {
        for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--) this.downAdjust(arr, i);
        return arr;
    }

    static upAdjust(arr = this.arr, childIndex = arr.length - 1) {
        let parentIndex = Math.floor((childIndex - 1) / 2);
        let temp = arr[childIndex];
        while (childIndex > 0 && temp < arr[parentIndex]) {
            arr[childIndex] = arr[parentIndex];
            childIndex = parentIndex;
            parentIndex = (childIndex - 1) / 2;
        }
        arr[childIndex] = temp;
        return arr;
    }

    static downAdjust(arr = this.arr, parentIndex = 0, length = arr.length) {
        if (length === 0) return arr;
        let temp = arr[parentIndex];
        let childIndex = parentIndex * 2 + 1;
        while (childIndex < length) {
            if (childIndex + 1 < length && arr[childIndex + 1] < arr[childIndex]) childIndex++;
            if (temp < arr[childIndex]) break;
            arr[parentIndex] = arr[childIndex];
            parentIndex = childIndex;
            childIndex = parentIndex * 2 + 1;
        }
        arr[parentIndex] = temp;
        return arr;
    }

    toArr() {
        return this.arr;
    }
}

class MaxBinaryHeap {
    constructor(arr) {
        if (!Array.isArray(arr)) throw new Error('Constructor param should be an array');
        this.arr = MaxBinaryHeap.buildHeap(arr);
    }

    static buildHeap(arr) {
        for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--) this.downAdjust(arr, i);
        return arr;
    }

    static upAdjust(arr = this.arr, childIndex = arr.length - 1) {
        let parentIndex = Math.floor((childIndex - 1) / 2);
        let temp = arr[childIndex];
        while (childIndex > 0 && temp > arr[parentIndex]) {
            arr[childIndex] = arr[parentIndex];
            childIndex = parentIndex;
            parentIndex = (childIndex - 1) / 2;
        }
        arr[childIndex] = temp;
        return arr;
    }

    static downAdjust(arr = this.arr, parentIndex = 0, length = arr.length) {
        if (length === 0) return arr;
        let temp = arr[parentIndex];
        let childIndex = parentIndex * 2 + 1;
        while (childIndex < length) {
            if (childIndex + 1 < length && arr[childIndex + 1] > arr[childIndex]) childIndex++;
            if (temp > arr[childIndex]) break;
            arr[parentIndex] = arr[childIndex];
            parentIndex = childIndex;
            childIndex = parentIndex * 2 + 1;
        }
        arr[parentIndex] = temp;
        return arr;
    }

    toArr() {
        return this.arr;
    }
}

module.exports = {
    MinBinaryHeap,
    MaxBinaryHeap
};