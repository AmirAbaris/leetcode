class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = [];

      return true;
    }

    return false;
  }

  addEdge(vertex1, vertex2) {
    if (!this.list[vertex1] && !this.list[vertex2]) return false;
    this.list[vertex1].push(vertex2);
    this.list[vertex2].push(vertex1);

    return true;
  }

  removeEdge(vertex1, vertex2) {
    if (this.list[vertex1] && this.list[vertex2]) {
      this.list[vertex1] = this.list[vertex1].filter(
        (item) => item !== vertex2,
      );
      this.list[vertex2] = this.list[vertex2].filter(
        (item) => item !== vertex1,
      );

      return true;
    }

    return false;
  }

  removeVertex(vertex) {
    for (let item of this.list[vertex]) {
    }

    if (this.list[vertex]) {
      delete this.list[vertex];
    }
  }
}

const myGraph = new Graph();
console.log(myGraph);
myGraph.addVertex("C");
myGraph.addVertex("A");
myGraph.addVertex("B");
console.log(myGraph);
myGraph.addEdge("A", "B");
console.log(myGraph);
myGraph.addEdge("C", "A");
console.log(myGraph);
myGraph.removeEdge("A", "C");
console.log(myGraph);
myGraph.removeVertex("A");
console.log(myGraph);
