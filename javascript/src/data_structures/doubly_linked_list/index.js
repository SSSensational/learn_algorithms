class LinkedList {
    constructor(headNode) {
        this.size = headNode ? 1 : 0;
        this.tail = this.head = headNode ? new Node(headNode, this) : null;
    }
    
    insert(data, index = this.size + 1) {
        if (index < 1 || index > this.size + 1) throw new Error('Index out of list range');
        const insertNode = new Node(data, this);
        if (!this.size) this.tail = this.head = insertNode;
        else if (index === 1) {
            insertNode.next = this.head;
            this.head.pre = insertNode;
            this.head = insertNode;
        } else if (index === this.size + 1) {
            insertNode.pre = this.tail;
            this.tail.next = insertNode;
            this.tail = insertNode;
        } else {
            const nextNode = this.find(index);
            insertNode.pre = nextNode.pre;
            insertNode.next = nextNode;
            insertNode.pre.next = insertNode;
            nextNode.pre = insertNode;
        }
        this.size++;
        return insertNode;
    }

    find(search) {
        if (typeof search !== 'number' && typeof search !== 'function') throw new Error('Get param require index number or search function');
        if (typeof search === 'number' && (search < 1 || search > this.size)) throw new Error('Get search index out of list range');
        let target = this.head;
        for (let i = 1; i <= this.size; i++) {
            if ((typeof search === 'number' && i === search) || (typeof search === 'function' && search(target))) return target;
            target = target.next;
        }
        return null;
    }

    delete(search) {
        if (typeof search !== 'number' && typeof search !== 'function') throw new Error('Delete param require index number or search function');
        if (typeof search === 'number' && (search < 1 || search > this.size)) throw new Error('Delete search index out of list range');
        const targetNode = this.find(search);
        if (!targetNode) return null;
        if (targetNode.pre) targetNode.pre.next = targetNode.next;
        else this.head = targetNode.next;
        if (targetNode.next) targetNode.next.pre = targetNode.pre;
        else this.tail = targetNode.pre;
        this.size--;
        return targetNode;
    }

    toObjData(translate) {
        if (typeof translate !== 'function') throw new Error('ToObjData param require translate function');
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
}

class Node {
    constructor(data, list) {
        this.data = data;
        this.next = null;
        this.pre = null,
        Object.defineProperty(this, 'list', { value: list });
    }

    insertBefore(data) {
        const newNode = new Node(data, this.list);
        newNode.pre = this.pre;
        newNode.next = this;
        if (!this.pre) this.list.head = newNode;
        else this.pre.next = newNode;
        this.pre = newNode;
        this.list.size++;
        return newNode;
    }

    insertAfter(data) {
        const newNode = new Node(data, this.list);
        newNode.pre = this;
        newNode.next = this.next;
        if (!this.next) this.list.tail = newNode;
        else this.next.pre = newNode;
        this.next = newNode;
        this.list.size++;
        return newNode;
    }
}

module.exports = LinkedList;
