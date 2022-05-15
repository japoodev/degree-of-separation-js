import React from 'react'

function OutputPath(props) {
    const [findDegree, setFindDegree] = React.useState(
        {
            node1: "",
            node2: ""
        }
    );

    const [result, setResult] = React.useState([]);

    function printAllPaths(node1, node2) {
        let paths = [];
        let visited = new Set();
        let queue = [];
        queue.push([node1, [node1]]);
        while (queue.length > 0) {
            let [currentNode, path] = queue.shift();
            visited.add(currentNode);
            if (currentNode === node2) {
                paths.push(path);
            }
            for (let [neighbor] of props.adjacencyList.get(currentNode)) {
                if (!visited.has(neighbor)) {
                    queue.push([neighbor, [...path, neighbor]]);
                }
            }
        }
        setResult(paths);
    }


    function handleChange(event) {
        setFindDegree({ ...findDegree, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        printAllPaths(findDegree.node1, findDegree.node2);
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
        {result.length > 0 &&<div className="ml-2">
            <h3>Result</h3>
            <ul className="font-semibold">
                {result.map((path, index) => {
                    return <li key={index}>{index+1}. {path.join(" -> ")}</li>
                })}
            </ul>
            <button className="rounded-md bg-amber-600 text-white text-sm h-8 w-20 m-2" onClick={() => setResult([])}>Clear result</button>
        </div>}
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