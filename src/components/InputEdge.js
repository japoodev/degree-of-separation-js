import React from 'react'

function InputEdge(props) {
    const [edge, setEdge] = React.useState(
        {
            name1: "",
            name2: "",
            relationship: ""
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
            relationship: ""
        });
    }
        
  return (
    <form className="mb-4">
        <h3 className="ml-2">Add relationship between two people</h3>
            <input className="border-2 rounded-md h-8 m-2" type="text" placeholder='Enter first name' value={edge.name1} onChange={handleChange} name="name1" />

            <input className="border-2 rounded-md h-8 m-2" type="text" placeholder='Enter second name' value={edge.name2} onChange={handleChange} name="name2" />
        
            <input className="border-2 rounded-md h-8 m-2" type="text" placeholder='Enter relationship' value={edge.relationship} onChange={handleChange} name="relationship" />
        
        <input className="rounded-md bg-indigo-800 text-white text-sm h-8 w-14 m-2" type="submit" value="Add" onClick={handleSubmit} />
    </form>
  )
}

export default InputEdge