class LinkedList {
    constructor(initData) {
        this.size = 0;
        this.tail = this.head = null;
        if (Array.isArray(initData)) {
            initData.forEach((nodeData, index) => {
                if (nodeData === null || nodeData === undefined) throw new Error(`Node data can not be null or undefined, node data index as ${index} is ${nodeData}`);
                this.insert(nodeData);
            });
        } else {
            const headNode = initData;
            this.size = headNode ? 1 : 0;
            this.tail = this.head = headNode ? new Node(headNode, this) : null;
        }
    }
    
    clear () {
        this.size = 0;
        this.tail = this.head = null;
    }

    insert(data, index = this.size + 1) {
        if (index < 1 || index > this.size + 1) throw new Error('Index out of list range');
        const insertNode = new Node(data, this);
        if (!this.size) this.tail = this.head = insertNode;
        else if (index === 1) {
            insertNode.next = this.head;
            this.head = insertNode;
        } else if (index === this.size + 1) {
            this.tail.next = insertNode
            this.tail = insertNode;
        } else {
            const preNode = this.find(index - 1);
            insertNode.next = preNode.next;
            preNode.next = insertNode;
        }
        this.size++;
        return insertNode;
    }

    find(search, returnPre = false) {
        if (typeof search !== 'number' && typeof search !== 'function') throw new Error('Get param require index number or search function');
        if (typeof search === 'number' && (search < 1 || search > this.size)) throw new Error('Get search index out of list range');
        if (search === this.size && !returnPre) return this.tail;
        else if (search === 1) return returnPre ? [this.head, null] : this.head;
        let target = this.head;
        let pre = null;
        for (let i = 1; i <= this.size; i++) {
            if ((typeof search === 'number' && i === search) || (typeof search === 'function' && search(target))) return returnPre ? [target, pre] : target;
            pre = target;
            target = target.next;
        }
        return returnPre ? [null, null] : null;
    }

    delete(search = this.size) {
        if (typeof search !== 'number' && typeof search !== 'function') throw new Error('Delete param require index number or search function');
        if (typeof search === 'number' && (search < 1 || search > this.size)) throw new Error('Delete search index out of list range');
        const [targetNode, preNode] = this.find(search, true);
        if (!targetNode) return null;
        if (preNode) preNode.next = targetNode.next;
        else this.head = targetNode.next;
        if (targetNode === this.tail) this.tail = preNode;
        this.size--;
        return targetNode;
    }

    toObj(translate) {
        if (typeof translate !== 'function') throw new Error('ToObj param require translate function');
        const objData = {};
        let temp = this.head;
        while (temp) {
            const translateResult = translate(temp);
            if (!Array.isArray(translateResult) || translateResult.length !== 2 || typeof translateResult[0] !== 'string') throw new Error('ToObjData translate function return format error');
            const [key, value] = translateResult;
            objData[key] = value;
            temp = temp.next;
        }
        return objData;
    }

    toArr() {
        const resArr = [];
        let temp = this.head;
        while (temp) {
            resArr.push(temp.data);
            temp = temp.next;
        }
        return resArr;
    }
}

class Node {
    constructor(data, list) {
        this.data = data;
        this.next = null;
        Object.defineProperty(this, 'list', { value: list });
    }

    insert(data) {
        const newNode = new Node(data, this.list);
        if (this.list.tail === this) this.list.tail = newNode;
        newNode.next = this.next;
        this.next = newNode;
        this.list.size++;
        return newNode;
    }
}

module.exports = LinkedList;
