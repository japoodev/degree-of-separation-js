import React from 'react'

function OutputPath(props) {
    const [findDegree, setFindDegree] = React.useState(
        {
            node1: "",
            node2: ""
        }
    );

    const [result, setResult] = React.useState([]);

    const findShortestPath = (node1, node2) => {
        if(props.adjacencyList.has(node1) && props.adjacencyList.has(node2)){
            let path = [];
            let visited = new Set();
            let queue = [node1];
            while(queue.length > 0){
                let currentNode = queue.shift();
                path.push(currentNode)
                visited.add(currentNode);
                if(currentNode === node2){
                    break;
                }
                else{
                    let neighbors = props.adjacencyList.get(currentNode);
                    for(let i = 0; i < neighbors.length; i++){
                        if(!visited.has(neighbors[i][0])){
                            queue.push(neighbors[i][0]);
                        }
                    }
                }
            }
            setResult(path);
        }
        else{
            alert("One or more nodes do not exist");
        }
    }

    const handleChange = (event) => {
        setFindDegree({...findDegree, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        findShortestPath(findDegree.node1, findDegree.node2);
        setFindDegree({
            node1: "",
            node2: ""
        });
    }

  return (
    <div>
        <form className="mb-4">
            <h3 className="ml-2">Find degree of separation</h3>
        
                <input className="border-2 rounded-md h-8 m-2" type="text" placeholder='Enter first name' value={findDegree.node1} onChange={handleChange} name="node1" />
            
                <input className="border-2 rounded-md h-8 m-2" type="text" placeholder='Enter second name' value={findDegree.node2} onChange={handleChange} name="node2" />
            
            <input className="rounded-md bg-indigo-800 text-white text-sm h-8 w-14 m-2" type="submit" value="Submit" onClick={handleSubmit} />
        </form>
        {result.length > 0 && <p className="ml-2">The degree of separation is: <b>{result.join(" > ")}</b></p>}
        {props.adjacencyList.size > 0 && <div>
            <h3 className="ml-2 underline font-semibold">Adjacency List</h3>
            {Array.from(props.adjacencyList.keys()).map((key, index) => {
                return <p key={index} className="ml-2">{key}</p>
            })}
        </div>
        }

    </div>
  )
}

export default OutputPath