import React from 'react'

function InputName(props) {
    const [name, setName] = React.useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addName(name);
        setName('');
    }
  return (
    <form className="mb-4">
        <h3 className="ml-2">Add name to the list</h3>
        <input className="border-2 rounded-md h-8 m-2" placeholder='Enter name' type="text" value={name} onChange={handleChange} />
        <input className="rounded-md bg-indigo-800 text-white text-sm h-8 w-14 m-2" type="submit" value="Add" onClick={handleSubmit} />
    </form>
  )
}

export default InputName