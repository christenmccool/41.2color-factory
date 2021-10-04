import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

const ColorForm = ({addColor}) => {
  const initialForm = {
    name: "",
    hex: ""
  }
  const [formObj, setFormObj] = useState(initialForm);

  const onChange = (evt) => {
    const {name, value} = evt.target;
    setFormObj({...formObj, [name]:value}) 
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColor(formObj);
    setFormObj(initialForm);
    <Redirect to="/colors" />
  }

  return (    
    <div className="ColorForm">
      <form className="ColorForm-form" onSubmit={handleSubmit}>
        <input type="text"  name="name" value={formObj.name} onChange={onChange} required/>
        <input type="color" name="hex" value={formObj.hex} onChange={onChange}/>
        <button>Add this color</button>
      </form>
      <Link to="/colors">Go back</Link>
    </div>
  )
}

export default ColorForm;

