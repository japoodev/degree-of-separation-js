import React from 'react'

function Main() {

    const [adjacencyList, setAdjacencyList] = React.useState(new Map());

    const addNode = (node) => {
        setAdjacencyList(new Map([...adjacencyList, [node, []]]));
    }

    const addEdgeWeight = (node1, node2, weight) => {
        const newAdjacencyList = new Map(adjacencyList);
        newAdjacencyList.set(node1, [...newAdjacencyList.get(node1), [node2, weight]]);
        newAdjacencyList.set(node2, [...newAdjacencyList.get(node2), [node1, weight]]);
        setAdjacencyList(newAdjacencyList);
    }


  return (
    <div>
        <h1>Main</h1>
        <button onClick={() => addNode('A')}>Add Node A</button>
        <button onClick={() => addNode('B')}>Add Node B</button>
        <button onClick={() => addNode('C')}>Add Node C</button>
        <button onClick={() => addEdgeWeight('A', 'B', 1)}>Add Edge A -> B</button>
        <button onClick={() => addEdgeWeight('A', 'C', 2)}>Add Edge A -> C</button>
        <button onClick={() => addEdgeWeight('B', 'C', 3)}>Add Edge B -> C</button>

        <pre>{JSON.stringify(adjacencyList, null, 2)}</pre>
    </div>
  )
}

export default Main