import React from 'react'
import InputName from './InputName';
import InputEdge from './InputEdge';
import OutputPath from './OutputPath';

const Main = () => {

    const [adjacencyList, setAdjacencyList] = React.useState(new Map());

    const addNode = (node) => {
      node = node.trim();
      if(node === '') return;
      if(adjacencyList.has(node)){
        alert("Node already exists");
        return;
      }
      setAdjacencyList(new Map([...adjacencyList, [node, []]]));
    }

    const addEdgeWeight = (node1, node2, weight) => {
      node1 = node1.trim();
      node2 = node2.trim();
      if(adjacencyList.has(node1) && adjacencyList.has(node2)){
        // eslint-disable-next-line
        if(!adjacencyList.get(node1).map(x => x == `${node2},${weight}` ? 'yes' : 'no').includes('yes')){
          const newAdjacencyList = new Map(adjacencyList);
          newAdjacencyList.set(node1, [...newAdjacencyList.get(node1), [node2, weight]]);
          newAdjacencyList.set(node2, [...newAdjacencyList.get(node2), [node1, weight]]);
          setAdjacencyList(newAdjacencyList);
        }
        else{
          alert("Edge already exists");
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
        {adjacencyList.size > 0 && <button onClick={clear} className="rounded-md bg-red-800 text-white text-sm h-8 w-20 m-2">Clear list</button>}
    </div>
  )
}

export default Main