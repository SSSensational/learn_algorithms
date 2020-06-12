class AdjacencyTable {
    constructor() {
        this.Lists = new Map();
    }

    addVertex(vertex) {
        if (this.Lists.get(vertex)) return false;
        // this.Lists.set(vertex, new Map([[vertex, 0]]));
        this.Lists.set(vertex, new Map());
        return true;
    }

    addEdge(fromVertex, toVertex, weight) {
        const targetList = this.Lists.get(fromVertex);
        if (!targetList || !this.Lists.get(toVertex)) return false;
        if (targetList.get(toVertex)) return false;
        targetList.set(toVertex, weight);
        return true;
    }

    updateEdge(fromVertex, toVertex, weight) {
        const targetList = this.Lists.get(fromVertex);
        if (!targetList || !this.Lists.get(toVertex)) return false;
        const targetEdge = targetList.get(toVertex);
        if (!targetEdge) return false;
        targetEdge.set(toVertex, weight);
        return true;
    }

    getAllVertex() {
        return Array.from(this.Lists).map(([key]) => key);
    }

    getEdges(vertex) {
        return this.Lists.get(vertex);
    }

    print() {
        return (
            Array.from(this.Lists)
            .map(([_, List]) => List)
            .map(List => 
                Array.from(List).map(([vertex, weight], index) => 
                    `vertex: ${vertex}${vertex === 0 ? '' : `, weight: ${weight}`}${index === List.size - 1 ? '' : ' -> '}`)
                        .join('')
            )
            .join('\n')
        );
    }
}

module.exports = AdjacencyTable;