import React from 'react'

function OutputPath(props) {
    const [findDegree, setFindDegree] = React.useState(
        {
            node1: "",
            node2: ""
        }
    );

    const [result, setResult] = React.useState([]);

    function findPath(node1, node2) {
        const queue = [];
        queue.push(node1);

        const discovered = [];
        discovered[node1] = true;

        const edges = [];
        edges[node1] = 0;

        const predecessors = [];
        predecessors[node1] = null;

        const buildPath = (node2, node1, predecessors) => {
            const stack = [];
            stack.push(node2);

            let u = predecessors[node2];

            while (u !== node1) {
                stack.push(u);
                u = predecessors[u];
            }

            stack.push(node1);

            return stack.reverse();
        }

        while (queue.length > 0) {
            let v = queue.shift();

            if (v === node2) {
                setResult(buildPath(node2, node1, predecessors));
                return;
            }

            for (let i = 0; i < props.adjacencyList.get(v).length; i++) {
                if(!discovered[props.adjacencyList.get(v)[i][0]]){
                    queue.push(props.adjacencyList.get(v)[i][0]);
                    discovered[props.adjacencyList.get(v)[i][0]] = true;
                    edges[props.adjacencyList.get(v)[i][0]] = edges[v] + 1;
                    predecessors[props.adjacencyList.get(v)[i][0]] = v;
                }
            }
        }

        setResult([]);

    }


    function handleChange(event) {
        setFindDegree({ ...findDegree, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        findPath(findDegree.node1, findDegree.node2);
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