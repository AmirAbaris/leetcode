class Graph {
  constructor() {
    this.list = {};
  }

  // addVertex(vertex) {
  //   if (!this.list[vertex]) {
  //     this.list[vertex] = [];

  //     return true;
  //   }

  //   return false;
  // }

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

  // addEdge(vertex1, vertex2) {
  //   if (!this.list[vertex1] && !this.list[vertex2]) return false;
  //   this.list[vertex1].push(vertex2);
  //   this.list[vertex2].push(vertex1);

  //   return true;
  // }

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
    if (!this.list[vertex]) return undefined;

    while (this.list[vertex].length) {
      let temp = this.list[vertex].pop();

      this.removeEdge(vertex, temp);
    }

    delete this.list[vertex];
    return this;
  }
}

const myGraph = new Graph();
console.log(myGraph);
myGraph.addVertex("A");
console.log(myGraph);
