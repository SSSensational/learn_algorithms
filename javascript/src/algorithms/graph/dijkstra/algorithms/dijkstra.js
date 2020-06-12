import MinPriorityQueue from'../data_structures/min_priority_queue';
// import AdjacencyTable from'../data_structures/adjacency_table';

class queueNode {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }

    [Symbol.toPrimitive] (hint) {
        if (hint === 'number') return this.weight;
        return this.vertex;
    }
}

export default function dijkstra(adjacencyTable, startVertex) {
    const ResolveMap = new Map([[startVertex, 0]]);
    const UnResolveMap = new Map();
    adjacencyTable.getAllVertex().filter(vertex => vertex !== startVertex).forEach(vertex => UnResolveMap.set(vertex, Infinity));
    adjacencyTable.getEdges(startVertex).forEach((weight, vertex) => UnResolveMap.set(vertex, weight));
    const unResolveQueue = new MinPriorityQueue(Array.from(UnResolveMap).map(([vertex, weight]) => new queueNode(vertex, weight)));
    let minVertex, needReQueue;
    while (unResolveQueue.size) {
        minVertex = unResolveQueue.dequeue();
        ResolveMap.set(minVertex.vertex, minVertex.weight);
        needReQueue = false;
        unResolveQueue.queue.forEach(({ vertex, weight }, index) => {
            const distance = (adjacencyTable.getEdges(minVertex.vertex).get(vertex) || Infinity) + minVertex.weight;
            if (distance < weight) {
                needReQueue = true;
                unResolveQueue.queue[index].weight = distance;
            }
        })
        if (needReQueue) unResolveQueue.update();
    }
    return ResolveMap;
}

// function main() {
//     const test = new AdjacencyTable();
//     test.addVertex('A');
//     test.addVertex('B');
//     test.addVertex('C');
//     test.addVertex('D');
//     test.addVertex('E');
//     test.addVertex('F');
//     test.addEdge('A', 'B', 6);
//     test.addEdge('A', 'C', 3);
//     test.addEdge('B', 'D', 5);
//     test.addEdge('C', 'B', 2);
//     test.addEdge('C', 'D', 3);
//     test.addEdge('C', 'E', 4);
//     test.addEdge('D', 'E', 2);
//     test.addEdge('D', 'F', 3);
//     test.addEdge('E', 'F', 5);
//     console.log(dijkstra(test, 'A'))
//     // console.log(test.getAllVertex())
//     // console.log(test.getEdges(2))
// }
// main();