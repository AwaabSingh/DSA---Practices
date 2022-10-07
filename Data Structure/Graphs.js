class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjecentList = {}
    }

    addNode(node) {
        this.adjecentList[node] = [];
        this.numberOfNodes++
    }

    addEdge(node1, node2) {
        // Undirections
        // Connections 
        this.adjecentList[node1].push(node2)
        this.adjecentList[node2].push(node1);
    }
}

const myGraph = new Graph();
myGraph.addNode('0');
myGraph.addNode('1');
myGraph.addNode('2');
myGraph.addNode('3');
myGraph.addNode('4');
myGraph.addNode('5');
myGraph.addNode('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

console.log(myGraph);