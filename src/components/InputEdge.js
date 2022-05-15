import React from 'react'

function InputEdge(props) {
    const [edge, setEdge] = React.useState(
        {
            name1: "",
            name2: "",
            relationship: "friend"
        }
    );

    const handleChange = (event) => {
        setEdge({
            ...edge,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addEdgeWeight(edge.name1, edge.name2, edge.relationship);
        setEdge({
            name1: "",
            name2: "",
            relationship: "friend"
        });
    }
        
  return (
    <form className="mb-4">
        <h3 className="ml-2">Add relationship between two people</h3>
            <input className="border-2 rounded-md h-8 m-2" type="text" placeholder='First person' value={edge.name1} onChange={handleChange} name="name1" />

            <input className="border-2 rounded-md h-8 m-2" type="text" placeholder='Second person' value={edge.name2} onChange={handleChange} name="name2" />

            <select className="border-2 rounded-md h-8 m-2" value={edge.relationship} onChange={handleChange} name="relationship">
                <option value="friend">Friend</option>
            </select>
            {/* <input className="border-2 rounded-md h-8 m-2" type="text" placeholder='Enter relationship' value={edge.relationship} onChange={handleChange} name="relationship" /> */}
        
        <input className="rounded-md bg-indigo-800 text-white text-sm h-8 w-14 m-2" type="submit" value="Add" onClick={handleSubmit} />
    </form>
  )
}

export default InputEdge