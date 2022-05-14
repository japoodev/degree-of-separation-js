import React from 'react'

function Main() {

    const [adjacencyList, setAdjacencyList] = React.useState(new Map());
    const [node, setNode] = React.useState("");
    const [edge, setEdge] = React.useState(
        {
            node1: "",
            node2: "",
            weight: ""
        }
    );

    const addNode = (node) => {
        setAdjacencyList(new Map([...adjacencyList, [node, []]]));
    }

    const addEdgeWeight = (node1, node2, weight) => {
      //Check if node1 and node2 exist
      if(adjacencyList.has(node1) && adjacencyList.has(node2)){
        //Check if edge already exists
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

        

    const handleNodeChange = (event) => {
        setNode(event.target.value);
    }

    const handleNodeSubmit = (event) => {
        event.preventDefault();
        addNode(node);
        setNode("");
    }

    const handleEdgeChange = (event) => {
        setEdge({...edge, [event.target.name]: event.target.value});
    }

    const handleEdgeSubmit = (event) => {
        event.preventDefault();
        addEdgeWeight(edge.node1, edge.node2, edge.weight);
        setEdge({
            node1: "",
            node2: "",
            weight: ""
        });
    }

    
  return (
    <div>
        <h1>Main</h1>
        <form>
            <label>
                Node:
                <input type="text" value={node} onChange={handleNodeChange} />
            </label>
            <input type="submit" value="Submit" onClick={handleNodeSubmit} />
        </form>
        <form>
            <label>
                Node 1:
                <input type="text" value={edge.node1} onChange={handleEdgeChange} name="node1" />
            </label>
            <label>
                Node 2:
                <input type="text" value={edge.node2} onChange={handleEdgeChange} name="node2" />
            </label>
            <label>
                Weight:
                <input type="text" value={edge.weight} onChange={handleEdgeChange} name="weight" />
            </label>
            <input type="submit" value="Submit" onClick={handleEdgeSubmit} />
        </form>
        <p>{adjacencyList} </p>
    </div>
  )
}

export default Main