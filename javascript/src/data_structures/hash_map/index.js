const LinkedList = require('../singly_linked_list');

const LoadFactor = 0.75;

class HashMap {
    constructor() {
        this.objKeys = [];
        this.array = Array.from({ length: 4 }, () => null);
        this.size = 0;
    }

    set(key, value) {
        const index = this.getIndex(key);
        if (this.array[index] === null) {
            this.array[index] = new LinkedList({ key, value });
            this.size++;
        }
        else {
            const old = this.array[index].find(node => node.data.key === key);
            if (old) old.data.value = value;
            else {
                this.array[index].insert({ key, value });
                this.size++;
            }
        };
        if (this.size >= this.array.length * LoadFactor) this.resize();
    }

    get(key) {
        const index = this.getIndex(key);
        const res = this.array[index] ? this.array[index].find(node => node.data.key === key) : undefined;
        return res ? res.data.value : undefined;
    }

    delete(key) {
        const index = this.getIndex(key);
        if (!this.array[index]) return undefined;
        const res = this.array[index].delete(node => node.data.key === key);
        return res ? res.data.value : undefined;
    }

    clear() {
        this.objKeys = [];
        this.array = Array.from({ length: 4 }, () => null);
        this.size = 0;
    }

    resize() {
        this.size = 0;
        const oldArr = this.array;
        this.array = Array.from({ length: this.array.length * 2 }, () => null);
        for (let i = 0, len = oldArr.length; i < len; i++) {
            if (oldArr[i]) {
                let temp = oldArr[i].head;
                while (temp) {
                    this.set(temp.data.key, temp.data.value);
                    temp = temp.next;
                }
            }
        }
    }

    getIndex (key) {
        let objKey =  null;
        if (key instanceof Object) {
            objKey = this.objKeys.findIndex(obj => obj === key);
            if (objKey === -1) {
                this.objKeys.push(key);
                objKey = this.objKeys.length - 1;
            }
        }
        return HashMap.getHashCode(key, objKey) % this.array.length;
    }

    static getHashCode(key, objKey) {
        let hashCode = 0;
        const stringKey = String(objKey || key) + typeof key;
        for (let index = 0; index < stringKey.length; index++) {
          const charCode = stringKey.charCodeAt(index);
          hashCode += charCode << (index * 8);
        }
        return hashCode;
    }
}

module.exports = HashMap;