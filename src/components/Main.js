import React from 'react'
import InputName from './InputName';
import InputEdge from './InputEdge';
import OutputPath from './OutputPath';

function Main() {

    const [adjacencyList, setAdjacencyList] = React.useState(new Map());

    const addNode = (node) => {
        setAdjacencyList(new Map([...adjacencyList, [node, []]]));
    }

    const addEdgeWeight = (node1, node2, weight) => {
      if(adjacencyList.has(node1) && adjacencyList.has(node2)){
        if(adjacencyList.get(node1).includes(node2)){
          alert("Edge already exists");
        }
        else{
          const newAdjacencyList = new Map(adjacencyList);
          newAdjacencyList.set(node1, [...newAdjacencyList.get(node1), [node2, weight]]);
          newAdjacencyList.set(node2, [...newAdjacencyList.get(node2), [node1, weight]]);
          setAdjacencyList(newAdjacencyList);
        }
      }
      else{
        alert("One or more nodes do not exist");
      }
    }  

    const clear = () => {
        setAdjacencyList(new Map());
    }


    
  return (
    <div className="flex flex-col mt-12 border-2 mx-4 p-4 shadow-md rounded-lg">
        <InputName addName={addNode} />
        <InputEdge addEdgeWeight={addEdgeWeight} />
        <OutputPath adjacencyList={adjacencyList} />
        <button onClick={clear} className="rounded-md bg-red-800 text-white text-sm h-8 w-20 m-2">Clear list</button>
    </div>
  )
}

export default Main